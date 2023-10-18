---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / \_StoreOnActionListenerContext

# Интерфейс: \_StoreOnActionListenerContext<Store, ActionName, A\>

[pinia](../modules/pinia.md)._StoreOnActionListenerContext

Фактический тип для [StoreOnActionListenerContext](../modules/pinia.md#StoreOnActionListenerContext). Существует для целей рефакторинга. Только для внутреннего **использования**.

## Параметры типа

| Название     | Тип              |
| :----------- | :--------------- |
| `Store`      | `Store`          |
| `ActionName` | extends `string` |
| `A`          | `A`              |

## Свойства

### after

• **after**: (`callback`: `A` extends `Record`<`ActionName`, [`_Method`](../modules/pinia.md#_Method)\> ? (`resolvedReturn`: [`_Awaited`](../modules/pinia.md#_Awaited)<`ReturnType`<`A`[`ActionName`]\>\>) => `void` : () => `void`) => `void`

#### Объявление типа

▸ (`callback`): `void`

Устанавливает хук по завершению действия. Он получает возвращаемое действием значение, если это Promise, то оно будет развернуто.

##### Свойства

| Название   | Тип                                                                                                                                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | `A` extends `Record`<`ActionName`, [`_Method`](../modules/pinia.md#_Method)\> ? (`resolvedReturn`: [`_Awaited`](../modules/pinia.md#_Awaited)<`ReturnType`<`A`[`ActionName`]\>\>) => `void` : () => `void` |

##### Возвращает

`void`

___

### args

• **args**: `A` extends `Record`<`ActionName`, [`_Method`](../modules/pinia.md#_Method)\> ? `Parameters`<`A`[`ActionName`]\> : `unknown`[]

Параметры, передаваемые действию

___

### name

• **name**: `ActionName`

Название действия

___

### onError

• **onError**: (`callback`: (`error`: `unknown`) => `void`) => `void`

#### Объявление типа

▸ (`callback`): `void`

Устанавливает хук при неудачном выполнении действия. Возвращайте `false`, чтобы перехватить ошибку и
остановить ее распространение.

##### Параметры

| Название   | Тип                            |
| :--------- | :----------------------------- |
| `callback` | (`error`: `unknown`) => `void` |

##### Возвращает

`void`

___

### store

• **store**: `Store`

Хранилище, вызывающее действие
