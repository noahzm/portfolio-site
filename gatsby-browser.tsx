import React from "react";
import "./src/styles/global.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {element}
    </MantineProvider>
  );
};
