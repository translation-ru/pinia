import { defineConfig, HeadConfig } from 'vitepress'

export const META_IMAGE = 'https://pinia.vuejs.org/social.png'
export const isProduction =
  process.env.NETLIFY && process.env.CONTEXT === 'production'

if (process.env.NETLIFY) {
  console.log('Netlify build', process.env.CONTEXT)
}

const productionHead: HeadConfig[] = []

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // ensure it doesn't start with a number
    .replace(/^(\d)/, '_$1')

export const sharedConfig = defineConfig({
  title: 'Pinia',
  appearance: 'dark',

  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

    anchor: {
      slugify,
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],

    [
      'meta',
      { name: 'wwads-cn-verify', content: '5878a7ab84fb43402106c575658472fa' },
    ],

    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: META_IMAGE,
      },
    ],

    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'KFPPRRIS',
        'data-spa': 'auto',
        defer: '',
      },
    ],

    // Vue School Top banner
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuerouter&type=top',
        // @ts-expect-error: vitepress bug
        async: true,
        type: 'text/javascript',
      },
    ],

    ...(isProduction ? productionHead : []),
  ],

  themeConfig: {
    logo: '/logo.svg',
    outline: [2, 3],

    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/posva' },
      {
        icon: 'github',
        link: 'https://github.com/vuejs/pinia',
      },
      {
        icon: 'discord',
        link: 'https://chat.vuejs.org',
      },
    ],

    footer: {
      copyright: 'Copyright © 2019-present Eduardo San Martin Morote',
      message: 'Released under the MIT License.',
    },

    editLink: {
      pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/:path',
      text: 'Suggest changes',
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '7I08VA6IQF',
        apiKey: '697c26a2f6a3f0308a58b138dc4269a6',
        indexName: 'pinia-ru',
        placeholder: 'Поиск по документации',
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск',
          },
          modal: {
            searchBox: {
              resetButtonTitle: 'Сбросить запрос',
              resetButtonAriaLabel: 'Сбросить запрос',
              cancelButtonText: 'Отмена',
              cancelButtonAriaLabel: 'Отмена',
            },
            startScreen: {
              recentSearchesTitle: 'История поиска',
              noRecentSearchesText: 'Нет истории поиска',
              saveRecentSearchButtonTitle: 'Добавить в избранное',
              removeRecentSearchButtonTitle: 'Удалить из истории поиска',
              favoriteSearchesTitle: 'Избранное',
              removeFavoriteSearchButtonTitle: 'Удалить из избранного',
            },
            errorScreen: {
              titleText: 'Невозможно получить результаты',
              helpText: 'Возможно, вам нужно проверить сетевое соединение',
            },
            footer: {
              selectText: 'выбор',
              navigateText: 'навигация',
              closeText: 'закрыть',
              searchByText: 'Поставщик поиска',
            },
            noResultsScreen: {
              noResultsText: 'Нет результатов по запросу',
              suggestedQueryText: 'Попробуйте поискать',
              reportMissingResultsText:
                'Как вы считаете, должен ли этот запрос возвращать результаты?',
              reportMissingResultsLinkText: 'Сообщите нам об этом.',
            },
          },
        },
      },
    },

    carbonAds: {
      code: 'CEBICK3I',
      // custom: 'CEBICK3M',
      placement: 'routervuejsorg',
    },
  },
})
