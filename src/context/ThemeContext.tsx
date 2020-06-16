import * as React from "react";
import { useState } from "react";
import { darkTheme, lightTheme } from "../utils/theme";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

export const ThemeContext = React.createContext<{
  toggle: () => void | undefined;
}>({
  toggle: undefined,
});

export const ThemeProvider = ({ children }) => {
  let isDark = false;
  if (typeof window !== "undefined") {
    isDark = !!JSON.parse(localStorage.getItem("isDarkTheme"));
  }
  const [isDarkTheme, setIsDarkTheme] = useState(isDark);
  const toggle = () => {
    localStorage.setItem("isDarkTheme", JSON.stringify(!isDarkTheme));
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ toggle }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
