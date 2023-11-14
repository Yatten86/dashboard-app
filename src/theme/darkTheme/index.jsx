import { createTheme } from "@mui/material/styles";
import { typography, colors } from "./helpers";
import merge from "lodash/merge";

export const darkThemeOptions = {
  direction: "ltr",
  typography,
  palette: {
    mode: "dark",
    action: {
      active: colors.primary[100], //???
      disabled: colors.grey[400], //???
    },
    sidebar: {
      default: colors.accentA[800]
    },
    background: {
      default: colors.primary[500],
      dark: colors.primary[500], //same a default(for the moment)
    },
    colors: {
      primary: {
        main: colors.primary[100],
      },
      secondary: {
        dark: colors.grey[500],
        main: colors.grey[300],
        light: colors.grey[700],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      error: {
        main: colors.danger[500],
      },
    },
    
  },
};

export const createAppDarkTheme = (additionalThemeConfig) =>
  createTheme(
    merge(
      {
        direction: "ltr",
        theme: "DARK",
      },
      darkThemeOptions,
      additionalThemeConfig
    )
  );

export { typography, colors } from "./helpers";
