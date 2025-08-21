import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "HDB UXD Playbook",
  tagline: "Dinosaurs are cool",
  favicon: "icons/logo.ico",
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/customTheme.scss"),
            require.resolve("./src/css/index.scss"),
            require.resolve("./src/css/showcase.scss"),
            require.resolve("./src/css/versions.scss"),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "HDB UXD Playbook",
      logo: {
        alt: "HDB UXD Playbook Logo",
        src: "logo/logo.svg",
      },
      style: "dark",
      items: [
        {
          type: "doc",
          docId: "polymer/polymer",
          position: "right",
          label: "Polymer",
        },
        {
          type: "doc",
          docId: "biome/biome",
          position: "right",
          label: "Biome",
        },
        {
          type: "doc",
          docId: "accessibility",
          position: "right",
          label: "Accessibility",
        },
        {
          type: "doc",
          docId: "brand",
          position: "right",
          label: "Brand",
        },
        {
          type: "dropdown",
          position: "right",
          label: "More",
          items: [
            {
              label: "About",
              type: "doc",
              docId: "more/about",
            },
            {
              label: "UX Resources",
              type: "doc",
              docId: "more/ux-resources",
            },
            {
              label: "Articles",
              type: "doc",
              docId: "more/articles",
            },
            {
              label: "Report Card",
              type: "doc",
              docId: "more/report-card",
            },
            {
              label: "Feedback",
              type: "doc",
              docId: "more/feedback",
            },
          ],
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "right",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://wog.sgts.gitlab-dedicated.site/hdb/appengine/hdb-innersource/biome-v2.0/?path=/docs/getting-started-setting-up--docs",
          "aria-label": "GitHub repository",
          position: "right",
          className: "navbar-storybook-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "00173FRNAO",
      apiKey: "1073ddd55b9f86b39183f9301b6a6ade",
      indexName: "hdb-uxd-playbook",
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
