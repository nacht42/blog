/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { rhythm } from "../../utils/typography";
import { graphql, useStaticQuery } from "gatsby";

const footerAStyle = css({ color: "inherit", textDecoration: "underline" });

export const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            twitter
            github
            dev
            telegram
          }
        }
      }
    }
  `);
  const { social } = data.site.siteMetadata;
  return (
    <footer
      css={{
        height: rhythm(2.5),
      }}
    >
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <p css={{ margin: 0 }}>
        © {new Date().getFullYear()}, Written by <strong>Nacht</strong>, Built
        with{" "}
        <a css={footerAStyle} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
        , Powered by{" "}
        <a css={footerAStyle} href="https://www.vercel.com">
          Vercel
        </a>
      </p>
      <p>
        <strong>
          <a href={`https://github.com/${social.github}`}>Github</a>
        </strong>
        {` · `}
        <strong>
          <a href={`https://mobile.twitter.com/${social.twitter}`}>Twitter</a>
        </strong>
        {` · `}
        <strong>
          <a href={`https://dev.to/${social.dev}`}>DEV</a>
        </strong>
        {` · `}
        <strong>
          <a href={`https://t.me/${social.telegram}`}>Telegram</a>
        </strong>
      </p>
    </footer>
  );
};
