import React from "react";
import { AppShell, Burger, Affix, Text, Title } from "@mantine/core";
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
        <Burger
          bg="white"
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
      </Affix>

      <AppShell.Navbar p="md">
        <Title component={Link} to="/" size="h5" c="black" td="none">
          Noah Michaels
        </Title>
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
