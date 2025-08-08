import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '81a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e88'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b79'),
            routes: [
              {
                path: '/category/community',
                component: ComponentCreator('/category/community', '593'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/help-center',
                component: ComponentCreator('/category/help-center', '208'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/legal',
                component: ComponentCreator('/category/legal', '7cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/delete-account',
                component: ComponentCreator('/delete-account', 'dce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/help',
                component: ComponentCreator('/help', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/privacy',
                component: ComponentCreator('/privacy', 'dd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rules',
                component: ComponentCreator('/rules', '351'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/terms',
                component: ComponentCreator('/terms', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
