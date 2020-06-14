/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { graphql, useStaticQuery, Link } from "gatsby";
import { IoIosMoon } from "react-icons/io";
import { rhythm } from "../../utils/typography";

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
            color: "#3333ee",
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
      <IoIosMoon
        css={{
          fontSize: rhythm(1),
          "&:hover": {
            color: "#3333ee",
          },
        }}
      />
    </header>
  );
};

export default Header;
