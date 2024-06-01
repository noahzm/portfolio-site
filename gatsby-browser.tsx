import React from "react";
import "./src/styles/global.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <html data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript forceColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} forceColorScheme="light">
          {element}
        </MantineProvider>
      </body>
    </html>
  );
};
