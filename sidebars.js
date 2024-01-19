/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  mySidebar: [
    {
      type: 'html',
      value: 'OVERVIEW',
      className: 'sidebar-title-first',
    },
    {
      type: 'doc',
      id: 'overview/introduction',
      label: 'Introduction'
    },
    {
      type: 'doc',
      id: 'overview/blobsphere',
      label: 'Blobsphere'
    },
    {
      type: 'doc',
      id: 'overview/technologies',
      label: 'Technologies'
    },
    {
      type: 'html',
      value: 'RESOURCES',
      className: 'sidebar-title',
    },
    {
      type: 'doc',
      id: 'resources/ethda-contracts',
      label: 'EthDA Contracts'
    },
    {
      type: 'category',
      label: 'Network Configuration',
      collapsed: false,
      items: [
        // {
        //   type: 'doc',
        //   id: 'resources/network-configuration/install-metamask',
        //   label: 'Install MetaMask'
        // },
        {
          type: 'doc',
          id: 'resources/network-configuration/install-coinbase-wallet',
          label: 'Install Coinbase Wallet'
        },
        {
          type: 'doc',
          id: 'resources/network-configuration/add-ethda-network',
          label: 'Add EthDA Network'
        }
      ]
    },
    {
      type: 'doc',
      id: 'resources/eips',
      label: 'EIPS'
    },
    {
      type: 'doc',
      id: 'resources/repositories',
      label: 'Repositories'
    },
    {
      type: 'doc',
      id: 'resources/official-links',
      label: 'Official Links'
    },
    {
      type: 'html',
      value: 'DEVELOPERS',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Quick Start',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'developers/quick-start/connecting-to-ethda',
          label: 'Connecting to EthDA'
        },
        {
          type: 'doc',
          id: 'developers/quick-start/using-ethda-faucet',
          label: 'Using EthDA Faucet'
        },
        // {
        //   type: 'doc',
        //   id: 'developers/quick-start/bridging-assets-to-ethda',
        //   label: 'Bridging Assets to EthDA'
        // }
      ]
    },
    {
      type: 'category',
      label: 'How To',
      collapsed: false,
      items: [
        // {
        //   type: 'doc',
        //   id: 'developers/how-to/using-ethda-as-altda',
        //   label: 'L2 - Use EthDA as Alt-DA'
        // },
        {
          type: 'doc',
          id: 'developers/how-to/using-ethda-as-dstorage',
          label: 'DApp - Use EthDA as dStorage'
        }
      ]
    },  
   ]
};

export default sidebars;
