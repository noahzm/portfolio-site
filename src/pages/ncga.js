import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Text, SimpleGrid } from "@mantine/core";

const NCGAPortfolioPage = () => {
  return (
    <Layout>
      <Text pb="md">Stickers for the North Carolina General Assembly.</Text>
      <SimpleGrid cols={{ "0em": 1, "36em": 2, "62em": 3 }} type="container">
        <StaticImage
          src="../images/ncga/visitors-sticker3.png"
          alt=""
          placeholder="blurred"
        />
        <StaticImage
          src="../images/ncga/visitors-sticker1.png"
          alt=""
          placeholder="blurred"
        />
        <StaticImage
          src="../images/ncga/visitors-sticker4.png"
          alt=""
          placeholder="blurred"
        />
      </SimpleGrid>
    </Layout>
  );
};

export default NCGAPortfolioPage;

export const Head = () => <title>Noah Michaels &bull; NCGA</title>;
