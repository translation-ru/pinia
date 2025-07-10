# Тестирование хранилищ %{#testing-stores}%

Хранилища, по своей сути, будут использоваться во многих местах и могут сделать тестирование намного сложнее, чем это должно быть. К счастью, это необязательно так. При тестировании хранилищ нам нужно позаботиться о трех вещах:

- Экземпляр `pinia`: Хранилища не могут работать без него
- `actions`: чаще всего они содержат самую сложную логику наших хранилищ. Было бы неплохо, если бы они имитировались (mock) по умолчанию?
- Плагины: Если вы полагаетесь на плагины, вам придется установить их и для тестов

В зависимости от того, что или как вы тестируете, мы должны позаботиться об этих трех вещах по-разному.

## Модульное (unit) тестирование хранилища %{#unit-testing-a-store}%

Для проведения модульного тестирования хранилищ наиболее важной частью является создание экземпляра `pinia`:

```js
// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '../src/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    // создаем новый экземпляр pinia и делаем его активным,
    // чтобы он автоматически подхватывается любым вызовом useStore()
    // без необходимости его передачи: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.n).toBe(0)
    counter.increment()
    expect(counter.n).toBe(1)
  })

  it('increments by amount', () => {
    const counter = useCounterStore()
    counter.increment(10)
    expect(counter.n).toBe(10)
  })
})
```

Если у вас есть плагины хранилища, необходимо знать одну важную вещь: **плагины не будут использоваться до тех пор, пока `pinia` не будет установлена в App**. Эту проблему можно решить, создав пустое или поддельное приложение:

```js
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'
import { somePlugin } from '../src/stores/plugin'

// тот же код, что и выше...

// нет необходимости создавать отдельное приложение для каждого теста
const app = createApp({})
beforeEach(() => {
  const pinia = createPinia().use(somePlugin)
  app.use(pinia)
  setActivePinia(pinia)
})
```

## Модульное (unit) тестирование компонентов %{#unit-testing-components}%

Этого можно достичь с помощью функции `createTestingPinia()`, которая возвращает экземпляр pinia, разработанный для облегчения модульного тестирования компонентов.

Начните с установки `@pinia/testing`:

```shell
npm i -D @pinia/testing
```

И не забудьте при монтировании компонента создать в своих тестах тестовую pinia:

```js
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
// импортируйте любое хранилище, с которым вы хотите взаимодействовать в тестах
import { useSomeStore } from '@/stores/myStore'

const wrapper = mount(Counter, {
  global: {
    plugins: [createTestingPinia()],
  },
})

const store = useSomeStore() // используется тестовая pinia!

// состояние можно менять напрямую
store.name = 'my new name'
// также можно сделать это через patch
store.$patch({ name: 'new name' })
expect(store.name).toBe('new name')

// Действия по умолчанию являются заглушками (stubs), то есть по умолчанию не выполняют свой код.
// Как настроить это поведение, смотрите ниже.
store.someAction()

expect(store.someAction).toHaveBeenCalledTimes(1)
expect(store.someAction).toHaveBeenLastCalledWith()
```

Обратите внимание, что если вы используете Vue 2, то для `@vue/test-utils` требуется [немного другая конфигурация](#Unit-test-components-Vue-2-).

### Начальное состояние %{#initial-state}%

Вы можете установить начальное состояние всех ваших хранилищ при создании тестовой pinia, передав объект `initialState`. Этот объект будет использоваться тестовой pinia для _изменения (patch)_ хранилищ при их создании. Допустим, вы хотите инициализировать состояние этого хранилища:

```ts
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({ n: 0 }),
  // ...
})
```

Поскольку хранилище называется _"counter"_, вам нужно добавить соответствующий объект в `initialState`:

```ts
// где-нибудь в вашем тесте
const wrapper = mount(Counter, {
  global: {
    plugins: [
      createTestingPinia({
        initialState: {
          counter: { n: 20 }, // запускаем счетчик не с 0, а с 20
        },
      }),
    ],
  },
})

const store = useSomeStore() // используется тестовая pinia!
store.n // 20
```

### Настройка поведения действий %{#сustomizing-behavior-of-actions}%

`createTestingPinia` подменяет заглушками (stubs) все действия хранилища, если не указано обратное. Это позволяет вам проводить тестирование ваших компонентов и хранилищ отдельно друг от друга.

Если вы хотите отменить это поведение и нормально выполнять ваши действия во время тестов, укажите `stubActions: false` при вызове `createTestingPinia`:

```js
const wrapper = mount(Counter, {
  global: {
    plugins: [createTestingPinia({ stubActions: false })],
  },
})

const store = useSomeStore()

// Теперь этот вызов БУДЕТ выполнять реализацию, определенную в хранилище
store.someAction()

// ...но он все еще обернут шпионом (spy), так что вы можете проверять вызовы
expect(store.someAction).toHaveBeenCalledTimes(1)
```

### Имитация (mocking) возвращаемого значения действия %{#mocking-the-returned-value-of-action}%

Действия автоматически отслеживаются, но с точки зрения типов они остаются обычными действиями. Чтобы получить правильный тип, мы должны реализовать пользовательскую обертку типа, которая применяет тип `Mock` к каждому действию. **Этот тип зависит от используемого фреймворка тестирования**. Вот пример с Vitest:

```ts
import type { Mock } from 'vitest'
import type { Store, StoreDefinition } from 'pinia'

function mockedStore<TStoreDef extends () => unknown>(
  useStore: TStoreDef
): TStoreDef extends StoreDefinition<
  infer Id,
  infer State,
  infer Getters,
  infer Actions
>
  ? Store<
      Id,
      State,
      Getters,
      {
        [K in keyof Actions]: Actions[K] extends (
          ...args: infer Args
        ) => infer ReturnT
          ? // 👇 зависит от вашего фреймворка для тестирования
            Mock<Args, ReturnT>
          : Actions[K]
      }
    >
  : ReturnType<TStoreDef> {
  return useStore() as any
}
```

Это можно использовать в тестах, чтобы получить правильно типизированное хранилище:

```ts
import { mockedStore } from './mockedStore'
import { useSomeStore } from '@/stores/myStore'

const store = mockedStore(useSomeStore)
// типизировано!
store.someAction.mockResolvedValue('some value')
```

### Указание функции createSpy %{#specifying-the-createspy-function}%

При использовании Jest или vitest с `globals: true`, `createTestingPinia` автоматически создает заглушки (stubs) действий с помощью функции шпионов (spy) на основе существующего тестового фреймворка (`jest.fn` или `vitest.fn`). Если вы не используете `globals: true` или используете другой фреймворк, то вам необходимо указать опцию [createSpy](/api/interfaces/pinia_testing.TestingOptions.html#createspy):

::: code-group

```ts [vitest]
// ПРИМЕЧАНИЕ: не требуется при использовании `globals: true`
import { vi } from 'vitest'

createTestingPinia({
  createSpy: vi.fn,
})
```

```ts [sinon]
import sinon from 'sinon'

createTestingPinia({
  createSpy: sinon.spy,
})
```

:::

Другие примеры можно найти в [тестах пакета тестирования](https://github.com/vuejs/pinia/blob/v2/packages/testing/src/testing.spec.ts).

### Имитация (mocking) геттеров %{#mocking-getters}%

По умолчанию любой геттер будет вычисляться как и при обычном использовании, но вы можете вручную принудительно задать значение, установив геттер в любое нужное вам значение:

```ts
import { defineStore } from 'pinia'
import { createTestingPinia } from '@pinia/testing'

const useCounterStore = defineStore('counter', {
  state: () => ({ n: 1 }),
  getters: {
    double: (state) => state.n * 2,
  },
})

const pinia = createTestingPinia()
const counter = useCounterStore(pinia)

counter.double = 3 // 🪄 геттеры доступны для записи только в тестах

// установите значение undefined, чтобы сбросить стандартное поведение
// @ts-expect-error: обычно это число
counter.double = undefined
counter.double // 2 (=1 x 2)
```

### Плагины Pinia %{#pinia-plugins}%

Если у вас есть какие-либо плагины pinia, обязательно передайте их при вызове `createTestingPinia()`, чтобы они были правильно применены. **Не добавляйте их с помощью `testingPinia.use(MyPlugin)`**, как это было бы сделано с обычным pinia:

```js
import { createTestingPinia } from '@pinia/testing'
import { somePlugin } from '../src/stores/plugin'

// внутри какого-нибудь теста
const wrapper = mount(Counter, {
  global: {
    plugins: [
      createTestingPinia({
        stubActions: false,
        plugins: [somePlugin],
      }),
    ],
  },
})
```

## E2E-тесты %{#e2e-tests}%

Что касается Pinia, вам не нужно ничего менять для E2E-тестов, в этом вся суть этих тестов! Вы можете, возможно, тестировать HTTP-запросы, но это выходит за рамки данного руководства 😄.

## Модульное (unit) тестирование компонентов (Vue 2) %{#unit-test-components-vue-2}%

При использовании [Vue Test Utils 1](https://v1.test-utils.vuejs.org/) установите Pinia на `localVue`:

```js
import { PiniaVuePlugin } from 'pinia'
import { createLocalVue, mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

const localVue = createLocalVue()
localVue.use(PiniaVuePlugin)

const wrapper = mount(Counter, {
  localVue,
  pinia: createTestingPinia(),
})

const store = useSomeStore() // используется тестовая pinia!
```
