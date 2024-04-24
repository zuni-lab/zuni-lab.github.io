import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const tailwindPlugin = (context, options) => {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
      ];
      return postcssOptions;
    },
  };
};

const config: Config = {
  title: "ZUNI Lab",
  tagline:
    "Building innovative privacy-preserving solutions for the decentralized world.",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://zuni-lab.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zuni-lab", // Usually your GitHub org/user name.
  projectName: "zuni-lab", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "./projects",
          routeBasePath: "/projects",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/zuni-lab/zuni-lab.github.io/tree/main",
        },
        blog: {
          path: './members',
          pageBasePath: 'members',
          routeBasePath: '/members',
          showReadingTime: true,
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Members',
          editUrl:
            "https://github.com/zuni-lab/zuni-lab.github.io/tree/main",
            
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [tailwindPlugin],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "ZUNI LAB",
      logo: {
        alt: "Zuni Lab Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "projectSidebar",
          position: "left",
          label: "Projects",
        },
        { to: '/members', label: 'Members', position: 'left' },
        {
          href: "https://github.com/zuni-lab",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
