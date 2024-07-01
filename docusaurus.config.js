// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'report bot!',
  tagline: 'サーバー管理者のためのDiscord bot',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yanikee', // Usually your GitHub org/user name.
  projectName: 'report_bot-docs2', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'report bot!',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Document',
          },
          {
            href: 'https://discord.com/oauth2/authorize?client_id=1237001692977827920&permissions=326417583168&scope=bot',
            label: '🔗 botを導入',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'quickstart',
                to: '/docs/quickstart/',
              },
              {
                label: 'functions',
                to: '/docs/functions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord support',
                href: 'https://discord.gg/djQHvM6PtE',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: '利用規約',
                to: '/terms-of-service',
              },
              {
                label: 'プライバシーポリシー',
                to: '/privacy-policy'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Github',
                to: 'https://github.com/yanikee/report_bot/',
              },
              {
                label: 'GitHub(docs)',
                href: 'https://github.com/yanikee/report_bot-docs2',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 yanike. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;

