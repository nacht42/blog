/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { graphql, useStaticQuery, Link } from "gatsby";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { rhythm } from "../../utils/typography";
import { useTheme } from "emotion-theming";
import { theme } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type queryData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

export const Header: React.FC = () => {
  const data: queryData = useStaticQuery(query);
  const { toggle, isDarkTheme } = useContext(ThemeContext);
  const theme = useTheme<theme>();
  return (
    <header
      css={{
        height: rhythm(2.5),
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3
        css={{
          marginTop: 0,
          marginBottom: 0,
          "&:hover": {
            color: theme.colors.primary,
          },
        }}
      >
        <Link
          to={"/"}
          css={{
            boxShadow: `none`,
            color: `inherit`,
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h3>
      {isDarkTheme === true ? (
        <IoIosSunny
          onClick={toggle}
          css={{
            fontSize: rhythm(1),
            "&:hover": {
              color: theme.colors.primary,
            },
          }}
        />
      ) : (
        <IoIosMoon
          onClick={toggle}
          css={{
            fontSize: rhythm(1),
            "&:hover": {
              color: theme.colors.primary,
            },
          }}
        />
      )}
    </header>
  );
};

export default Header;
