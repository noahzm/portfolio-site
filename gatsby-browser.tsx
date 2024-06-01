import "@mantine/core/styles.css";
import React from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";
import "./src/styles/global.css";

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
