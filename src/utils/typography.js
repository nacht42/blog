import Typography from "typography";
import theme from "typography-theme-wordpress-2016";

theme.baseFontSize = "18px";
theme.headerFontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Ubuntu",
  "Helvetica Neue",
  "PingFang SC",
  "Hiragino Sans GB",
  "Microsoft YaHei",
  "Source Han Sans SC",
  "WenQuanYi Micro Hei",
  "sans-serif",
];
theme.bodyFontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Ubuntu",
  "Helvetica Neue",
  "PingFang SC",
  "Hiragino Sans GB",
  "Microsoft YaHei",
  "Source Han Sans SC",
  "WenQuanYi Micro Hei",
  "sans-serif",
];

theme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "Helvetica Neue",
        "PingFang SC",
        "Hiragino Sans GB",
        "Microsoft YaHei",
        "Source Han Sans SC",
        "WenQuanYi Micro Hei",
        "sans-serif",
      ].join(","),
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
