import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: {
    "Getting Started": ["introduction"],
    Designers: ["designers/design-for-polymer", "designers/design-for-biome"],
    Developers: ["developers/set-up-polymer", "developers/set-up-biome"],
    "Product-Owners": [
      "product-owners/envision-for-polymer",
      "product-owners/envision-for-biome",
    ],
  },
};

export default sidebars;
