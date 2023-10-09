# Композиция хранилищ %{#composing-stores}%

Композиция хранилищ связана с использованием хранилищами друг друга, и это поддерживается в Pinia. Существует одно правило, которое нужно соблюдать:

Если **два или более хранилища используют друг друга**, они не могут создавать бесконечный цикл через _геттеры_ или _действия_. Они не могут оба напрямую читать состояние друг друга в своей setup-функции:

```js
const useX = defineStore('x', () => {
  const y = useY()

  // ❌ Это невозможно, так как `y` также пытается прочитать `x.name`
  y.name

  function doSomething() {
    // ✅ Чтение свойств `y` в вычисляемых свойствах или действиях
    const yName = y.name
    // ...
  }

  return {
    name: ref('I am X'),
  }
})

const useY = defineStore('y', () => {
  const x = useX()

  // ❌ Это невозможно, так как `x` также пытается прочитать `y.name`
  x.name

  function doSomething() {
    // ✅ Чтение свойств `x` в вычисляемых свойствах или действиях
    const xName = x.name
    // ...
  }

  return {
    name: ref('I am Y'),
  }
})
```

## Вложенные хранилища %{#nested-stores}%

Обратите внимание, что если одно хранилище использует другое хранилище, вы можете напрямую импортировать и вызывать функцию `useStore()` внутри действий и геттеров. Затем вы можете взаимодействовать с хранилищем так, как вы бы делали это из компонента Vue. См. [Совместные геттеры](#shared-getters) и [Совместные действия](#shared-actions).

Когда речь идет о _setup-хранилищах_, можно просто использовать одно из хранилищ **в верхней части** функции хранилища:

```ts
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', () => {
  const user = useUserStore()
  const list = ref([])

  const summary = computed(() => {
    return `Hi ${user.name}, you have ${list.value.length} items in your cart. It costs ${price.value}.`
  })

  function purchase() {
    return apiPurchase(user.id, this.list)
  }

  return { summary, purchase }
})
```

## Совместные геттеры %{#shared-getters}%

Вы можете просто вызвать `useOtherStore()` внутри _геттера_:

```js
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  getters: {
    summary(state) {
      const user = useUserStore()

      return `Hi ${user.name}, you have ${state.list.length} items in your cart. It costs ${state.price}.`
    },
  },
})
```

## Совместные действия %{#shared-actions}%

То же самое относится и к _действиям_:

```js
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  actions: {
    async orderCart() {
      const user = useUserStore()

      try {
        await apiOrderCart(user.token, this.items)
        // другое действие
        this.emptyCart()
      } catch (err) {
        displayError(err)
      }
    },
  },
})
```

Поскольку действия могут быть асинхронными, убедитесь, что **все ваши вызовы `useStore()` вызываются перед любым оператором `await`**. В противном случае это может привести к использованию неправильного экземпляра pinia _в приложениях с рендерингом на стороне сервера_:

```js{7-8,11-13}
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  actions: {
    async orderCart() {
      // ✅ вызов в верхней части действия перед любым `await`
      const user = useUserStore()

      try {
        await apiOrderCart(user.token, this.items)
        // ❌ вызывается после оператора `await`
        const otherStore = useOtherStore()
        // другое действие
        this.emptyCart()
      } catch (err) {
        displayError(err)
      }
    },
  },
})
```
