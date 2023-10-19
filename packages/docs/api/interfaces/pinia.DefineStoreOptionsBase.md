---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / DefineStoreOptionsBase

# Интерфейс: DefineStoreOptionsBase<S, Store\>

[pinia](../modules/pinia.md).DefineStoreOptionsBase

Опции, передаваемые в `defineStore()`, которые являются общими для option-хранилищ и setup-хранилищ. Расширьте этот интерфейс, если вы хотите добавить собственные опции к обоим типам хранилищ.

## Параметры типа

| Название | Тип                                                  |
| :------- | :--------------------------------------------------- |
| `S`      | extends [`StateTree`](../modules/pinia.md#StateTree) |
| `Store`  | `Store`                                              |

## Иерархия

- **`DefineStoreOptionsBase`**

  ↳ [`DefineStoreOptions`](pinia.DefineStoreOptions.md)

  ↳ [`DefineSetupStoreOptions`](pinia.DefineSetupStoreOptions.md)
