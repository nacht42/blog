/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { rhythm } from "../../utils/typography";

export const Container: React.FC = ({ children }) => {
  return (
    <div
      css={{
        margin: "auto",
        maxWidth: rhythm(30),
        paddingLeft: rhythm(1 / 2),
        paddingRight: rhythm(1 / 2),
      }}
    >
      {children}
    </div>
  );
};
