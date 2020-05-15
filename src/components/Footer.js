/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui";
import NavLink from "./NavLink";

function Footer() {
  return (
    <footer
      sx={{
        backgroundColor: "background",
        boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary.base}`,
        marginY: [2, 3, 4],
        marginX: [2, "auto", "auto"],
        borderRadius: 3,
        maxWidth: "656px",
      }}
    >
      <Container sx={{ maxWidth: 1 }}>
        <Flex sx={{ alignItems: "center", padding: 2 }}>
          <NavLink title="Twitter" href="https://twitter.com/JesseThomasBox">
            Twitter
          </NavLink>
          <NavLink
            title="LinkedIn"
            href="https://www.linkedin.com/in/jesse-box-835346b7/"
          >
            LinkedIn
          </NavLink>
        </Flex>
      </Container>
    </footer>
  );
}

export default Footer;
