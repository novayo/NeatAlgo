import Container from "@mui/material/Container";
// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  // 最下面那行字
  copyright: (
    <Container>
      <MKTypography variant="button" fontWeight="regular">
        &copy; {date} by {""}
        <MKTypography
          color="info"
          component="a"
          href="https://www.creative-tim.com"
          target="_blank"
          rel="noreferrer"
          variant="button"
          fontWeight="regular"
          textAlign="left"
        >
          白話算法 NeatAlgo
        </MKTypography>
      </MKTypography>
      <br />
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
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
        href="https://www.creative-tim.com"
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
