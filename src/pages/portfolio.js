import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="flex justify-center p-3 lg:p-6">
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 lg:w-20 rounded-full">
              <StaticImage
                src="../images/pfp.jpg"
                alt="Noah Michaels"
                placeholder="blurred"
                aspectRatio={1 / 1}
              />
            </div>
          </div>
          <div class="chat-bubble lg:mt-20 lg:text-2xl">
            Hey, I’m working on this rn. It’ll be ready soon.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Noah Michaels &bull; Portfolio</title>;
