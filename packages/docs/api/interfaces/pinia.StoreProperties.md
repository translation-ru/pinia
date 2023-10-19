---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / StoreProperties

# Интерфейс: StoreProperties<Id\>

[pinia](../modules/pinia.md).StoreProperties

Свойства хранилища.

## Параметры типа

| Название | Тип              |
| :------- | :--------------- |
| `Id`     | extends `string` |

## Иерархия

- **`StoreProperties`**

  ↳ [`_StoreWithState`](pinia._StoreWithState.md)

## Свосйтва

### $id

• **$id**: `Id`

Уникальный идентификатор хранилища

___

### \_customProperties

• **\_customProperties**: `Set`<`string`\>

Используется плагином devtools для получения свойств, добавленных с помощью плагинов. Удаляется при production сборке. Может использоваться пользователем для добавления ключей свойств хранилища, которые должны отображаться в devtools.
