---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / Pinia

# Интерфейс: Pinia

[pinia](../modules/pinia.md).Pinia

Каждое приложение должно иметь свой собственный экземпляр pinia, чтобы иметь возможность создавать хранилища

## Иерархия

- **`Pinia`**

  ↳ [`TestingPinia`](pinia_testing.TestingPinia.md)

## Свойства

### install

• **install**: (`app`: `App`\<`any`\>) => `void`

#### Объявление типа

▸ (`app`): `void`

##### Параметры

| Название | Тип           |
| :------- | :------------ |
| `app`    | `App`\<`any`\> |

##### Возвращает

`void`

___

### state

• **state**: `Ref`\<`Record`\<`string`, [`StateTree`](../modules/pinia.md#StateTree)\>\>

корневое состояние

## Методы

### use

▸ **use**(`plugin`): [`Pinia`](pinia.Pinia.md)

Добавление плагина для расширения каждого из хранилищ

#### Параметры

| Название | Тип                                   | Описание                          |
| :------- | :------------------------------------ | :-------------------------------- |
| `plugin` | [`PiniaPlugin`](pinia.PiniaPlugin.md) | плагин для добавления в хранилище |

#### Возвращает

[`Pinia`](pinia.Pinia.md)
