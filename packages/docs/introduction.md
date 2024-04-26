# Вступление %{#introduction}%

<VueSchoolLink
  href="https://vueschool.io/lessons/introduction-to-pinia"
  title="Начало работы с Pinia"
/>

Pinia [начиналась](https://github.com/vuejs/pinia/commit/06aeef54e2cad66696063c62829dac74e15fd19e) как эксперимент по перепроектированию того, как может выглядеть хранилище для Vue с [Composition API](https://github.com/vuejs/composition-api) примерно в ноябре 2019 года. С тех пор начальные принципы остались неизменными, но Pinia работает как для Vue 2, так и для Vue 3 **и не требует использования composition API**. API одинаков для обоих вариантов, за исключением _установки_ и _SSR_, и эта документация ориентирована на Vue 3 **с примечаниями для Vue 2**, когда это необходимо, чтобы ее могли читать пользователи Vue 2 и Vue 3!

## Почему вы должны использовать Pinia? %{#why-should-i-use-pinia}%

<!--
https://masteringpinia.com/lessons/why-use-pinia
 -->

Pinia - это библиотека для создания хранилища для Vue, которая позволяет вам совместно использовать состояние между компонентами/страницами. Если вы знакомы с Composition API, вы, возможно, думаете, что уже можете совместно использовать глобальное состояние с помощью простого `export const state = reactive({})`. Это верно для одностраничных приложений (SPA), **но при использовании рендеринга на стороне сервера (SSR) это может привести к [уязвимостям безопасности](https://vuejs.org/guide/scaling-up/ssr.html#cross-request-state-pollution)**. Но даже в небольших одностраничных приложениях вы получаете много возможностей от использования Pinia:

- Утилиты для тестирования
- Плагины: расширение возможностей Pinia с помощью плагинов
- Полноценная поддержка TypeScript или **автозаполнение** для пользователей JS
- Поддержка рендеринга на стороне сервера (SSR)
- Поддержка Devtools
  - Хронология для отслеживания действий, мутаций
  - Хранилища отображаются в компонентах, в которых они используются
  - Легкая отладка с возможностью перемещения во времени
- Горячая замена модулей (HMR)
  - Изменение вашего хранилища без перезагрузки страницы
  - Сохранение существующего состояния в процессе разработки

Если вы всё ещё сомневаетесь, ознакомьтесь с [**официальным** курсом Mastering Pinia](https://masteringpinia.com). В самом начале мы рассмотрим, как создать собственную функцию `defineStore()`, а затем перейдем к официальному Pinia API.

<VueMasteryLogoLink for="pinia-cheat-sheet">
</VueMasteryLogoLink>

## Простой пример %{#basic-example}%

Вот как выглядит использование Pinia в терминах его API (не забудьте посмотреть [руководство по началу работы](./getting-started.md), чтобы получить полную инструкцию). Начнем с создания хранилища:

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // также может быть объявлено как
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```

Затем вы используете его в компоненте:

```vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
// автозаполнение ✨
counter.$patch({ count: counter.count + 1 })
// или используете действие (action) вместо этого:
counter.increment()
</script>

<template>
  <!-- Обращайтесь к состоянию напрямую из хранилища -->
  <div>Current Count: {{ counter.count }}</div>
</template>
```

[Попробуйте в песочнице](https://play.pinia.vuejs.org/#eNqNVM1O3DAQfpVpVGkXQWIQLYfVgqCIQ3toq9JjLsEZWNPEtuzJstUqb9IH6HP1STq2k/2hFeKyG49nvvnmsz+vsytri2WH2Sybe+mUJfBInb0otWqtcQRr6Dxem04TulsyDqGHe2damBRCpnDx6CelLrU02hMMQTh/Xjg9SEmpJv4fHpZaCHhStICqIyNNaxskZTT8+fV7m/zWViQX03UCn409Eggcwgn0DM5IxnFXpR+g0lDJCKSYFFb1Fkxp6bBFTYHQXKSxeWBeEHL/ipBXAPM3eQ5XUqL3QAsET7wDtXIoqfmZREjxoEqep6JaLS+uO+cYH+L0M1gPvDeE+34uQl5ov2mZHWVJ8rytLEtqNB/KOmCWw4YvMwYLkRCzSqsqRMpMxO8CfZvfOfPk45GU2dGYesknLGpckjGNzyurUtmCyPqZELLWnF9jo5au0EhC21b8U3N5VrwvTkSj7gQ3EkrXuNpvwxV5je1r0MfUy+Pi5F1xFlGXpwNoG1ADaF/qnmUhzzfrXj08EyVcFtWg+2LDOe+LUzWNefoUY+Q63FCUC5Q//hN/9KvE+qtDlm+JO2NR5R6Q0vbN7Wdc8fdmszV113D2C5vf0JumCxxT2odO10x7Jy+y/RjPmO/ud3+zItR+HCoQjWrE/Cjz9Qujb+meFqc7Km7NyhJuzF3jvdK4b+x4m6KjcRXTkrGfvwPnu8XTyYA/OUpUoltmMD2A84uRnOOnxWnuOtj4OHAbB2P3cripoWq8gTt2WkTntR+29yC3jwGjsJFh8LvfSLHj8zEEbFjlt29PiKTu4bc/yPq/puS2IQ==)

Вы даже можете использовать функцию (аналогичную `setup()` в компоненте) для определения хранилища для более сложных случаев использования:

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

[Попробуйте в песочнице](https://play.pinia.vuejs.org/#eNqNVEFu2zAQ/MpWKGAHscQGaXMwnCBpkEN7aIumR10Uah0zlUiCXCkuDP2kD+i7+pIuSVt20iLoSeJydnZ2yOUmu7K26DvM5tnCS6csgUfq7EWpVWuNI9hA5/HadJrQ3ZJxCAMsnWlhUgiZwsWDn5S61NJoT7ANwvnzxOlRAqWc+D0+LrUQ8KhoBVVHRprWNkjKaPj989ce/NpWJFfTTSKf72okEjiGExiYnJmM46pK30OloZKRSLEorOo9mdLSYYuagqCFSG1zw7wg5PoVIa8AFq/yHK6kRO+BVgieeAdq5VBS8yOZkOLBlTxPSbXqL64755gfYvdz2Gx1j4KHYSECLpQfS2azLFmet5VlS43mQ9kEznK74cuMyUIkxKzSqgqRMhPxv0Df5nfOPPp4JGU220Ev+YRFjT0Z0/i8siqlrYisnwsha834GhvVu0IjCW1b8VfO5VnxrjgRjboTXEgoXeP6aRnOyGts/4d9B718U5y8Lc4ia3+6JW0DayAdSj2wLeT5Zi3V/TNTwmVRDbrPNpzzU3OqpjGPH2OMXIejRLlC+f0f8Qe/Tqq/OGT7ejxoiyp3j5S2b24/4Zr/x83W1F3D6Bc2v6I3TRc0Jtj7Ttcs+wAX1X6IZ8x395u/WRNqv2sqCI1uRHy0+fqF1vdyT4vTAxf3w8oWjsPtcDkONBPzHI9bNS6VxqczHy9aHHZcR1ia+edPxPlh8nSyLT2ZwfQIzi+S1oPXgvGsY/qG5xFg2end4I5zuusuoou+ajoMT0fsLXwcv1lOs+YImO1TY/NH2fAHelGuuQ==)

Если вы еще не знакомы с `setup()` и Composition API, не переживайте, Pinia также поддерживает набор [_map-помощников_, аналогичных Vuex](https://vuex.vuejs.org/guide/state.html#the-mapstate-helper). Вы определяете хранилища так же, как и раньше, но затем используете `mapStores()`, `mapState()`, или `mapActions()`:

```js {22,24,28}
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

const useUserStore = defineStore('user', {
  // ...
})

export default defineComponent({
  computed: {
    // другие вычисляемые свойства
    // ...
    // предоставляет доступ к this.counterStore и this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // предоставляет доступ только для чтения к this.count и this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // предоставляет доступ к this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
})
```

[Попробуйте в песочнице](https://play.pinia.vuejs.org/#eNqdVcFy0zAQ/RWNL0lpIrUUesikmRTooRyAoXDCHBxrm6i1JY8kp5nJ+N9ZS7bsOIFhekmk1b7dt0/a9T66LQq6LSGaRXOTalHYRSxFXihtyZ5weBQSPircS5CWVORRq5yMEDDqueVJ8WCVBjPxy8SCW92mVihpAqwQUiR9YGkweCktaIcPjpSl3kyfzMD/pzl2RnPjGUvYOV9knpSZ++9XMN7HkpAUt6UFPiNuSwhjRNkN6HBCCq0K0FaACR6U0rBeiy0YkqQpGEOsInYjDG04e3aJ5N5ak3MmD8YoQa7xoP7JQYFnk0E6DQk/mbNLxlW5ygaZ8DaOE/0aOeRoQkYeM/rt81XuNwe7Udz0BTpZspCphrwW9qyftLn4U2kDop+wQvSchfeHGwt5kSFz3BEy52K7cIGQ0B4vqQvZCFBVc1Y7Be9Prijn7us7dFmV1ipJlmkm0uebOAqs4mhx367nzLshZM4CoWgS+fc4xULx1SmJveNkwjDuwMRREC6O3KOvLXHE3JqCyacrrV78q42j5p7jaIl9xThsrVKZmSaF8LCNtYWZMZZyif4cMrHVVIJlssjZEWZ5Td/TS5aJFcNETEgOu8M0iJhyyP8neuu6vKCX7+i1i7q9aoLmdVR3hXiDKIs1qZKPYj0Qpe4pkYH+WrhHcSBOkmXq5bOzWV1CoJhuIH0+YX8yO8/6G7YP6C30yrKJXgNeYH189/AFdrgOh7niJTbGvw6/g1FZWXP0bh9KyZF2z8+xvXd3LOT6h7nbWZCmLaom2nWQk7meO38rvaN7Ra96KnaTDyUcTOLDwdeO0zD0UH5jj4bqTR889n0PGjvfUTH1fJiR8Rm5WZBx01wzckEq357IEb27SeC7CQEO6FBu1TTiG/K2N0YSPwcCuDcuWhPpzbHzc2/z4HYwoCbNgH+9IN1XY6BGHbmVop3xLmn1B2TmaJo=)

Более подробную информацию о каждом из _помощников для отображения (map helpers)_ вы найдете в разделе "Основные концепции".

## Официальный курс %{#Official-Course}%

Официальный курс по Pinia - [Mastering Pinia](https://masteringpinia.com). Написанный автором Pinia, он охватывает всё, начиная с основ и заканчивая продвинутыми темами, такими как плагины, тестирование и рендеринг на стороне сервера. Это лучший способ начать работу с Pinia и освоить её.

## Почему _Pinia_ %{#why-pinia}%

Pinia (произносится `/piːnjʌ/`, как "peenya" на английском) - это слово, наиболее близкое к "piña" (_ананас_ на испанском), которое является допустимым именем пакета. На самом деле ананас - это группа отдельных цветов, которые объединяются, создавая несколько плодов. Подобно хранилищам, каждый из них рождается отдельно, но в конечном итоге все они соединяются. Это также вкусный тропический фрукт, происходящий из Южной Америки.

## Более реалистичный пример %{#a-more-realistic-example}%

Вот более полный пример использования API, которое вы будете использовать с Pinia **с типами даже в JavaScript**. Для некоторых людей этого может быть достаточно, чтобы начать, даже без дальнейшего чтения, но мы всё же рекомендуем ознакомиться с остальной документацией или даже пропустить этот пример и вернуться к нему после прочтения всех _Основных концепций_.

```js
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // тип будет автоматически приведен к числу
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // автозаполнение! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // вызов других геттеров (getters) с автозаполнением ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // любое количество аргументов, возвращает Promise или нет
    addTodo(text) {
      // можно изменять состояние напрямую
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```

[Попробуйте в песочнице](https://play.pinia.vuejs.org/#eNqtVs1y2zYQfpU1L5QdmUzGbQ4cyWO3k86kh7STuKcwB4pcWohJgIMfWRqVb9IH6HP1SboA+Cu7nkzbiygQu99++Haxy2Nw2zTRzmCQBCuVS9ZoUKhNc51yVjdCajiCxBJaKKWoISTTcLKltJB4Jz5iqQaThnGWTY2MIpNCjBZRrO06+qrILOW54EqDe/XJ4sF6cFmc99tHKFmlUS67JxY95nrKYjHCkGvvzPHRWt/hXpM5nWcRhm67NDzXTHDICoe3OIdjygFYCYuziVe0yyqD3SYQgjaS3AFaiwIT8lGP9NTbGj55S3xCUoFwVrFPAElPC411U2UaaQWwqrINVtcrxhujYXdZiwKrdRp4KdIA9KFBWsusYIKWDpnWWVWlwTXcVtUq9hD/Ba2kxKotFhbyp+7//4Fr+BT5t2E1w95K/zR+baMxilEKSQhWfmB8XhoUIXnAQ7cdMYvuXcn5lKM3Uf2xRrL5FvOHjdhPnI9Hl+9I23JqKXMOMa6YZxh3FDs5/PYHfATLKumsT+NP6mKMbQPQ6oZO0UhUKkJOx7N59TXWcZrptDFaUz0nBVPZpsKCrKeFbOHyiuUPM5TbgsT2noSyiofiC5aBv8aXddbQfRWcGoW7BGm3QTIn/bVIA3f37Zs0iN3/CFV9uZHiUaEk/zRY9qY31EriAndaiEpdZg3zblutG5XEcV5wsidx2E5GHHXMmzp+4nPzNvo+ekPSb2IKFDNe4H4ehjwuC6y/Bb03vXkdvfkueutQd1cdaG1RuxvfkixaUWsp2f2JKLmoG1ah/KWxbWUuDt1G8fize6elwYGiK7Fn3n9VVHWW9a+UfJQ7nBxLZ/IeKZt2+92nDy6zwyYVlanI+oXNj6hEZSxHb/aD4QXRntg5tu9djhm/v1Pv9hq56g9liTo1nL2T+ccXjj7SvYqupip2c4AEHMZFgdQA0E+C05mSctw7M9/Xh8mynnotQgcbLn18pamSE6DWvr6GRUcpvriAG3vN3G0mhRKyk3TQJbAiAW7qjZ01Y0dIYENFhxmH9vOXFi5ij+MiJfD5S6fbBDckBUP4HcK+n7nF2OzCEcX3rQScS48UuzYAj6yqYIOQGS3qTLOcbA7U7EqU1OmIQEfWe5E++j2Rfe1Q2nP3IOkJnmh2h+8Z+BHr9BlGmwtsY9lKrtCm8gz++uPPftePPi9q5NPn2S/c6HUinzRTN/j6UgEYFXg+/rdEOHs5BGWhQ6NseDz17xLdw8wS9U/M7VeD3rKeL6zXNNyHdE8Mncg2kSD0lgy7BFGu9fZE/Kn2gzZdkImKvUkLWCl8nsmk9GZcpqAnyRlgT5LjbF1upsL738x9UY3VZuuJHyCrheEaRAnUC0xNo0wte7gMGrrmjIgLCVxo79h/SdmszevzIAzJx6FgEnNN16E2NhVEC33d9LYjz6gxarvwJeBT7/b8fXn1al4BZWZFbGdVZX/b86D9GztAvyY=)

## Сравнение с Vuex %{#comparison-with-vuex}%

Pinia начала свой путь как исследование того, как может выглядеть следующая версия Vuex, включая множество идей, обсуждаемых в команде разработчиков для Vuex 5. В конечном итоге мы поняли, что Pinia уже реализует большую часть того, что мы хотели видеть в Vuex 5, и решили рекомендовать Pinia вместо него.

По сравнению с Vuex, Pinia предоставляет более простой API с меньшим количеством формальностей, предлагает API в стиле Composition API и, что самое важное, обеспечивает надежную поддержку вывода типов при использовании TypeScript.

### RFCs %{#rfcs}%

Изначально Pinia не проходила через процесс RFC (Request for Comments). Я тестировал идеи, опираясь на свой опыт разработки приложений, изучение код других разработчиков, работу с клиентами, использующими Pinia, и ответы на вопросы в Discord.
Это позволило мне предложить решение, которое работает и адаптировано к различным случаям и размерам приложений. Ранее я часто публиковал обновления и развивал библиотеку, сохраняя её основной API неизменным.

Теперь, когда Pinia стала рекомендуемым средством управления состоянием, она подлежит тому же процессу RFC, что и другие основные библиотеки в экосистеме Vue, и её API находится в стабильном состоянии.

### Сравнение с Vuex 3.x/4.x %{#comparison-with-vuex-3-x-4-x}%

> Vuex 3.x - это Vuex для Vue 2, а Vuex 4.x - для Vue 3

API Pinia сильно отличается от Vuex ≤4, а именно:

- _мутаций (mutations)_ больше не существуют. Их часто воспринимали как **чрезмерно многословные**. Изначально они вносили интеграцию с Devtools, но теперь это больше не является проблемой.
- Не нужно создавать сложные пользовательские обёртки для поддержки TypeScript; всё типизировано, и API разработано таким образом, чтобы максимально использовать вывод типов в TypeScript.
- Больше нет магических строк для инъекции; импортируйте функции, вызывайте их и наслаждайтесь автозаполнением!
- Нет необходимости динамически добавлять хранилища; они все являются динамическими по умолчанию, и вы даже не заметите этого. Обратите внимание, что вы всё равно можете вручную использовать хранилище для его регистрации в любое время, но поскольку это происходит автоматически, вам не нужно об этом беспокоиться.
- Больше нет вложенного структурирования _модулей (modules)_. Вы по-прежнему можете неявно вкладывать хранилища, импортируя и _используя_ одно хранилище внутри другого, но Pinia предлагает плоскую структуру по дизайну, сохраняя при этом возможности перекрестной композиции между хранилищами. **Вы даже можете иметь циклические зависимости между хранилищами**.
- Нет _модулей с пространством имён (namespaced modules)_. Учитывая плоскую архитектуру хранилищ, "пространство имён" хранилищ встроено в то, как они определяются, и можно сказать, что все хранилища имеют свои собственные пространства имён.

Для более подробных инструкций о том, как преобразовать существующий проект с использованием Vuex ≤4 для использования Pinia, смотрите [Руководство по миграции с Vuex](./cookbook/migration-vuex.md).
