// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import typography from "assets/theme/base/typography";

import { copyrightConfig, contactUsConfig } from "config";

function SimpleFooter({ links, light }) {
  const { size } = typography;

  const renderLinks = () =>
    links.map((link, key) => (
      <MKBox
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link href={link.href}>
          <MKTypography
            to={link.href}
            variant="button"
            fontWeight="regular"
            color={light ? "white" : "text"}
          >
            {link.name}
          </MKTypography>
        </Link>
      </MKBox>
    ));

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()}, made by
          <Link href="/">
            <MKTypography
              to="/"
              variant="button"
              fontWeight="medium"
              color={light ? "white" : "dark"}
            >
              &nbsp;{copyrightConfig.formal_name}&nbsp;
            </MKTypography>
          </Link>
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  links: [
    { href: contactUsConfig.url, name: contactUsConfig.title },
    { href: copyrightConfig.terms_url, name: "Terms" },
    { href: copyrightConfig.privacy_url, name: "Privacy" },
  ],
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  light: PropTypes.bool,
};

export default SimpleFooter;
