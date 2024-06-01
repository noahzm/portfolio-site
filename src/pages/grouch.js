import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Title, Text, Anchor } from "@mantine/core";

const GrouchPortfolioPage = () => {
  return (
    <Layout>
      <Title size="h5">Grouch</Title>
      <Text py="md">
        Provided art direction and graphic design for a local DIY and
        skateboarding-adjacent clothing brand. Some items may still be available
        for purchase at the website,{" "}
        <Anchor
          target="_blank"
          rel="noreferrer"
          href="https://grouch.bigcartel.com/"
        >
          grouch.shop
        </Anchor>
        .
      </Text>
      <StaticImage
        src="../images/grouch/mockup.png"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
      />
    </Layout>
  );
};

export default GrouchPortfolioPage;

export const Head = () => <title>Noah Michaels &bull; Grouch</title>;
