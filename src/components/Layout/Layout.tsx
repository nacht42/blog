/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
