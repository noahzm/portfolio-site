import React from "react";
import { AppShell, Burger, Affix, Anchor } from "@mantine/core";
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
        <Anchor fw="500" component={Link} to="/">
          Noah Michaels
        </Anchor>
        <Anchor component={Link} to="/about" pt="md">
          About
        </Anchor>
        <Anchor href="mailto:hi@noahmichaels.xyz">
          Contact
        </Anchor>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
