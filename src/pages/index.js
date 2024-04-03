import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <div className="lg:flex">
        <div className="p-3 lg:p-6 lg:w-1/2">
          <h2 className="text-xl lg:text-3xl font-medium tracking-tight">
            Noah is a graphic designer from Raleigh, North Carolina. He is
            currently a Printing Specialist for the North Carolina General
            Assembly.
          </h2>
          <h3 className="pt-8 lg:pt-16 lg:text-xl font-medium">
            Work Experience
          </h3>
          <p className="pt-4 lg:pt-8 lg:text-lg">
            Printing Specialist → NCGA, Raleigh, 2021–Present
          </p>
          <p className="lg:text-lg">
            Webmaster & Graphic Designer → Creative Printing, Boone, 2018–2020
          </p>
        </div>
        <div className="p-3 lg:p-6 lg:w-1/2">
          <StaticImage
            src="../images/home.png"
            alt="Noah Michaels"
            placeholder="blurred"
            aspectRatio={3 / 2}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Noah Michaels</title>;
