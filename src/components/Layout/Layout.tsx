import * as React from "react";
import { Global } from "@emotion/core";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";
import { useTheme } from "emotion-theming";
import { theme } from "../../utils/theme";

export const Layout = ({ children }) => {
  const theme = useTheme<theme>();
  return (
    <>
      <Global
        styles={{
          body: {
            background: theme.colors.background,
            color: theme.colors.body,
          },
          a: {
            color: theme.colors.primary,
          },
        }}
      />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};
