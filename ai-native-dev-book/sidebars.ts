import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'AI Native Development',
      collapsible: false,
      items: [
        'intro',
        'planning',
        'research',
        'data-model',
        'quickstart',
        'tasks',
        'checklists',
      ],
    },
  ],
};

export default sidebars;
