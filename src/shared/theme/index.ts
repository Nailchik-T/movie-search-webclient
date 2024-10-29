import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import lightTheme from "./light-theme.ts";

const createTheme = () => {
  let theme = createMuiTheme(lightTheme as ThemeOptions, {
    direction: "ltr",
  });
  theme = responsiveFontSizes(theme);
  return theme;
};

export default createTheme;
