import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * TaxEase documentation sidebar. Hand-authored so the navigation order is
 * intentional (intro -> getting started -> features -> tools -> reference).
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/installation', 'getting-started/quick-start', 'getting-started/accounts'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/service-requests',
        'features/documents',
        'features/dashboard',
        'features/browser-extension',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: [
        'tools/overview',
        'tools/tax-calculators',
        'tools/personal-finance',
        'tools/business-calculators',
        'tools/compliance-tools',
        'tools/document-generators',
      ],
    },
    'faq',
    'about-the-author',
  ],
};

export default sidebars;
