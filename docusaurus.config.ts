import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Digg Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'digg', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        pages: false,
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
      title: 'Docs',
      logo: {
        alt: 'Digg Logo',
        src: 'img/digg.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              to: '/terms',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Rules',
              to: '/rules',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'digg.com',
              to: 'https://www.digg.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/digg/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Digg, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
