import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { SimpleGrid } from "@mantine/core";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <SimpleGrid cols={{ "0em": 1, "36em": 2, "62em": 3 }} type="container">
        <Link to="/grouch">
          <StaticImage src="../images/grouch/mockup.png" alt="Grouch T-Shirt" />
        </Link>
        <Link to="/wakeforest">
          <StaticImage
            src="../images/wakeforest/mockup.png"
            alt="Wake Forest PA Ultrasound Club T-Shirt"
          />
        </Link>
        <Link to="/boro">
          <StaticImage src="../images/boro/mockup.png" alt="Boro T-Shirt" />
        </Link>
      </SimpleGrid>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Noah Michaels</title>;
