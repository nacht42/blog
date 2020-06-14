import Typography from "typography";
import theme from "typography-theme-wordpress-2016";

theme.baseFontSize = "18px";
theme.headerFontFamily = [
  "Open Sans",
  "Microsoft YaHei",
  "Source Han Sans SC",
  "Noto Sans CJK SC",
  "sans-serif",
];
theme.bodyFontFamily = [
  "Merriweather",
  "Georgia",
  "Microsoft YaHei",
  "Source Han Sans SC",
  "Noto Sans CJK SC",
  "serif",
];

theme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      boxShadow: `none`,
      color: "#3333ee",
    },
  };
};

delete theme.googleFonts;

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
