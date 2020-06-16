// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
import React from "react";
import { ThemeProvider } from "./src/context";
import "prismjs/themes/prism-tomorrow.css";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
