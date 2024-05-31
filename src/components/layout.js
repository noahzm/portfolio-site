import React from "react";
import { AppShell, Burger, Affix, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "gatsby";

export default function Layout({ children }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <Affix position={{ bottom: "1rem", left: "1rem" }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Affix>

      <AppShell.Navbar p="md">
        <Text fw="500" component={Link} to="/">
          Noah Michaels
        </Text>
        <Text component={Link} to="/about" pt="md">
          About
        </Text>
        <Text component="a" href="mailto:hi@noahmichaels.xyz">
          Contact
        </Text>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
