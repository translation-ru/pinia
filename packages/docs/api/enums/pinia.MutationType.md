---
editLink: false
---

[Документация API](../index.md) / [pinia](../modules/pinia.md) / MutationType

# Перечисление: MutationType

[pinia](../modules/pinia.md).MutationType

Возможные типы для SubscriptionCallback

## Члены перечисления

### direct

• **direct** = ``"direct"``

Прямое изменение состояния:

- `store.name = 'new name'`
- `store.$state.name = 'new name'`
- `store.list.push('new item')`

___

### patchFunction

• **patchFunction** = ``"patch function"``

Изменение состояния с помощью `$patch` и функции

- `store.$patch(state => state.name = 'newName')`

___

### patchObject

• **patchObject** = ``"patch object"``

Изменение состояния с помощью `$patch` и объекта

- `store.$patch({ name: 'newName' })`
