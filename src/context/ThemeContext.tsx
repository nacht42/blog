import * as React from "react";
import { useState } from "react";
import { darkTheme, lightTheme } from "../utils/theme";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

export const ThemeContext = React.createContext<{
  isDarkTheme: boolean;
  toggle: () => void | undefined;
}>({
  isDarkTheme: false,
  toggle: undefined,
});

export const ThemeProvider: React.FC = ({ children }) => {
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
    <ThemeContext.Provider value={{ toggle, isDarkTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
