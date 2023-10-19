---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / PiniaCustomProperties

# Интерфейс: PiniaCustomProperties<Id, S, G, A\>

[pinia](../modules/pinia.md).PiniaCustomProperties

Интерфейс, расширяемый пользователем при добавлении свойств с помощью плагинов.

## Параметры типа

| Название | Тип                                                                                                 |
| :------- | :-------------------------------------------------------------------------------------------------- |
| `Id`     | extends `string` = `string`                                                                         |
| `S`      | extends [`StateTree`](../modules/pinia.md#StateTree) = [`StateTree`](../modules/pinia.md#StateTree) |
| `G`      | [`_GettersTree`](../modules/pinia.md#_GettersTree)<`S`\>                                            |
| `A`      | [`_ActionsTree`](../modules/pinia.md#_ActionsTree)                                                  |
