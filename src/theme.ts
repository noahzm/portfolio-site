import { AppShell, createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "PP Mori",
  headings: {
    fontWeight: "500",
  },
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
