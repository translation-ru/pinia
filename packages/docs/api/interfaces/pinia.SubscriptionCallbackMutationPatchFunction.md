---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / SubscriptionCallbackMutationPatchFunction

# Интерфейс: SubscriptionCallbackMutationPatchFunction

[pinia](../modules/pinia.md).SubscriptionCallbackMutationPatchFunction

Контекст, передаваемый коллбеку подписки при вызове `store.$patch()` аргументов в виде функции.

## Иерархия

- [`_SubscriptionCallbackMutationBase`](pinia._SubscriptionCallbackMutationBase.md)

  ↳ **`SubscriptionCallbackMutationPatchFunction`**

## Свойства

### events

• **events**: `DebuggerEvent`[]

🔴 ТОЛЬКО ДЛЯ РАЗРАБОТКИ, НЕ использовать в production коде. Различные вызовы изменений. Поступают от https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging и позволяют отслеживать изменения в devtools и плагинах **только во время разработки**.

#### Переопределяет

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[events](pinia._SubscriptionCallbackMutationBase.md#events)

___

### storeId

• **storeId**: `string`

`id` хранилища, осуществляющего изменение.

#### Наследуется от

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[storeId](pinia._SubscriptionCallbackMutationBase.md#storeId)

___

### type

• **type**: [`patchFunction`](../enums/pinia.MutationType.md#patchFunction)

Тип изменения

#### Переопределяет

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[type](pinia._SubscriptionCallbackMutationBase.md#type)
