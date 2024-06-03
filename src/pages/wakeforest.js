import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Text } from "@mantine/core";

const WakeForestPortfolioPage = () => {
  return (
    <Layout>
      <Text pb="md">
        T-shirt for Wake Forest University's PA Ultrasound Club.
      </Text>
      <StaticImage
        src="../images/wakeforest/mockup.png"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
      />
    </Layout>
  );
};

export default WakeForestPortfolioPage;

export const Head = () => <title>Noah Michaels &bull; Wake Forest</title>;
