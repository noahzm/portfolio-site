import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Title, Text } from "@mantine/core";

const BoroPortfolioPage = () => {
  return (
    <Layout>
      <Title size="h5">Boro</Title>
      <Text py="md">
        Provided art direction and graphic design for a local DIY and
        skateboarding-adjacent clothing brand.
      </Text>
      <StaticImage src="../images/boro/mockup.png" alt="" layout="fullWidth" />
    </Layout>
  );
};

export default BoroPortfolioPage;

export const Head = () => <title>Noah Michaels &bull; Boro</title>;
