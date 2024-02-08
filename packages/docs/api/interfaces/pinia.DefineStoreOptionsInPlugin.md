---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / DefineStoreOptionsInPlugin

# Интерфейс: DefineStoreOptionsInPlugin\<Id, S, G, A\>

[pinia](../modules/pinia.md).DefineStoreOptionsInPlugin

Доступные `options` при создании плагина pinia.

## Параметры типа

| Название | Тип                                                  |
| :------- | :--------------------------------------------------- |
| `Id`     | extends `string`                                     |
| `S`      | extends [`StateTree`](../modules/pinia.md#StateTree) |
| `G`      | `G`                                                  |
| `A`      | `A`                                                  |

## Иерархия

- `Omit`\<[`DefineStoreOptions`](pinia.DefineStoreOptions.md)\<`Id`, `S`, `G`, `A`\>, ``"id"`` \| ``"actions"``\>

  ↳ **`DefineStoreOptionsInPlugin`**

## Свойства

### actions

• **actions**: `A`

Извлеченный объект действий. Добавляется с помощью `useStore()` при создании хранилища с setup API, в противном случае используется тот, который передается в `defineStore()`. По умолчанию является пустым объектом, если действия не определены.

___

### getters

• `Опционально` **getters**: `G` & `ThisType`\<`UnwrapRef`<`S`\> & [`_StoreWithGetters`](../modules/pinia.md#_StoreWithGetters)\<`G`\> & [`PiniaCustomProperties`](pinia.PiniaCustomProperties.md)\<`string`, [`StateTree`](../modules/pinia.md#StateTree), [`_GettersTree`](../modules/pinia.md#_GettersTree)\<[`StateTree`](../modules/pinia.md#StateTree)\>, [`_ActionsTree`](../modules/pinia.md#_ActionsTree)\>\> & [`_GettersTree`](../modules/pinia.md#_GettersTree)\<`S`\>

Опциональный объект геттеров.

#### Наследуется от

Omit.getters

___

### state

• `Опционально` **state**: () => `S`

Функция для создания нового состояния. **Должна быть стрелочной функцией** для обеспечения правильной типизации!

#### Объявление типа

▸ (): `S`

Функция для создания нового состояния. **Должна быть стрелочной функцией** для обеспечения правильной типизации!

##### Возвращает

`S`

#### Наследуется от

Omit.state

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

#### Наследуется от

Omit.hydrate
