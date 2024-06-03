import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Text } from "@mantine/core";

const BoroPortfolioPage = () => {
  return (
    <Layout>
      <Text pb="md">
        Merchandise for Boro, a pop rap group from Atlanta, Georgia.
      </Text>
      <StaticImage
        src="../images/boro/mockup.png"
        alt=""
        layout="fullWidth"
        placeholder="blurred"
      />
    </Layout>
  );
};

export default BoroPortfolioPage;

export const Head = () => <title>Noah Michaels &bull; Boro</title>;
