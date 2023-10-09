# Использование без `setup()` %{#usage-without-setup}%

Pinia можно использовать даже если вы не используете сomposition API (если вы используете Vue <2.7, вам все равно нужно установить плагин `@vue/composition-api`). Хотя мы рекомендуем вам попробовать Composition API и изучить его, возможно, сейчас не самое подходящее время для вас и вашей команды, вы можете находиться в процессе миграции приложения или по какой-либо другой причине. Существует несколько функций:

- [mapStores](#giving-access-to-the-whole-store)
- [mapState](../core-concepts/state.md#usage-with-the-options-api)
- [mapWritableState](../core-concepts/state.md#modifiable-state)
- ⚠️ [mapGetters](../core-concepts/getters.md#without-setup) (для удобства миграции вместо этого используйте `mapState()`.)
- [mapActions](../core-concepts/actions.md#without-setup)

## Предоставление доступа ко всему хранилищу %{#giving-access-to-the-whole-store}%

Если вам нужен доступ практически ко всему в хранилище, то может быть слишком сложно сопоставлять каждое свойство хранилища... Вместо этого вы можете получить доступ ко всему хранилищу с помощью `mapStores()`:

```js
import { mapStores } from 'pinia'

// даны два магазина со следующими ids
const useUserStore = defineStore('user', {
  // ...
})
const useCartStore = defineStore('cart', {
  // ...
})

export default {
  computed: {
    // обратите внимание, что мы передаем не массив, а просто одно хранилище за другим
    // каждое хранилище будет доступно как его id + 'Store'
    ...mapStores(useCartStore, useUserStore),
  },

  methods: {
    async buyStuff() {
      // используйте их где угодно!
      if (this.userStore.isAuthenticated()) {
        await this.cartStore.buy()
        this.$router.push('/purchased')
      }
    },
  },
}
```

По умолчанию Pinia добавляет суффикс `"Store"` к `id` каждого хранилища. Вы можете настроить это поведение, вызвав функцию `setMapStoreSuffix()`:

```js
import { createPinia, setMapStoreSuffix } from 'pinia'

// полностью удаляем суффикс: this.user, this.cart
setMapStoreSuffix('')
// this.user_store, this.cart_store (ничего страшного, я вас не осуждаю)
setMapStoreSuffix('_store')
export const pinia = createPinia()
```

## TypeScript %{#typescript}%

По умолчанию все map-помощники поддерживают автозавершение, и вам не нужно ничего делать. Если вы вызываете `setMapStoreSuffix()`, чтобы изменить суффикс `"Store",` вам также потребуется добавить его где-то в файле TS или в файле `global.d.ts`. Самым удобным местом было бы то же место, где вы вызываете `setMapStoreSuffix()`:

```ts
import { createPinia, setMapStoreSuffix } from 'pinia'

setMapStoreSuffix('') // полностью удалить суффикс
export const pinia = createPinia()

declare module 'pinia' {
  export interface MapStoresCustomization {
    // установить его в то же значение, что и выше
    suffix: ''
  }
}
```

:::warning Предупреждение
Если вы используете файл декларации TypeScript (например, `global.d.ts`), не забудьте указать в его верхней части `import 'pinia'` для раскрытия всех существующих типов.
:::
