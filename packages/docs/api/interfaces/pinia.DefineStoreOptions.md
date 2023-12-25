---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / DefineStoreOptions

# Интерфейс: DefineStoreOptions\<Id, S, G, A\>

[pinia](../modules/pinia.md).DefineStoreOptions

Параметр `options` функции `defineStore()` для создания option-хранилищ. Может быть расширен для дополнения хранилищ с использованием API плагинов.

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

- [`DefineStoreOptionsBase`](pinia.DefineStoreOptionsBase.md)\<`S`, [`Store`](../modules/pinia.md#Store)\<`Id`, `S`, `G`, `A`\>\>

  ↳ **`DefineStoreOptions`**

## Свойства

### actions

• `Optional` **actions**: `A` & `ThisType`\<`A` & `UnwrapRef`\<`S`\> & [`_StoreWithState`](pinia._StoreWithState.md)\<`Id`, `S`, `G`, `A`\> & [`_StoreWithGetters`](../modules/pinia.md#_StoreWithGetters)\<`G`\> & [`PiniaCustomProperties`](pinia.PiniaCustomProperties.md)\<`string`, [`StateTree`](../modules/pinia.md#StateTree), [`_GettersTree`](../modules/pinia.md#_GettersTree)\<[`StateTree`](../modules/pinia.md#StateTree)\>, [`_ActionsTree`](../modules/pinia.md#_ActionsTree)\>\>

Опциональный объект действий.

___

### getters

• `Optional` **getters**: `G` & `ThisType`\<`UnwrapRef`\<`S`\> & [`_StoreWithGetters`](../modules/pinia.md#_StoreWithGetters)\<`G`\> & [`PiniaCustomProperties`](pinia.PiniaCustomProperties.md)\<`string`, [`StateTree`](../modules/pinia.md#StateTree), [`_GettersTree`](../modules/pinia.md#_GettersTree)\<[`StateTree`](../modules/pinia.md#StateTree)\>, [`_ActionsTree`](../modules/pinia.md#_ActionsTree)\>\> & [`_GettersTree`](../modules/pinia.md#_GettersTree)\<`S`\>

Опциональный объект геттеров.

___

### id

• **id**: `Id`

Уникальный строковый ключ для идентификации хранилища в приложении.

___

### state

• `Опционально` **state**: () => `S`

#### Объявление типа

▸ (): `S`

Функция для создания нового состояния. **Должна быть стрелочной функцией** для обеспечения
корректной типизации!

##### Возвращает

`S`

## Методы

### hydrate

▸ **hydrate**(`storeState`, `initialState`): `void`

Позволяет гидратировать хранилище во время SSR, когда в определении хранилища используются сложное состояние (например, только ref-ссылки на стороне клиента) и копирования значения из `pinia.state` будет недостаточно.

#### Параметры

| Название       | Тип               | Описание                    |
| :------------- | :---------------- | :-------------------------- |
| `storeState`   | `UnwrapRef`\<`S`\> | текущее состояние хранилища |
| `initialState` | `UnwrapRef`\<`S`\> | initialState                |

#### Возвращает

`void`

**`Пример`**

Если в вашем `state` вы используете любые `customRef`, `computed` или `ref`, значения которых различаются на сервере и клиенте, вам нужно будет вручную их гидратировать (восстановить). Например, ref-ссылка, которая хранится в локальном хранилище:

```ts
const useStore = defineStore('main', {
  state: () => ({
    n: useLocalStorage('key', 0)
  }),
  hydrate(storeState, initialState) {
    // @ts-expect-error: https://github.com/microsoft/TypeScript/issues/43826
    storeState.n = useLocalStorage('key', 0)
  }
})
```
