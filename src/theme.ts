import { AppShell, createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "JetBrains Mono",
  headings: { fontWeight: "normal" },

  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        withBorder: false,
      },
    }),
    Anchor: {
      defaultProps: {
        c: "black",
      },
    },
  },
});
