---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / PiniaPluginContext

# Интерфейс: PiniaPluginContext\<Id, S, G, A\>

[pinia](../modules/pinia.md).PiniaPluginContext

Аргумент контекста, передаваемый плагинам Pinia.

## Параметры типа

| Название | Тип                                                                                                 |
| :------- | :-------------------------------------------------------------------------------------------------- |
| `Id`     | extends `string` = `string`                                                                         |
| `S`      | extends [`StateTree`](../modules/pinia.md#StateTree) = [`StateTree`](../modules/pinia.md#StateTree) |
| `G`      | [`_GettersTree`](../modules/pinia.md#_GettersTree)\<`S`\>                                           |
| `A`      | [`_ActionsTree`](../modules/pinia.md#_ActionsTree)                                                  |

## Свойства

### app

• **app**: `App`\<`any`\>

Текущее приложение, созданное при помощи `Vue.createApp()`.

___

### options

• **options**: [`DefineStoreOptionsInPlugin`](pinia.DefineStoreOptionsInPlugin.md)\<`Id`, `S`, `G`, `A`\>

Начальные опции, определяющие хранилище при вызове `defineStore()`.

___

### pinia

• **pinia**: [`Pinia`](pinia.Pinia.md)

экземпляр pinia.

___

### store

• **store**: [`Store`](../modules/pinia.md#Store)\<`Id`, `S`, `G`, `A`\>

Текущее хранилище, которое будет расширено.
