import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Text, Anchor } from "@mantine/core";

const GrouchPortfolioPage = () => {
  return (
    <Layout>
      <Text pb="md">
        Grouch clothing and accessories. Items may still be available for
        purchase at the website,{" "}
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
