import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// TaxEase — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// App: https://taxease.aoneahsan.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://taxease-docs.aoneahsan.com';
const APP_URL = 'https://taxease.aoneahsan.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aoneahsan.taxease';

const config: Config = {
  title: 'TaxEase Docs',
  tagline: 'Tax & finance calculators, document generators, and a professional service-request workflow.',
  favicon: 'img/favicon.svg',

  url: SITE_URL,
  baseUrl: '/',

  // GitHub metadata — drives edit links + GitHub Pages deploy + OG tags.
  organizationName: 'aoneahsan',
  projectName: 'taxease-docs',

  // 'throw' on purpose: the build IS the link checker for this site.
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  future: {
    v4: true,
    faster: true,
  },

  // SEO + AI-citability head tags. JSON-LD (WebSite, Organization,
  // SoftwareApplication) helps Google Rich Results, Perplexity, ChatGPT,
  // and Claude extract structured entity data when citing these docs.
  // NOTE: no `rel=canonical` here. headTags are injected into EVERY page, so a
  // hardcoded canonical made all 16 pages declare themselves duplicates of the
  // homepage — on top of the correct per-page canonical Docusaurus already
  // emits. Two conflicting canonicals is worse than none. Docusaurus handles it.
  headTags: [
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'TaxEase Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'TaxEase Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#2563eb' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TaxEase Documentation',
        url: SITE_URL,
        description:
          'Documentation for TaxEase — a tax and professional-services platform offering a 50-tool finance and tax calculator directory, legal document generators, and a service-request workflow. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
        license: 'https://opensource.org/licenses/MIT',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'TaxEase',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Android, Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: APP_URL,
        sameAs: [PLAY_URL, 'https://github.com/aoneahsan'],
        author: { '@type': 'Person', name: 'Ahsan Mahmood', url: 'https://aoneahsan.com' },
        description:
          'TaxEase is a tax and professional-services app for web and Android: a 50-tool tax/finance calculator directory (37 hosted in TaxEase, 13 on ZTools), legal document generators, and a service-request workflow with document handling and status tracking.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  trailingSlash: false,

  markdown: {
    hooks: { onBrokenMarkdownLinks: 'throw' },
  },

  // Offline/local search — no external service, indexed at build time.
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // Docs are served at the site root (see presets.docs.routeBasePath).
        docsRouteBasePath: '/',
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 12,
        searchResultContextMaxLength: 60,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/taxease-docs/edit/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
          // `docs/` doubles as this repo's own docs folder, so it holds two
          // maintainer-only files that must NOT become public pages (they were
          // being published AND listed in sitemap.xml). Keeping the Docusaurus
          // defaults, then excluding those.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
            'tracking/**',
          ],
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: 'date' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      { name: 'description', content: 'Documentation for TaxEase — a 50-tool tax/finance calculator directory, legal document generators, and a professional service-request workflow. Maintained by Ahsan Mahmood.' },
      { name: 'keywords', content: 'taxease, tax calculator, finance calculator, document generator, NDA generator, lease agreement, mortgage calculator, payroll tax, self-employment tax, service request platform, capacitor app, react' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'TaxEase Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    navbar: {
      title: 'TaxEase',
      logo: { alt: 'TaxEase logo', src: 'img/logo.svg', srcDark: 'img/logo.svg', width: 32, height: 32 },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs' },
        { to: '/getting-started/quick-start', label: 'Quick Start', position: 'left' },
        { to: '/tools/overview', label: 'Tools', position: 'left' },
        { to: '/about-the-author', label: 'Author', position: 'right' },
        { href: APP_URL, label: 'Open App', position: 'right' },
        { href: 'https://github.com/aoneahsan/taxease-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'Tools Overview', to: '/tools/overview' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open the App', href: APP_URL },
            { label: 'Google Play', href: PLAY_URL },
            { label: 'Docs source', href: 'https://github.com/aoneahsan/taxease-docs' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. Calculators and document templates are for informational purposes only and are not tax, legal, or financial advice.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
