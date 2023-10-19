---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / DefineSetupStoreOptions

# Интерфейс: DefineSetupStoreOptions<Id, S, G, A\>

[pinia](../modules/pinia.md).DefineSetupStoreOptions

Параметр `options` функции `defineStore()` для создания setup-хранилищ. Может быть расширен для дополнения хранилищ с использованием API плагинов.

**`Смотрите`**

[DefineStoreOptionsBase](pinia.DefineStoreOptionsBase.md).

## Параметры типа

| Название | Тип                                                  |
| :------- | :--------------------------------------------------- |
| `Id`     | extends `string`                                     |
| `S`      | extends [`StateTree`](../modules/pinia.md#StateTree) |
| `G`      | `G`                                                  |
| `A`      | `A`                                                  |

## Иерархия

- [`DefineStoreOptionsBase`](pinia.DefineStoreOptionsBase.md)<`S`, [`Store`](../modules/pinia.md#Store)<`Id`, `S`, `G`, `A`\>\>

  ↳ **`DefineSetupStoreOptions`**

## Свойства

### actions

• `Опционально` **actions**: `A`

Извлеченные действия. Добавляются с помощью useStore(). НЕ ДОЛЖНЫ добавляться пользователем при создании хранилища. Могут использоваться в плагинах для получения списка действий в хранилище, определенном с помощью setup-функции. Обратите внимание, что это свойство всегда определено
