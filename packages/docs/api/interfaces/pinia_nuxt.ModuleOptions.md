---
editLink: false
---

[Документация API](../index.md) / [@pinia/nuxt](../modules/pinia_nuxt.md) / ModuleOptions

# Интерфейс: ModuleOptions

[@pinia/nuxt](../modules/pinia_nuxt.md).ModuleOptions

## Свойства

### disableVuex

• `Опционально` **disableVuex**: `boolean`

По умолчанию Pinia отключает Vuex , установите значение `false`,
чтобы избежать этого и использовать Pinia вместе с Vuex (только для Nuxt 2)

**`По умолчанию`**

`true`

___

### storesDirs

• `Опционально` **storesDirs**: `string`[]

Автоматическое добавление директорий хранилищ в автоимпорт. Это то же самое,
что и прямое добавление файлов в опцию `imports.dirs`. Если вы хотите также
импортировать вложенные хранилища, можно использовать glob pattern `./stores/**`.

**`По умолчанию`**

`['stores']`
