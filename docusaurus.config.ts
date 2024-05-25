import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Infozaka46',
  tagline: '努力、感謝、笑顔 うちらは乃木坂上り坂46！',
  favicon: 'img/logo_light.jpg',
  url: 'https://book.infozaka46.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['assets', 'static'],
  i18n: {
    defaultLocale: 'zh-Hant-HK',
    locales: ['zh-Hant-HK'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          blogDescription: 'Page made by a group of Hong Kong Nogizaka46 fans',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 3,
        },
        gtag: {
          trackingID: 'G-X8NBKKTJ0H',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Infozaka46',
      logo: {
        alt: 'Logo',
        src: 'img/logo_light.jpg',
        srcDark: 'img/logo_dark.jpg',
        height: 300
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'callsSidebar',
          position: 'left',
          label: 'Calls',
        },
        { to: '/blog', label: 'Gallery', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Infozaka46, Inc. Built with Docusaurus.`,
    },
    metadata: [
      { name: 'keywords', content: 'nogizaka46, n46, 乃木坂46, 乃木坂, 46' },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
