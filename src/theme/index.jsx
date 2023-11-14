import { responsiveFontSizes, styled as styledApi } from "@mui/material";
import { createAppDarkTheme } from "./darkTheme";


export const createTheme = (themeConfig) => {
  let theme = themeConfig.theme === "DARK" ? createAppDarkTheme(themeConfig) : createAppDarkTheme(themeConfig);

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme, {
        disableAlign: true
    })
  }

  return theme
};

export const styled  = (component, options) => {
    const excludeProp = 'styled';

    const styledOptions = {
        ...options,
        shouldForwardProp: (propName) => (
            options && options.shouldForwardProp
            ? options.shouldForwardProp(propName) && propName !== excludeProp
            : propName !== excludeProp
        )
    }

    return styledApi(component, styledOptions)
}


export { typography, colors } from "./darkTheme/helpers";