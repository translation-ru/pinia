# Работа с Composables %{#dealing-with-composables}%

[Composables](https://vuejs.org/guide/reusability/composables.html#composables) - это функции, которые использует Vue Composition API для инкапсуляции и повторного использования логики с состоянием. Независимо от того, пишете ли вы свои composables, используете [внешние библиотеки](https://vueuse.org/) или делаете и то, и другое, вы можете на полную использовать мощь composables в своих хранилищах Pinia.

## Option-хранилища %{#option-stores}%

При определении option-хранилища можно вызвать composable внутри свойства `state`:

```ts
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: useLocalStorage('pinia/auth/login', 'bob'),
  }),
})
```

Следует помнить, что **вы можете возвращать только состояние, доступное для записи** (например, `ref()`). Вот несколько примеров composables, которые можно использовать:

- [useLocalStorage](https://vueuse.org/core/useLocalStorage/)
- [useAsyncState](https://vueuse.org/core/useAsyncState/)

Приведем примеры composables, которые не могут быть использованы в option-хранилищах (но могут быть использованы в setup-хранилищах):

- [useMediaControls](https://vueuse.org/core/useMediaControls/): раскрывает функции
- [useMemoryInfo](https://vueuse.org/core/useMemory/): раскрывает данные, доступные только для чтения
- [useEyeDropper](https://vueuse.org/core/useEyeDropper/): раскрывает функции и данные, доступные только для чтения

## Setup-хранилища %{#setup-stores}%

С другой стороны, при определении setup-хранилища можно использовать практически любой composable, так как каждое свойство распознается как состояние, действие или геттер:

```ts
import { defineStore, skipHydrate } from 'pinia'
import { useMediaControls } from '@vueuse/core'

export const useVideoPlayer = defineStore('video', () => {
  // мы не будем раскрывать этот элемент напрямую
  const videoElement = ref<HTMLVideoElement>()
  const src = ref('/data/video.mp4')
  const { playing, volume, currentTime, togglePictureInPicture } =
    useMediaControls(videoElement, { src })

  function loadVideo(element: HTMLVideoElement, src: string) {
    videoElement.value = element
    src.value = src
  }

  return {
    src,
    playing,
    volume,
    currentTime,

    loadVideo,
    togglePictureInPicture,
  }
})
```

## SSR %{#ssr}%

При работе с [рендерингом на стороне сервера](../ssr/index.md) необходимо выполнить несколько дополнительных действий, чтобы использовать composables в своих хранилищах.

В [option-хранилищах](#option-stores) необходимо определить функцию `hydrate()`. Эта функция вызывается при инстанцировании хранилища на клиенте (браузере), когда на момент создания хранилища имеется начальное состояние. Причина, по которой нам необходимо определить эту функцию, заключается в том, что в таком сценарии функция `state()` не вызывается.

```ts
import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: useLocalStorage('pinia/auth/login', 'bob'),
  }),

  hydrate(state, initialState) {
    // в этом случае мы можем полностью игнорировать начальное состояние, поскольку мы
    // хотим прочитать значение из браузера
    state.user = useLocalStorage('pinia/auth/login', 'bob')
  },
})
```

В [setup-хранилищах](#setup-stores) необходимо использовать помощник `skipHydrate()` для любого свойства состояния, которое не должно быть подхвачено из начального состояния. В отличии от option-хранилищ, setup-хранилища не могут просто _пропустить вызов `state()`_, поэтому мы помечаем свойства, которые не могут быть гидратированы, с помощью `skipHydrate()`. Обратите внимание, что это относится только к записываемым реактивным свойствам:

```ts
import { defineStore, skipHydrate } from 'pinia'
import { useEyeDropper, useLocalStorage } from '@vueuse/core'

export const useColorStore = defineStore('colors', () => {
  const { isSupported, open, sRGBHex } = useEyeDropper()
  const lastColor = useLocalStorage('lastColor', sRGBHex)
  // ...
  return {
    lastColor: skipHydrate(lastColor), // Ref<string>
    open, // Функция
    isSupported, // boolean (даже не реактивное)
  }
})
```
