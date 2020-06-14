import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>你好像迷路了</p>
    </Layout>
  );
};

export default NotFoundPage;
