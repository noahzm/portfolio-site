import * as React from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <ColorSchemeScript key="color-scheme-script" />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PPMori-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ppMoriRegular"
    />,
    <link
      rel="preload"
      href="/fonts/PPMori-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ppMoriSemiBold"
    />,
  ]);
};
