---
editLink: false
---

[Документация API](../index.md) / @pinia/testing

# Модуль: @pinia/testing

## Интерфейсы

- [TestingOptions](../interfaces/pinia_testing.TestingOptions.md)
- [TestingPinia](../interfaces/pinia_testing.TestingPinia.md)

## Функции

### createTestingPinia

▸ **createTestingPinia**(`options?`): [`TestingPinia`](../interfaces/pinia_testing.TestingPinia.md)

Создает экземпляр pinia, предназначенный для юнит-тестов, которые **требуют имитации**
хранилищ. По умолчанию **все действия имитируются** и поэтому не выполняются.
Это позволяет тестировать отдельно как хранилище, так и компоненты.
Это поведение можно изменить с помощью опции `stubActions`. Если вы используете jest,
они заменяются на `jest.fn()`, в противном случае вы должны предоставить
собственную опцию `createSpy`.

#### Параметры

| Название  | Тип                                                               | Описание                               |
| :-------- | :---------------------------------------------------------------- | :------------------------------------- |
| `options` | [`TestingOptions`](../interfaces/pinia_testing.TestingOptions.md) | опции для настройки тестирования pinia |

#### Возвращает

[`TestingPinia`](../interfaces/pinia_testing.TestingPinia.md)

дополненный экземпляр pinia
