import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Text, Title } from "@mantine/core";

const WakeForestPortfolioPage = () => {
  return (
    <Layout>
      <Title size="h5">Wake Forest PA Ultrasound Club T-Shirt</Title>
      <Text py="md">
        Designed a t-shirt for Wake Forest University's PA Ultrasound Club
      </Text>
      <StaticImage src="../images/wakeforest/mockup.png" alt="StMM Emblem" />
    </Layout>
  );
};

export default WakeForestPortfolioPage;

export const Head = () => <title>Noah Michaels &bull; Wake Forest</title>;
