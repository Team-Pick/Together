import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { DocsContainer } from "./DocsContainer";

export const parameters = {};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: {
        ...themes.dark,
        appBg: "black",
        appContentBg: "#202020",
        inputBg: "#333",
        barBg: "black",
        base: "dark",
      },
      // Override the default light theme
      light: { ...themes.normal, appBg: "white", appContentBg: "white" },
    },
    docs: {
      container: DocsContainer,
    },
  },
};

export default preview;
