---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / PiniaPlugin

# Интерфейс: PiniaPlugin

[pinia](../modules/pinia.md).PiniaPlugin

Плагин, который расширяет каждое из хранилищ

## Callable

### PiniaPlugin

▸ **PiniaPlugin**(`context`): `void` \| `Partial`\<[`PiniaCustomProperties`](pinia.PiniaCustomProperties.md)\<`string`, [`StateTree`](../modules/pinia.md#StateTree), [`_GettersTree`](../modules/pinia.md#_GettersTree)\<[`StateTree`](../modules/pinia.md#StateTree)\>, [`_ActionsTree`](../modules/pinia.md#_ActionsTree)\> & [`PiniaCustomStateProperties`](pinia.PiniaCustomStateProperties.md)\<[`StateTree`](../modules/pinia.md#StateTree)\>\>

Плагин, который расширяет каждое из хранилищ. Возвращает объект для расширения хранилища или ничего.

#### Параметры

| Название  | Тип                                                                                                                                                                                                                                                                   | Описание |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| `context` | [`PiniaPluginContext`](pinia.PiniaPluginContext.md)\<`string`, [`StateTree`](../modules/pinia.md#StateTree), [`_GettersTree`](../modules/pinia.md#_GettersTree)\<[`StateTree`](../modules/pinia.md#StateTree)\>, [`_ActionsTree`](../modules/pinia.md#_ActionsTree)\> | Контекст |

#### Возвращает

`void` \| `Partial`\<[`PiniaCustomProperties`](pinia.PiniaCustomProperties.md)\<`string`, [`StateTree`](../modules/pinia.md#StateTree), [`_GettersTree`](../modules/pinia.md#_GettersTree)\<[`StateTree`](../modules/pinia.md#StateTree)\>, [`_ActionsTree`](../modules/pinia.md#_ActionsTree)\> & [`PiniaCustomStateProperties`](pinia.PiniaCustomStateProperties.md)\<[`StateTree`](../modules/pinia.md#StateTree)\>\>
