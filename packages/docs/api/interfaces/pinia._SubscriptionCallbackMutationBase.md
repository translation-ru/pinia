---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / \_SubscriptionCallbackMutationBase

# Интерфейс: \_SubscriptionCallbackMutationBase

[pinia](../modules/pinia.md)._SubscriptionCallbackMutationBase

Базовый тип для контекста, передаваемого в коллбек подписки. Внутренний тип.

## Иерархия

- **`_SubscriptionCallbackMutationBase`**

  ↳ [`SubscriptionCallbackMutationDirect`](pinia.SubscriptionCallbackMutationDirect.md)

  ↳ [`SubscriptionCallbackMutationPatchFunction`](pinia.SubscriptionCallbackMutationPatchFunction.md)

  ↳ [`SubscriptionCallbackMutationPatchObject`](pinia.SubscriptionCallbackMutationPatchObject.md)

## Свойства

### events

• `Опционально` **events**: `DebuggerEvent` \| `DebuggerEvent`[]

🔴 ТОЛЬКО ДЛЯ РАЗРАБОТКИ, НЕ использовать в production коде. Различные вызовы изменений. Поступают от https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging и позволяют отслеживать изменения в devtools и плагинах **только во время разработки**.

___

### storeId

• **storeId**: `string`

`id` хранилища, осуществляющего изменение.

___

### type

• **type**: [`MutationType`](../enums/pinia.MutationType.md)

Тип изменения.
