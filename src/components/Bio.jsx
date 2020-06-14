/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, css } from "@emotion/core";

import { rhythm } from "../utils/typography";

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            dev
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      css={{
        paddingTop: rhythm(2),
        paddingBottom: rhythm(2),
      }}
    >
      <h1>
        你好，我是{` `}
        <a
          href={`https://mobile.twitter.com/${social.twitter}`}
        >{`${author.name}`}</a>
        ，这是我的博客。
      </h1>
      <h3>{author.summary}</h3>
    </div>
  );
};
