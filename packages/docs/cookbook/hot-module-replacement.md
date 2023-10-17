# Горячая замена модулей %{#hmr-hot-module-replacement}%

Pinia поддерживает горячую замену модулей (Hot Module Replacement)), поэтому вы можете редактировать свои хранилища и взаимодействовать с ними напрямую в вашем приложении без перезагрузки страницы. Это позволяет вам сохранить текущее состояние, добавлять или даже удалять состояние, действия и геттеры.

На данный момент официально поддерживается только [Vite](https://vitejs.dev/), но любой инструмент сборки, реализующий спецификацию `import.meta.hot`, должен работать (например, [webpack](https://webpack.js.org/api/module-variables/#importmetawebpackhot) использует `import.meta.webpackHot` вместо `import.meta.hot`).
Вам нужно добавить этот фрагмент кода рядом с объявлением любого хранилища. Допустим, у вас есть три хранилища: `auth.js`, `cart.js` и `chat.js`. Вы должны добавить (и адаптировать) следующий код после создания _определения хранилища_:

```js
// auth.js
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuth = defineStore('auth', {
  // опции...
})

// убедитесь, что передано правильное определение хранилища,
// в данном случае `useAuth`
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
```
