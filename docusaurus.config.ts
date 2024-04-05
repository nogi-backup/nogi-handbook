import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Infozaka46',
  tagline: '努力、感謝、笑顔 うちらは乃木坂上り坂46！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant-HK',
    locales: ['zh-Hant-HK'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Infozaka46',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Calls',
        },
        { to: '/blog', label: 'Blog', position: 'left' }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/nogi46hk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Infozaka46, Inc. Built with Docusaurus.`,
    },
    //    prism: {
    //      theme: prismThemes.github,
    //      darkTheme: prismThemes.dracula,
    //    },
  } satisfies Preset.ThemeConfig,
};

export default config;
