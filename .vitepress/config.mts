import { defineConfig, loadEnv } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // const env = loadEnv(mode, process.cwd()),
  locales: {
    root: {
      label: "简体中文",
      title: "ServerDocs",
      description: "Server Operation Manual",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "主页", link: "/" },
          { text: "开服须知", link: "/L1-Docs" },
        ],

        sidebar: [
          {
            text: "开服",
            items: [
              { text: "简介", link: "/L1-Docs/" },
              // { text: "基础知识", link: "/L3-Docs/demand" },
            ],
          },
        ],

        // socialLinks: [
        //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
        // ],
      },
    },
  },
});
