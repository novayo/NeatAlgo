import Container from "@mui/material/Container";
// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";
import { copyrightConfig } from "config";
import { Link } from "react-router-dom";

const date = new Date().getFullYear();

export default {
  // 最下面那行字
  copyright: (
    <Container>
      <MKTypography variant="button" fontWeight="regular">
        &copy; {date} by {""}
        <Link to={"/"}>
          <MKTypography
            color="info"
            href="/"
            target="_blank"
            rel="noreferrer"
            variant="button"
            fontWeight="regular"
            textAlign="left"
          >
            {copyrightConfig.formal_name}
          </MKTypography>
        </Link>
      </MKTypography>
      <br />
      <MKTypography
        component="a"
        href={copyrightConfig.terms_url}
        target="_blank"
        rel="noreferrer"
        variant="body2"
        fontWeight="bold"
      >
        Terms
      </MKTypography>
      &nbsp;&nbsp;
      <MKTypography
        component="a"
        href={copyrightConfig.privacy_url}
        target="_blank"
        rel="noreferrer"
        variant="body2"
        fontWeight="bold"
      >
        Privacy
      </MKTypography>
    </Container>
  ),
};
