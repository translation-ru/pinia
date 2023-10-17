---
editLink: false
---

[Документация API](../index.md) / [@pinia/testing](../modules/pinia_testing.md) / TestingPinia

# Интерфейс: TestingPinia

[@pinia/testing](../modules/pinia_testing.md).TestingPinia

Экземпляр Pinia, специально разработанный для тестирования. Расширяет обычный `Pinia` со специфическими для тестирования свойствами.

## Иерархия

- [`Pinia`](pinia.Pinia.md)

  ↳ **`TestingPinia`**

## Свойства

### app

• **app**: `App`<`any`\>

Приложение, используемое Pinia

___

### install

• **install**: (`app`: `App`<`any`\>) => `void`

#### Объявление типа

▸ (`app`): `void`

##### Параметры

| Название | Тип           |
| :------- | :------------ |
| `app`    | `App`<`any`\> |

##### Возвращает

`void`

#### Наследуется от

[Pinia](pinia.Pinia.md).[install](pinia.Pinia.md#install)

___

### state

• **state**: `Ref`<`Record`<`string`, [`StateTree`](../modules/pinia.md#statetree)\>\>

корневое состояние

#### Наследуется от

[Pinia](pinia.Pinia.md).[state](pinia.Pinia.md#state)

## Методы

### use

▸ **use**(`plugin`): [`Pinia`](pinia.Pinia.md)

Добавляет плагин хранилища для расширения каждого из хранилищ

#### Параметры

| Название | Тип                                   | Описание                        |
| :------- | :------------------------------------ | :------------------------------ |
| `plugin` | [`PiniaPlugin`](pinia.PiniaPlugin.md) | плагин хранилища для добавления |

#### Возвращает

[`Pinia`](pinia.Pinia.md)

#### Наследуется от

[Pinia](pinia.Pinia.md).[use](pinia.Pinia.md#use)
