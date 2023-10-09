---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / SubscriptionCallbackMutationPatchFunction

# Interface: SubscriptionCallbackMutationPatchFunction

[pinia](../modules/pinia.md).SubscriptionCallbackMutationPatchFunction

Context passed to a subscription callback when `store.$patch()` is called
with a function.

## Hierarchy

- [`_SubscriptionCallbackMutationBase`](pinia._SubscriptionCallbackMutationBase.md)

  ↳ **`SubscriptionCallbackMutationPatchFunction`**

## Properties

### events

• **events**: `DebuggerEvent`[]

🔴 DEV ONLY, DO NOT use for production code. Different mutation calls. Comes from
https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging and allows to track mutations in
devtools and plugins **during development only**.

#### Overrides

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[events](pinia._SubscriptionCallbackMutationBase.md#events)

___

### storeId

• **storeId**: `string`

`id` of the store doing the mutation.

#### Inherited from

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[storeId](pinia._SubscriptionCallbackMutationBase.md#storeid)

___

### type

• **type**: [`patchFunction`](../enums/pinia.MutationType.md#patchfunction)

Type of the mutation.

#### Overrides

[_SubscriptionCallbackMutationBase](pinia._SubscriptionCallbackMutationBase.md).[type](pinia._SubscriptionCallbackMutationBase.md#type)
