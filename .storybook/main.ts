/** @type { import('@storybook/web-components-vite').StorybookConfig } */
import type { StorybookConfig } from "@storybook/web-components-vite";
const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../packages/**/*.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    docs: {
        autodocs: "tag",
    },
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
    ],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
};
export default config;
