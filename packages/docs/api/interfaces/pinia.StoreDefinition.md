---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / StoreDefinition

# Интерфейс: StoreDefinition<Id, S, G, A\>

[pinia](../modules/pinia.md).StoreDefinition

Возвращает тип `defineStore()`. Функция, которая позволяет создать хранилище.

## Параметры типа

| Название | Тип                                                                                                 |
| :------- | :-------------------------------------------------------------------------------------------------- |
| `Id`     | extends `string` = `string`                                                                         |
| `S`      | extends [`StateTree`](../modules/pinia.md#StateTree) = [`StateTree`](../modules/pinia.md#StateTree) |
| `G`      | [`_GettersTree`](../modules/pinia.md#_GettersTree)<`S`\>                                            |
| `A`      | [`_ActionsTree`](../modules/pinia.md#_ActionsTree)                                                  |

## Иерархия

- **`StoreDefinition`**

  ↳ [`SetupStoreDefinition`](pinia.SetupStoreDefinition.md)

## Callable

### StoreDefinition

▸ **StoreDefinition**(`pinia?`, `hot?`): [`Store`](../modules/pinia.md#Store)<`Id`, `S`, `G`, `A`\>

Возвращает хранилище, при необходимости создает его.

#### Параметры

| Название | Тип                                                | Описание                                      |
| :------- | :------------------------------------------------- | :-------------------------------------------- |
| `pinia?` | `null` \| [`Pinia`](pinia.Pinia.md)                | Экземпляр Pinia для получения хранилища       |
| `hot?`   | [`StoreGeneric`](../modules/pinia.md#StoreGeneric) | только для разработки, горячая замена модулей |

#### Возвращает

[`Store`](../modules/pinia.md#Store)<`Id`, `S`, `G`, `A`\>

## Свойства

### $id

• **$id**: `Id`

Id магазина. Используется map-помощниками.
