import { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import IllustrationLayout from "pages/Authentication/components/IllustrationLayout";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
      <MKBox component="form" role="form">
        <MKBox mb={2}>
          <MKInput type="email" label="Email" fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput type="password" label="Password" fullWidth />
        </MKBox>
        <MKBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MKTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
          >
            &nbsp;&nbsp;Remember me
          </MKTypography>
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="info" size="large" fullWidth>
            sign in
          </MKButton>
        </MKBox>
        <MKBox mt={3} textAlign="center">
          <MKTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MKTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </IllustrationLayout>
  );
}

export default Illustration;
