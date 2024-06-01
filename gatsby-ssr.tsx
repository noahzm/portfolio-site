import React from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ "data-mantine-color-scheme": `light` });
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <ColorSchemeScript key="color-scheme-script" forceColorScheme="light" />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <MantineProvider
        key="mantine-provider"
        theme={theme}
        forceColorScheme="light"
      >
        {element}
      </MantineProvider>
    </>
  );
};
