---
editLink: false
---

[Документация API](../index.md) / pinia

# Модуль: pinia

## Перечисления

- [MutationType](../enums/pinia.MutationType.md)

## Интерфейсы

- [DefineSetupStoreOptions](../interfaces/pinia.DefineSetupStoreOptions.md)
- [DefineStoreOptions](../interfaces/pinia.DefineStoreOptions.md)
- [DefineStoreOptionsBase](../interfaces/pinia.DefineStoreOptionsBase.md)
- [DefineStoreOptionsInPlugin](../interfaces/pinia.DefineStoreOptionsInPlugin.md)
- [MapStoresCustomization](../interfaces/pinia.MapStoresCustomization.md)
- [Pinia](../interfaces/pinia.Pinia.md)
- [PiniaCustomProperties](../interfaces/pinia.PiniaCustomProperties.md)
- [PiniaCustomStateProperties](../interfaces/pinia.PiniaCustomStateProperties.md)
- [PiniaPlugin](../interfaces/pinia.PiniaPlugin.md)
- [PiniaPluginContext](../interfaces/pinia.PiniaPluginContext.md)
- [SetupStoreDefinition](../interfaces/pinia.SetupStoreDefinition.md)
- [StoreDefinition](../interfaces/pinia.StoreDefinition.md)
- [StoreProperties](../interfaces/pinia.StoreProperties.md)
- [SubscriptionCallbackMutationDirect](../interfaces/pinia.SubscriptionCallbackMutationDirect.md)
- [SubscriptionCallbackMutationPatchFunction](../interfaces/pinia.SubscriptionCallbackMutationPatchFunction.md)
- [SubscriptionCallbackMutationPatchObject](../interfaces/pinia.SubscriptionCallbackMutationPatchObject.md)
- [\_StoreOnActionListenerContext](../interfaces/pinia._StoreOnActionListenerContext.md)
- [\_StoreWithState](../interfaces/pinia._StoreWithState.md)
- [\_SubscriptionCallbackMutationBase](../interfaces/pinia._SubscriptionCallbackMutationBase.md)

## Псевдонимы типов

### PiniaStorePlugin

Ƭ **PiniaStorePlugin**: [`PiniaPlugin`](../interfaces/pinia.PiniaPlugin.md)

Плагин для расширения каждого из хранилищ.

**`Устарело`**

заместо этого используйте PiniaPlugin

___

### StateTree

Ƭ **StateTree**: `Record`\<`string` \| `number` \| `symbol`, `any`\>

Основное состояние хранилища

___

### Store

Ƭ **Store**\<`Id`, `S`, `G`, `A`\>: [`_StoreWithState`](../interfaces/pinia._StoreWithState.md)\<`Id`, `S`, `G`, `A`\> & `UnwrapRef`\<`S`\> & [`_StoreWithGetters`](pinia.md#_StoreWithGetters)\<`G`\> & [`_ActionsTree`](pinia.md#_ActionsTree) extends `A` ? {} : `A` & [`PiniaCustomProperties`](../interfaces/pinia.PiniaCustomProperties.md)\<`Id`, `S`, `G`, `A`\> & [`PiniaCustomStateProperties`](../interfaces/pinia.PiniaCustomStateProperties.md)\<`S`\>

Тип хранилища для его создания.

#### Параметры типа

| Название | Тип                                            |
| :------- | :--------------------------------------------- |
| `Id`     | extends `string` = `string`                    |
| `S`      | extends [`StateTree`](pinia.md#StateTree) = {} |
| `G`      | {}                                             |
| `A`      | {}                                             |

___

### StoreActions

Ƭ **StoreActions**\<`SS`\>: `SS` extends [`Store`](pinia.md#Store)\<`string`, [`StateTree`](pinia.md#StateTree), [`_GettersTree`](pinia.md#_GettersTree)\<[`StateTree`](pinia.md#StateTree)\>, infer A\> ? `A` : [`_ExtractActionsFromSetupStore`](pinia.md#_ExtractActionsFromSetupStore)\<`SS`\>

Извлечение действий по типу хранилища. Работает как с setup-хранилищем, так и с
option.

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### StoreGeneric

Ƭ **StoreGeneric**: [`Store`](pinia.md#Store)\<`string`, [`StateTree`](pinia.md#StateTree), [`_GettersTree`](pinia.md#_GettersTree)\<[`StateTree`](pinia.md#StateTree)\>, [`_ActionsTree`](pinia.md#_ActionsTree)\>

Общая и не типо-безопасная версия хранилища. Не вызывает ошибки при доступе через строки, что значительно упрощает написание общих функций, которым не важно, какой тип хранилища передан.

___

### StoreGetters

Ƭ **StoreGetters**\<`SS`\>: `SS` extends [`Store`](pinia.md#Store)\<`string`, [`StateTree`](pinia.md#StateTree), infer G, [`_ActionsTree`](pinia.md#_ActionsTree)\> ? [`_StoreWithGetters`](pinia.md#_StoreWithGetters)\<`G`\> : [`_ExtractGettersFromSetupStore`](pinia.md#_ExtractGettersFromSetupStore)\<`SS`\>

Извлечение геттеров по типу хранилища. Работает как с setup-хранилищем, так и с
option.

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### StoreOnActionListener

Ƭ **StoreOnActionListener**\<`Id`, `S`, `G`, `A`\>: (`context`: [`StoreOnActionListenerContext`](pinia.md#StoreOnActionListenerContext)\<`Id`, `S`, `G`, {} extends `A` ? [`_ActionsTree`](pinia.md#_ActionsTree) : `A`\>) => `void`

Аргумент `store.$onAction()`

#### Параметры типа

| Название | Тип                                       |
| :------- | :---------------------------------------- |
| `Id`     | extends `string`                          |
| `S`      | extends [`StateTree`](pinia.md#StateTree) |
| `G`      | `G`                                       |
| `A`      | `A`                                       |

#### Объявление типа

▸ (`context`): `void`

##### Параметры

| Название  | Тип                                                                                                                                                      |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context` | [`StoreOnActionListenerContext`](pinia.md#StoreOnActionListenerContext)\<`Id`, `S`, `G`, {} extends `A` ? [`_ActionsTree`](pinia.md#_ActionsTree) : `A`\> |

##### Возвращает

`void`

___

### StoreOnActionListenerContext

Ƭ **StoreOnActionListenerContext**\<`Id`, `S`, `G`, `A`\>: [`_ActionsTree`](pinia.md#_ActionsTree) extends `A` ? [`_StoreOnActionListenerContext`](../interfaces/pinia._StoreOnActionListenerContext.md)\<[`StoreGeneric`](pinia.md#StoreGeneric), `string`, [`_ActionsTree`](pinia.md#_ActionsTree)\> : \{ [Name in keyof A]: Name extends string ? \_StoreOnActionListenerContext\<Store\<Id, S, G, A\>, Name, A\> : never }[keyof `A`]

Объект контекста, передаваемый в коллбеки `store.$onAction(context => {})`.
TODO: должен иметь только Id, хранилище и действия для генерации соответствующего объекта

#### Параметры типа

| Название | Тип                                       |
| :------- | :---------------------------------------- |
| `Id`     | extends `string`                          |
| `S`      | extends [`StateTree`](pinia.md#StateTree) |
| `G`      | `G`                                       |
| `A`      | `A`                                       |

___

### StoreState

Ƭ **StoreState**\<`SS`\>: `SS` extends [`Store`](pinia.md#Store)\<`string`, infer S, [`_GettersTree`](pinia.md#_GettersTree)\<[`StateTree`](pinia.md#StateTree)\>, [`_ActionsTree`](pinia.md#_ActionsTree)\> ? `UnwrapRef`\<`S`\> : [`_ExtractStateFromSetupStore`](pinia.md#_ExtractStateFromSetupStore)\<`SS`\>

Извлечение состояния по типу хранилища. Работает как с setup-хранилищем, так и с
option.

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### SubscriptionCallback

Ƭ **SubscriptionCallback**\<`S`\>: (`mutation`: [`SubscriptionCallbackMutation`](pinia.md#SubscriptionCallbackMutation)\<`S`\>, `state`: `UnwrapRef`\<`S`\>) => `void`

Коллбек подписки

#### Параметры типа

| Название |
| :------- |
| `S`      |

#### Объявление типа

▸ (`mutation`, `state`): `void`

##### Параметры

| Название   | Тип                                                                           |
| :--------- | :---------------------------------------------------------------------------- |
| `mutation` | [`SubscriptionCallbackMutation`](pinia.md#SubscriptionCallbackMutation)\<`S`\>|
| `state`    | `UnwrapRef`\<`S`\>                                                            |

##### Возвращает

`void`

___

### SubscriptionCallbackMutation

Ƭ **SubscriptionCallbackMutation**\<`S`\>: [`SubscriptionCallbackMutationDirect`](../interfaces/pinia.SubscriptionCallbackMutationDirect.md) \| [`SubscriptionCallbackMutationPatchObject`](../interfaces/pinia.SubscriptionCallbackMutationPatchObject.md)\<`S`\> \| [`SubscriptionCallbackMutationPatchFunction`](../interfaces/pinia.SubscriptionCallbackMutationPatchFunction.md)

Объект контекста, который был передан коллбеку подписки.

#### Параметры типа

| Название |
| :------- |
| `S`      |

___

### \_ActionsTree

Ƭ **\_ActionsTree**: `Record`\<`string`, [`_Method`](pinia.md#_Method)\>

Тип объекта действий. **Только** для внутреннего использования

___

### \_Awaited

Ƭ **\_Awaited**\<`T`\>: `T` extends ``null`` \| `undefined` ? `T` : `T` extends `object` & \{ `then`: (`onfulfilled`: `F`) => `any`  } ? `F` extends (`value`: infer V, ...`args`: `any`) => `any` ? [`_Awaited`](pinia.md#_Awaited)\<`V`\> : `never` : `T`

#### Параметры типа

| Название |
| :------- |
| `T`      |

___

### \_DeepPartial

Ƭ **\_DeepPartial**\<`T`\>: \{ [K in keyof T]?: \_DeepPartial\<T[K]\> }

Рекурсивный `Partial<T>`. Используется в методе [['$patch']](pinia.md#Store).

**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `T`      |

___

### \_ExtractActionsFromSetupStore

Ƭ **\_ExtractActionsFromSetupStore**\<`SS`\>: `SS` extends `undefined` \| `void` ? {} : [`_ExtractActionsFromSetupStore_Keys`](pinia.md#_ExtractActionsFromSetupStore_Keys)\<`SS`\> extends keyof `SS` ? `Pick`\<`SS`, [`_ExtractActionsFromSetupStore_Keys`](pinia.md#_ExtractActionsFromSetupStore_Keys)\<`SS`\>\> : `never`

**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### \_ExtractActionsFromSetupStore\_Keys

Ƭ **\_ExtractActionsFromSetupStore\_Keys**\<`SS`\>: keyof \{ [K in keyof SS as SS[K] extends \_Method ? K : never]: any }

Тип, позволяющий осуществлять рефакторинг через IDE.
**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### \_ExtractGettersFromSetupStore

Ƭ **\_ExtractGettersFromSetupStore**\<`SS`\>: `SS` extends `undefined` \| `void` ? {} : [`_ExtractGettersFromSetupStore_Keys`](pinia.md#_ExtractGettersFromSetupStore_Keys)\<`SS`\> extends keyof `SS` ? `Pick`\<`SS`, [`_ExtractGettersFromSetupStore_Keys`](pinia.md#_ExtractGettersFromSetupStore_Keys)\<`SS`\>\> : `never`

**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### \_ExtractGettersFromSetupStore\_Keys

Ƭ **\_ExtractGettersFromSetupStore\_Keys**\<`SS`\>: keyof \{ [K in keyof SS as SS[K] extends ComputedRef ? K : never]: any }

Тип, позволяющий осуществлять рефакторинг через IDE.
**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### \_ExtractStateFromSetupStore

Ƭ **\_ExtractStateFromSetupStore**\<`SS`\>: `SS` extends `undefined` \| `void` ? {} : [`_ExtractStateFromSetupStore_Keys`](pinia.md#_ExtractStateFromSetupStore_Keys)\<`SS`\> extends keyof `SS` ? [`_UnwrapAll`](pinia.md#_UnwrapAll)\<`Pick`\<`SS`, [`_ExtractStateFromSetupStore_Keys`](pinia.md#_ExtractStateFromSetupStore_Keys)\<`SS`\>\>\> : `never`

**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### \_ExtractStateFromSetupStore\_Keys

Ƭ **\_ExtractStateFromSetupStore\_Keys**\<`SS`\>: keyof \{ [K in keyof SS as SS[K] extends \_Method \| ComputedRef ? never : K]: any }

Тип, позволяющий осуществлять рефакторинг через IDE.
**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `SS`     |

___

### \_GettersTree

Ƭ **\_GettersTree**\<`S`\>: `Record`\<`string`, (`state`: `UnwrapRef`\<`S`\> & `UnwrapRef`\<[`PiniaCustomStateProperties`](../interfaces/pinia.PiniaCustomStateProperties.md)\<`S`\>\>) => `any` \| () => `any`\>

Тип объекта геттеров, которые получают аргумент.
**Только** для внутреннего использования

#### Параметры типа

| Название | Тип                                       |
| :------- | :---------------------------------------- |
| `S`      | extends [`StateTree`](pinia.md#StateTree) |

___

### \_MapActionsObjectReturn

Ƭ **\_MapActionsObjectReturn**\<`A`, `T`\>: \{ [key in keyof T]: A[T[key]] }

**Только** для внутреннего использования

#### Параметры типа

| Название | Тип                                    |
| :------- | :------------------------------------- |
| `A`      | `A`                                    |
| `T`      | extends `Record`\<`string`, keyof `A`\> |

___

### \_MapActionsReturn

Ƭ **\_MapActionsReturn**\<`A`\>: \{ [key in keyof A]: A[key] }

**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `A`      |

___

### \_MapStateObjectReturn

Ƭ **\_MapStateObjectReturn**\<`Id`, `S`, `G`, `A`, `T`\>: \{ [key in keyof T]: Function }

**Только** для внутреннего использования

#### Параметры типа

| Название | Тип                                                                                                                             |
| :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `Id`     | extends `string`                                                                                                                |
| `S`      | extends [`StateTree`](pinia.md#StateTree)                                                                                       |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\>                                                                           |
| `A`      | `A`                                                                                                                             |
| `T`      | extends `Record`\<`string`, keyof `S` \| keyof `G` \| (`store`: [`Store`](pinia.md#Store)\<`Id`, `S`, `G`, `A`\>) => `any`\> = {} |

___

### \_MapStateReturn

Ƭ **\_MapStateReturn**\<`S`, `G`, `Keys`\>: \{ [key in Keys]: Function }

**Только** для внутреннего использования

#### Параметры типа

| Название | Тип                                                     |
| :------- | :------------------------------------------------------ |
| `S`      | extends [`StateTree`](pinia.md#StateTree)               |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\>   |
| `Keys`   | extends keyof `S` \| keyof `G` = keyof `S` \| keyof `G` |

___

### \_MapWritableStateObjectReturn

Ƭ **\_MapWritableStateObjectReturn**\<`S`, `T`\>: \{ [key in keyof T]: Object }

**Только** для внутреннего использования

#### Параметры типа

| Название | Тип                                       |
| :------- | :---------------------------------------- |
| `S`      | extends [`StateTree`](pinia.md#StateTree) |
| `T`      | extends `Record`\<`string`, keyof `S`\>    |

___

### \_MapWritableStateReturn

Ƭ **\_MapWritableStateReturn**\<`S`\>: \{ [key in keyof S]: Object }

**Только** для внутреннего использования

#### Параметры типа

| Название | Тип                                       |
| :------- | :---------------------------------------- |
| `S`      | extends [`StateTree`](pinia.md#StateTree) |

___

### \_Method

Ƭ **\_Method**: (...`args`: `any`[]) => `any`

Общий тип для функции, которая может получать аргументы и возвращать тип
**Только** для внутреннего использования

##### Параметры

#### Описание типа

▸ (`...args`): `any`

| Название  | Тип     |
| :-------- | :------ |
| `...args` | `any`[] |

##### Возвращает

`any`

___

### \_Spread

Ƭ **\_Spread**\<`A`\>: `A` extends [infer L, ...(infer R)] ? [`_StoreObject`](pinia.md#_StoreObject)\<`L`\> & [`_Spread`](pinia.md#_Spread)\<`R`\> : `unknown`

**Только** для внутреннего использования.

#### Параметры типа

| Название | Тип                      |
| :------- | :----------------------- |
| `A`      | extends readonly `any`[] |

___

### \_StoreObject

Ƭ **\_StoreObject**\<`S`\>: `S` extends [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<infer Ids, infer State, infer Getters, infer Actions\> ? \{ [Id in \`$\{Ids}$\{MapStoresCustomization extends Record\<"suffix", infer Suffix\> ? Suffix : "Store"}\`]: Function } : {}

**Только** для внутреннего использования.

#### Параметры типа

| Название |
| :------- |
| `S`      |

___

### \_StoreWithActions

Ƭ **\_StoreWithActions**\<`A`\>: \{ [k in keyof A]: A[k] extends Function ? Function : never }

Хранилище, дополненное действиями.
**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `A`      |

___

### \_StoreWithGetters

Ƭ **\_StoreWithGetters**\<`G`\>: \{ readonly [k in keyof G]: G[k] extends Function ? R : UnwrapRef\<G[k]\> }

Хранилище, дополненное геттерами.
**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `G`      |

___

### \_UnwrapAll

Ƭ **\_UnwrapAll**\<`SS`\>: \{ [K in keyof SS]: UnwrapRef\<SS[K]\> }

Тип, позволяющий осуществлять рефакторинг через IDE.
**Только** для внутреннего использования

#### Параметры типа

| Название |
| :------- |
| `SS`     |

## Переменные

### PiniaVuePlugin

• `Const` **PiniaVuePlugin**: `Plugin`

Vue 2 Plugin, который должен быть установлен для работы pinia. Примечание: **вам не нужен этот плагин, если вы используете Nuxt.js**. Вместо него используйте `buildModule`: https://pinia.vuejs.org/ssr/nuxt.html.

**`Пример`**

```js
import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // ...
  pinia,
})
```

**`Параметры`**

`Vue`, импортированный из 'vue'.

## Функции

### acceptHMRUpdate

▸ **acceptHMRUpdate**\<`Id`, `S`, `G`, `A`\>(`initialUseStore`, `hot`): (`newModule`: `any`) => `any`

Создает функцию _accept_ для передачи в `import.meta.hot` в приложениях Vite.

#### Параметры типа

| Название | Тип                                                                                                    |
| :------- | :----------------------------------------------------------------------------------------------------  |
| `Id`     | extends `string` = `string`                                                                            |
| `S`      | extends [`StateTree`](pinia.md#StateTree) = [`StateTree`](pinia.md#StateTree)                          |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> = [`_GettersTree`](pinia.md#_GettersTree)\<`S`\>|
| `A`      | [`_ActionsTree`](pinia.md#_ActionsTree)                                                                |

#### Параметры

| Название          | Тип                                                                               | Описание                                |
| :---------------- | :-------------------------------------------------------------------------------- | :-------------------------------------- |
| `initialUseStore` | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> | return of the defineStore to hot update |
| `hot`             | `any`                                                                             | `import.meta.hot`                       |

#### Возвращает

`fn`

▸ (`newModule`): `any`

##### Параметры

| Название    | Тип   |
| :---------- | :---- |
| `newModule` | `any` |

##### Возвращает

`any`

**`Пример`**

```js
const useUser = defineStore(...)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
```

___

### createPinia

▸ **createPinia**(): [`Pinia`](../interfaces/pinia.Pinia.md)

Создает экземпляр Pinia, который будет использоваться приложением

#### Возвращает

[`Pinia`](../interfaces/pinia.Pinia.md)

___

### defineStore

▸ **defineStore**\<`Id`, `S`, `G`, `A`\>(`id`, `options`): [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\>

Создает функцию `useStore`, которая извлекает экземпляр хранилища

#### Параметры типа

| Название | Тип                                                        |
| :------- | :--------------------------------------------------------- |
| `Id`     | extends `string`                                           |
| `S`      | extends [`StateTree`](pinia.md#StateTree) = {}             |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> = {} |
| `A`      | {}                                                         |

#### Параметры

| Название  | Тип                                                                                                      | Описание                      |
| :-------- | :------------------------------------------------------------------------------------------------------- | :------------------------------- |
| `id`      | `Id`                                                                                                     | id of the store (must be unique) |
| `options` | `Omit`\<[`DefineStoreOptions`](../interfaces/pinia.DefineStoreOptions.md)\<`Id`, `S`, `G`, `A`\>, `"id"`\> | options to define the store      |

#### Возвращает

[`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\>

▸ **defineStore**\<`Id`, `S`, `G`, `A`\>(`options`): [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\>

Создает функцию `useStore`, которая извлекает экземпляр хранилища

#### Параметры типа

| Название | Тип                                                        |
| :------- | :--------------------------------------------------------- |
| `Id`     | extends `string`                                           |
| `S`      | extends [`StateTree`](pinia.md#StateTree) = {}             |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> = {} |
| `A`      | {}                                                         |

#### Параметры

| Название  | Тип                                                                                     | Описание                 |
| :-------- | :-------------------------------------------------------------------------------------- | :-------------------------- |
| `options` | [`DefineStoreOptions`](../interfaces/pinia.DefineStoreOptions.md)ё<`Id`, `S`, `G`, `A`\> | options to define the store |

#### Возвращает

[`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\>

▸ **defineStore**\<`Id`, `SS`\>(`id`, `storeSetup`, `options?`): [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, [`_ExtractStateFromSetupStore`](pinia.md#_ExtractStateFromSetupStore)\<`SS`\>, [`_ExtractGettersFromSetupStore`](pinia.md#_ExtractGettersFromSetupStore)\<`SS`\>, [`_ExtractActionsFromSetupStore`](pinia.md#_ExtractActionsFromSetupStore)\<`SS`\>\>

Создает функцию `useStore`, которая извлекает экземпляр хранилища

#### Параметры типа

| Название | Тип              |
| :------- | :--------------- |
| `Id`     | extends `string` |
| `SS`     | `SS`             |

#### Параметры

| Название     | Тип                                                                                                                                                                                                                                                                                                                                  | Описание                              |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `id`         | `Id`                                                                                                                                                                                                                                                                                                                                 | id хранилища (должно быть уникальным) |
| `storeSetup` | () => `SS`                                                                                                                                                                                                                                                                                                                           | функция, определяющая хранилище       |
| `options?`   | [`DefineSetupStoreOptions`](../interfaces/pinia.DefineSetupStoreOptions.md)\<`Id`, [`_ExtractStateFromSetupStore`](pinia.md#_ExtractStateFromSetupStore)\<`SS`\>, [`_ExtractGettersFromSetupStore`](pinia.md#_ExtractGettersFromSetupStore)\<`SS`\>, [`_ExtractActionsFromSetupStore`](pinia.md#_ExtractActionsFromSetupStore)\<`SS`\>\> | дополнительные опции                  |

#### Возвращает

[`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, [`_ExtractStateFromSetupStore`](pinia.md#_ExtractStateFromSetupStore)\<`SS`\>, [`_ExtractGettersFromSetupStore`](pinia.md#_ExtractGettersFromSetupStore)\<`SS`\>, [`_ExtractActionsFromSetupStore`](pinia.md#_ExtractActionsFromSetupStore)\<`SS`\>\>

___

### disposePinia

▸ **disposePinia**(`pinia`): `void`

Завершает работу экземпляра Pinia, останавливая его effectScope, удаляя состояние, плагины и хранилища. Это полезно в основном для тестов, как с тестовым экземпляром Pinia, так и с обычным, а также в приложениях, использующих несколько экземпляров Pinia.

#### Параметры

| Название | Тип                                     | Описание        |
| :------- | :-------------------------------------- | :-------------- |
| `pinia`  | [`Pinia`](../interfaces/pinia.Pinia.md) | экземпляр pinia |

#### Возвращает

`void`

___

### getActivePinia

▸ **getActivePinia**(): `undefined` \| [`Pinia`](../interfaces/pinia.Pinia.md)

Получить текущий активный экземпляр pinia, если таковой имеется.

#### Возвращает

`undefined` \| [`Pinia`](../interfaces/pinia.Pinia.md)

___

### mapActions

▸ **mapActions**\<`Id`, `S`, `G`, `A`, `KeyMapper`\>(`useStore`, `keyMapper`): [`_MapActionsObjectReturn`](pinia.md#_MapActionsObjectReturn)\<`A`, `KeyMapper`\>

Позволяет напрямую использовать действия из вашего хранилища без использования composition API (`setup()`) путем создания объекта, который можно добавить в поле `methods` компонента. Значения объекта представляют собой сами действия, а ключи - имена методов в компоненте.

#### Параметры типа

| Название    | Тип                                                   |
| :---------- | :---------------------------------------------------- |
| `Id`        | extends `string`                                      |
| `S`         | extends [`StateTree`](pinia.md#StateTree)             |
| `G`         | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> |
| `A`         | `A`                                                   |
| `KeyMapper` | extends `Record`\<`string`, keyof `A`\>                |

#### Параметры

| Название    | Тип                                                                               | Описание                                                    |
| :---------- | :-------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| `useStore`  | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> | хранилище, из которого нужно добавить действия              |
| `keyMapper` | `KeyMapper`                                                                       | объект для определения новых названий действий в компоненте |

#### Возвращает

[`_MapActionsObjectReturn`](pinia.md#_MapActionsObjectReturn)\<`A`, `KeyMapper`\>

**`Пример`**

```js
export default {
  methods: {
    ...mapActions(useCounterStore, { moar: 'increment', setIt: 'setCount' })
    // другие методы компонента
    // useCounterStore имеет два действия с именами `increment` и `setCount`
  },

  created() {
    this.moar()
    this.setIt(2)
  }
}
```

▸ **mapActions**\<`Id`, `S`, `G`, `A`\>(`useStore`, `keys`): [`_MapActionsReturn`](pinia.md#_MapActionsReturn)\<`A`\>

Позволяет напрямую использовать действия из вашего хранилища без использования composition API (`setup()`) путем создания объекта, который можно добавить в поле `methods` компонента.

#### Параметры типа

| Название | Тип                                                   |
| :------- | :---------------------------------------------------- |
| `Id`     | extends `string`                                      |
| `S`      | extends [`StateTree`](pinia.md#StateTree)             |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> |
| `A`      | `A`                                                   |

#### Параметры

| Название   | Тип                                                                               | Description                                    |
| :--------- | :-------------------------------------------------------------------------------- | :--------------------------------------------- |
| `useStore` | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> | хранилище, из которого нужно добавить действия |
| `keys`     | keyof `A`[]                                                                       | массив названий действия для добавления        |

#### Возвращает

[`_MapActionsReturn`](pinia.md#_MapActionsReturn)\<`A`\>

**`Пример`**

```js
export default {
  methods: {
    // другие методы компонента
    ...mapActions(useCounterStore, ['increment', 'setCount']),
  },

  created() {
    this.increment()
    this.setCount(2) // передача аргументов производится как обычно
  }
}
```

___

### mapGetters

▸ **mapGetters**\<`Id`, `S`, `G`, `A`, `KeyMapper`\>(`useStore`, `keyMapper`): [`_MapStateObjectReturn`](pinia.md#_MapStateObjectReturn)\<`Id`, `S`, `G`, `A`, `KeyMapper`\>

Псевдоним для `mapState()`. Заместо этого вы должны использовать `mapState()`.

#### Параметры типа

| Название    | Тип                                                                                                                        |
| :---------- | :------------------------------------------------------------------------------------------------------------------------- |
| `Id`        | extends `string`                                                                                                           |
| `S`         | extends [`StateTree`](pinia.md#StateTree)                                                                                  |
| `G`         | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\>                                                                      |
| `A`         | `A`                                                                                                                        |
| `KeyMapper` | extends `Record`\<`string`, keyof `S` \| keyof `G` \| (`store`: [`Store`](pinia.md#Store)\<`Id`, `S`, `G`, `A`\>) => `any`\> |

#### Параметры

| Название    | Тип                                                                               |
| :---------- | :-------------------------------------------------------------------------------- |
| `useStore`  | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> |
| `keyMapper` | `KeyMapper`                                                                       |

#### Возвращает

[`_MapStateObjectReturn`](pinia.md#_MapStateObjectReturn)\<`Id`, `S`, `G`, `A`, `KeyMapper`\>

**`Устарело`**

заместо этого используйте `mapState()`.

▸ **mapGetters**\<`Id`, `S`, `G`, `A`, `Keys`\>(`useStore`, `keys`): [`_MapStateReturn`](pinia.md#_MapStateReturn)\<`S`, `G`, `Keys`\>

Псевдоним для `mapState()`. Заместо этого вы должны использовать `mapState()`.

#### Параметры типа

| Название | Тип                                                   |
| :------- | :---------------------------------------------------- |
| `Id`     | extends `string`                                      |
| `S`      | extends [`StateTree`](pinia.md#StateTree)             |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> |
| `A`      | `A`                                                   |
| `Keys`   | extends `string` \| `number` \| `symbol`              |

#### Параметры

| Название   | Тип                                                                               |
| :--------- | :-------------------------------------------------------------------------------- |
| `useStore` | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> |
| `keys`     | readonly `Keys`[]                                                                 |

#### Возвращает

[`_MapStateReturn`](pinia.md#_MapStateReturn)\<`S`, `G`, `Keys`\>

**`Устарело`**

заместо этого используйте `mapState()`.

___

### mapState

▸ **mapState**\<`Id`, `S`, `G`, `A`, `KeyMapper`\>(`useStore`, `keyMapper`): [`_MapStateObjectReturn`](pinia.md#_MapStateObjectReturn)\<`Id`, `S`, `G`, `A`, `KeyMapper`\>

Позволяет использовать состояние и геттеры из одного хранилища без использования composition API (`setup()`) путем создания объекта, который можно добавить в поле `computed` компонента. Значения объекта представляют собой свойства состояния или геттеры, а ключи - имена вычисляемых свойств в компоненте. По желанию, вы также можете передать собственную функцию, которая будет принимать хранилище в качестве первого аргумента. Обратите внимание, что хотя у нее есть доступ к экземпляру компонента через `this`, она не будет типизирована.

#### Параметры типа

| Название    | Тип                                                                                                                        |
| :---------- | :------------------------------------------------------------------------------------------------------------------------- |
| `Id`        | extends `string`                                                                                                           |
| `S`         | extends [`StateTree`](pinia.md#StateTree)                                                                                  |
| `G`         | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\>                                                                      |
| `A`         | `A`                                                                                                                        |
| `KeyMapper` | extends `Record`<`string`, keyof `S` \| keyof `G` \| (`store`: [`Store`](pinia.md#Store)\<`Id`, `S`, `G`, `A`\>) => `any`\> |

#### Параметры

| Название    | Тип                                                                               | Описание                                                             |
| :---------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| `useStore`  | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> | хранилище, из которого нужно добавить свойства состояния или геттеры |
| `keyMapper` | `KeyMapper`                                                                       | объект со свойствами состояния или геттерами                         |

#### Возвращает

[`_MapStateObjectReturn`](pinia.md#_MapStateObjectReturn)\<`Id`, `S`, `G`, `A`, `KeyMapper`\>

**`Пример`**

```js
export default {
  computed: {
    // другие вычисляемые свойства
    // useCounterStore имеет свойство состояния `count` и геттер `double`
    ...mapState(useCounterStore, {
      n: 'count',
      triple: store => store.n * 3,
      // обратите внимание, что мы не можем использовать стрелочную функцию, если хотим использовать `this`
      custom(store) {
        return this.someComponentValue + store.n
      },
      doubleN: 'double'
    })
  },

  created() {
    this.n // 2
    this.doubleN // 4
  }
}
```

▸ **mapState**\<`Id`, `S`, `G`, `A`, `Keys`\>(`useStore`, `keys`): [`_MapStateReturn`](pinia.md#_MapStateReturn)\<`S`, `G`, `Keys`\>

Позволяет использовать состояние и геттеры из одного хранилища без использования composition API (`setup()`) путем создания объекта, который можно добавить в поле `computed` компонента.

#### Параметры типа

| Название | Тип                                                    |
| :------- | :----------------------------------------------------- |
| `Id`     | extends `string`                                       |
| `S`      | extends [`StateTree`](pinia.md#StateTree)              |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> |
| `A`      | `A`                                                    |
| `Keys`   | extends `string` \| `number` \| `symbol`               |

#### Параметры

| Название   | Тип                                                                               | Описание                                                             |
| :--------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| `useStore` | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> | хранилище, из которого нужно добавить свойства состояния или геттеры |
| `keys`     | readonly `Keys`[]                                                                 | массив с названиями свойств состояния или геттеров                   |

#### Возвращает

[`_MapStateReturn`](pinia.md#_MapStateReturn)\<`S`, `G`, `Keys`\>

**`Пример`**

```js
export default {
  computed: {
    // другие вычисляемые свойства
    ...mapState(useCounterStore, ['count', 'double'])
  },

  created() {
    this.count // 2
    this.double // 4
  }
}
```

___

### mapStores

▸ **mapStores**\<`Stores`\>(`...stores`): [`_Spread`](pinia.md#_Spread)\<`Stores`\>

Позволяет использовать хранилища без использования composition API (`setup()`) путем создания объекта, который можно добавить в поле `computed` компонента. Он принимает список определений хранилищ.

#### Параметры типа

| Название | Тип             |
| :------- | :-------------- |
| `Stores` | extends `any`[] |

#### Параметры

| Название    | Тип           | Описание                       |
| :---------- | :------------ | :----------------------------- |
| `...stores` | [...Stores[]] | список хранилищ для добавления |

#### Возвращает

[`_Spread`](pinia.md#_Spread)\<`Stores`\>

**`Пример`**

```js
export default {
  computed: {
    // другие вычисляемые свойства
    ...mapStores(useUserStore, useCartStore)
  },

  created() {
    this.userStore // хранилище с id "user"
    this.cartStore // хранилище с id "cart"
  }
}
```

___

### mapWritableState

▸ **mapWritableState**\<`Id`, `S`, `G`, `A`, `KeyMapper`\>(`useStore`, `keyMapper`): [`_MapWritableStateObjectReturn`](pinia.md#_MapWritableStateObjectReturn)\<`S`, `KeyMapper`\>

Аналогичен `mapState()`, но создает вычисляемые свойства с возможностью записи для того, чтобы можно было изменять состояние. В отличие от `mapState()`, можно добавлять только свойства из `state`.

#### Параметры типа

| Название    | Тип                                                   |
| :---------- | :---------------------------------------------------- |
| `Id`        | extends `string`                                      |
| `S`         | extends [`StateTree`](pinia.md#StateTree)             |
| `G`         | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> |
| `A`         | `A`                                                   |
| `KeyMapper` | extends `Record`\<`string`, keyof `S`\>                |

#### Параметры

| Название    | Тип                                                                               | Описание                                                 |
| :---------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------- |
| `useStore`  | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> | хранилище, из которого нужно добавить свойства состояния |
| `keyMapper` | `KeyMapper`                                                                       | объект со свойствами состояния                           |

#### Возвращает

[`_MapWritableStateObjectReturn`](pinia.md#_MapWritableStateObjectReturn)\<`S`, `KeyMapper`\>

▸ **mapWritableState**\<`Id`, `S`, `G`, `A`, `Keys`\>(`useStore`, `keys`): \{ [K in Keys]: Object }

Аналогичен `mapState()`, но создает вычисляемые свойства с возможностью записи для того, чтобы можно было изменять состояние. В отличие от `mapState()`, можно добавлять только свойства из `state`.

#### Параметры типа

| Название | Тип                                                   |
| :------- | :---------------------------------------------------- |
| `Id`     | extends `string`                                      |
| `S`      | extends [`StateTree`](pinia.md#StateTree)             |
| `G`      | extends [`_GettersTree`](pinia.md#_GettersTree)\<`S`\> |
| `A`      | `A`                                                   |
| `Keys`   | extends `string` \| `number` \| `symbol`              |

#### Параметры

| Название   | Тип                                                                               | Описание                                                 |
| :--------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------- |
| `useStore` | [`StoreDefinition`](../interfaces/pinia.StoreDefinition.md)\<`Id`, `S`, `G`, `A`\> | хранилище, из которого нужно добавить свойства состояния |
| `keys`     | readonly `Keys`[]                                                                 | массив свойств состояния                                 |

#### Возвращает

\{ [K in Keys]: Object }

___

### setActivePinia

▸ **setActivePinia**(`pinia`): [`Pinia`](../interfaces/pinia.Pinia.md)

Устанавливает или отменяет установку активной pinia. Используется при SSR и внутри самой библиотеки при вызове действий и геттеров

#### Параметры

| Название | Тип                                     | Описание        |
| :------- | :-------------------------------------- | :-------------- |
| `pinia`  | [`Pinia`](../interfaces/pinia.Pinia.md) | Экземпляр Pinia |

#### Возвращает

[`Pinia`](../interfaces/pinia.Pinia.md)

▸ **setActivePinia**(`pinia`): `undefined`

Устанавливает или отменяет установку активной pinia. Используется при SSR и внутри самой библиотеки при вызове действий и геттеров

#### Параметры

| Название | Тип         | Описание        |
| :------- | :---------- | :-------------- |
| `pinia`  | `undefined` | Экземпляр Pinia |

#### Возвращает

`undefined`

▸ **setActivePinia**(`pinia`): `undefined` \| [`Pinia`](../interfaces/pinia.Pinia.md)

Устанавливает или отменяет установку активной pinia. Используется при SSR и внутри самой библиотеки при вызове действий и геттеров

#### Параметры

| Название | Тип                                                    | Описание        |
| :------- | :----------------------------------------------------- | :-------------- |
| `pinia`  | `undefined` \| [`Pinia`](../interfaces/pinia.Pinia.md) | Экземпляр Pinia |

#### Возвращает

`undefined` \| [`Pinia`](../interfaces/pinia.Pinia.md)

___

### setMapStoreSuffix

▸ **setMapStoreSuffix**(`suffix`): `void`

Этот параметр изменяет суффикс, добавляемый с помощью `mapStores()`. Может быть пустой строкой. По умолчанию устанавливается значение `"Store"`. Убедитесь, что вы расширяете интерфейс MapStoresCustomization, если используете TypeScript.

#### Параметры

| Название | Тип      | Описание      |
| :------- | :------- | :------------ |
| `suffix` | `string` | новый суффикс |

#### Возвращает

`void`

___

### skipHydrate

▸ **skipHydrate**\<`T`\>(`obj`): `T`

Этот параметр указывает Pinia пропустить процесс гидратации заданного объекта. Это полезно только в setup-хранилищах при возврате объекта состояния, но которое на самом деле не является состоянием. Например, оно возвращаеит экземпляр маршрутизатора в setup-хранилище.

#### Параметры типа

| Название | Тип   |
| :------- | :---- |
| `T`      | `any` |

#### Параметры

| Название | Тип | Описание       |
| :------- | :-- | :------------- |
| `obj`    | `T` | целевой объект |

#### Возвращает

`T`

obj

___

### storeToRefs

▸ **storeToRefs**\<`SS`\>(`store`): `StoreToRefs`\<`SS`\>

Создает объект ref-ссылок со всем состоянием, геттерами и добавляемыми плагином свойствами состояния хранилища. Аналогично `toRefs()`, но специально разработанный специально для хранилищ Pinia, поэтому методы и нереактивные свойства полностью игнорируются.

#### Параметры типа

| Название | Тип                                             |
| :------- | :---------------------------------------------- |
| `SS`     | extends [`StoreGeneric`](pinia.md#StoreGeneric) |

#### Параметры

| Название | Тип  | Описание                            |
| :------- | :--- | :---------------------------------- |
| `store`  | `SS` | хранилище для извлечения ref-ссылок |

#### Возвращает

`StoreToRefs`\<`SS`\>
