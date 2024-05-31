import * as React from "react";
import Layout from "../components/layout";
import { Text, Title } from "@mantine/core";

const AboutPage = () => {
  return (
    <Layout>
      <Text>Noah is a graphic designer from Raleigh, North Carolina.</Text>
      <Text>
        He is currently a Print Specialist for the North Carolina General
        Assembly.
      </Text>
      <Title order={2} pt="md" size="h5">
        Work Experience
      </Title>
      <Text>
        Print Specialist
        <br />
        &#8627; NCGA, Raleigh, 2021&ndash;Present
      </Text>
      <Text pt="xs">
        Webmaster & Graphic Designer
        <br />
        &#8627; Creative Printing, Boone, 2018&ndash;2020
      </Text>
      <Title order={2} pt="md" size="h5">
        Education
      </Title>
      <Text>
        Graphic Arts & Imaging Technology
        <br />
        &#8627; Appalachian State University, 2016&ndash;2020
      </Text>
      <Title order={2} fw={500} pt="md" size="h5">
        Activities
      </Title>
      <Text>
        Web Development Teaching Assistant
        <br />
        &#8627; Appalachian State University, 2019&ndash;2020
      </Text>
      <Text pt="xs">
        The Peel Literature & Arts Review
        <br />
        &#8627; Visual Committee, 2018&ndash;2020
      </Text>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>Noah Michaels &bull; About</title>;
