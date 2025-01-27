# Начало работы %{#getting-started}%

## Установка %{#instalation}%

<VueMasteryLogoLink for="pinia-cheat-sheet">
</VueMasteryLogoLink>

Установите `pinia` с помощью вашего любимого менеджера пакетов:

```bash
yarn add pinia
# или с помощью npm
npm install pinia
```

:::tip Совет
Если ваше приложение использует Vue <2.7, вам также нужно установить composition api: `@vue/composition-api`. Если вы используете Nuxt, следуйте [этим инструкциям](/ssr/nuxt.md).
:::

Если вы используете Vue CLI, вы также можете попробовать этот [**неофициальный плагин**](https://github.com/wobsoriano/vue-cli-plugin-pinia).

Создайте экземпляр Pinia (корневое хранилище) и передайте его в приложение как плагин:

```js {2,5-6,8}
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

Если вы используете Vue 2, вам также нужно установить плагин и внедрить созданный `pinia` в корень приложения:

```js {1,3-4,12}
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // другие...
  // ...
  // обратите внимание, что один и тот же экземпляр `pinia` может
  // использоваться в нескольких приложениях Vue на одной и той же странице
  pinia,
})
```

Это также добавит поддержку Devtools. В Vue 3 некоторые функции, такие как перемещение во времени и редактирование, все еще не поддерживаются, потому что vue-devtools пока не предоставляет необходимых API, но в целом Devtools имеет гораздо больше функций, и опыт разработчика в целом значительно улучшен.

## Что такое хранилище? %{#what-is-a-store}%

Хранилище (как, например, Pinia) - это сущность, которая содержит состояние и бизнес-логику, не привязанную к дереву компонентов. Другими словами, она содержит глобальное состояние. Это немного похоже на компонент, и у которого все могут читать и записывать данные. В нем есть три основных концепции: [состояние (state)](./core-concepts/state.md), [геттеры (getters)](./core-concepts/getters.md) и [действия (actions)](./core-concepts/actions.md) , и можно с уверенностью предположить, что эти концепции эквивалентны `data`, `computed` и `methods` в компонентах.

## Когда мне стоит использовать хранилище %{#when-should-i-use-a-store}%

Хранилище должно содержать данные, к которым можно получить доступ во всем вашем приложении. Сюда входят данные, используемые во многих местах, например, информация о пользователе, отображаемая в навигационной панели, а также данные, которые должны сохраняться при переходе между страницами, например, в случае сложной многоступенчатой формой.

С другой стороны, следует избегать включения в хранилище локальных данных, которые могут быть размещены в компоненте, например, видимость элемента, локального для страницы.

Не все приложения требуют доступа к глобальному состоянию, но если вашему приложению нужен такой доступ, то Pinia сделает вашу жизнь проще.

## Когда мне **не** стоит использовать хранилище %{When-should-I-not-use-a-Store}%

Иногда мы используем хранилище для слишком многих вещей. Если вам кажется, что ваше приложение слишком часто использует хранилища, вам, возможно, стоит пересмотреть назначение хранилищ. В частности, если некоторая их логика должна быть обычным composable или если некоторое состояние должно быть локальным для компонента. Это подробно рассматривается в уроке [(Not) Overusing stores](https://masteringpinia.com/lessons/not-overusing-stores) из курса Mastering Pinia.
