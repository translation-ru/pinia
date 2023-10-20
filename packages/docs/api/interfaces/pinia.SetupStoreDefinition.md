---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / SetupStoreDefinition

# Интерфейс: SetupStoreDefinition<Id, SS\>

[pinia](../modules/pinia.md).SetupStoreDefinition

Возвращает тип `defineStore()` c setup-функцией.

- `Id`строковое обозначение названия хранилище
- `SS`возвращаемый тип setup-функции

**`Смотрите`**

[StoreDefinition](pinia.StoreDefinition.md)

## Параметры типа

| Название | Тип              |
| :------- | :--------------- |
| `Id`     | extends `string` |
| `SS`     | `SS`             |

## Иерархия

- [`StoreDefinition`](pinia.StoreDefinition.md)<`Id`, [`_ExtractStateFromSetupStore`](../modules/pinia.md#_extractstatefromsetupstore)<`SS`\>, [`_ExtractGettersFromSetupStore`](../modules/pinia.md#_extractgettersfromsetupstore)<`SS`\>, [`_ExtractActionsFromSetupStore`](../modules/pinia.md#_extractactionsfromsetupstore)<`SS`\>\>

  ↳ **`SetupStoreDefinition`**

## Вызов

### SetupStoreDefinition

▸ **SetupStoreDefinition**(`pinia?`, `hot?`): [`Store`](../modules/pinia.md#store)<`Id`, [`_ExtractStateFromSetupStore`](../modules/pinia.md#_extractstatefromsetupstore)<`SS`\>, [`_ExtractGettersFromSetupStore`](../modules/pinia.md#_extractgettersfromsetupstore)<`SS`\>, [`_ExtractActionsFromSetupStore`](../modules/pinia.md#_extractactionsfromsetupstore)<`SS`\>\>

Возвращает хранилище, при необходимости создает его.

#### Параметры

| Название | Тип                                                | Описание                                      |
| :------- | :------------------------------------------------- | :-------------------------------------------- |
| `pinia?` | `null` \| [`Pinia`](pinia.Pinia.md)                | Экземпляр Pinia для получения хранилища       |
| `hot?`   | [`StoreGeneric`](../modules/pinia.md#storegeneric) | только для разработки, горячая замена модулей |

#### Возвращает

[`Store`](../modules/pinia.md#store)<`Id`, [`_ExtractStateFromSetupStore`](../modules/pinia.md#_extractstatefromsetupstore)<`SS`\>, [`_ExtractGettersFromSetupStore`](../modules/pinia.md#_extractgettersfromsetupstore)<`SS`\>, [`_ExtractActionsFromSetupStore`](../modules/pinia.md#_extractactionsfromsetupstore)<`SS`\>\>

## Свойства

### $id

• **$id**: `Id`

Id хранилища. Используется map-помощниками.

#### Наследуется от

[StoreDefinition](pinia.StoreDefinition.md).[$id](pinia.StoreDefinition.md#$id)
