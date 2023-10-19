---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / SubscriptionCallbackMutationPatchObject

# Интерфейс: SubscriptionCallbackMutationPatchObject<S\>

[pinia](../modules/pinia.md).SubscriptionCallbackMutationPatchObject

Контекст, передаваемый коллбеку подписки при вызове `store.$patch()` с аргументом в виде объекта.

## Параметры типа

| Название |
| :------- |
| `S`      |

## Иерархия

- [`_SubscriptionCallbackMutationBase`](pinia._SubscriptionCallbackMutationBase.md)

  ↳ **`SubscriptionCallbackMutationPatchObject`**

## Свойства

### events

• **events**: `DebuggerEvent`[]

🔴 ТОЛЬКО ДЛЯ РАЗРАБОТКИ, НЕ использовать в production коде. Различные вызовы изменений. Поступают от https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging и позволяют отслеживать изменения в devtools и плагинах **только во время разработки**.

#### Переопределяет

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[events](pinia._SubscriptionCallbackMutationBase.md#events)

___

### payload

• **payload**: [`_DeepPartial`](../modules/pinia.md#_DeepPartial)<`S`\>

Объект, передаваемый в `store.$patch()`.

___

### storeId

• **storeId**: `string`

`id` хранилища, осуществляющего изменение.

#### Наследуется от

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[storeId](pinia._SubscriptionCallbackMutationBase.md#storeId)

___

### type

• **type**: [`patchObject`](../enums/pinia.MutationType.md#patchObject)

Тип изменения

#### Переопределяет

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[type](pinia._SubscriptionCallbackMutationBase.md#type)
