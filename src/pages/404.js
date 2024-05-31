import * as React from "react";
import Layout from "../components/layout";
import { Text, Title } from "@mantine/core";

const NotFoundPage = () => {
  return (
    <Layout>
      <Title ta="center">404!</Title>
      <Text ta="center">
        You may have mistyped the address, or the page has been moved to another
        URL.
      </Text>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Noah Michaels &bull; 404!</title>;
