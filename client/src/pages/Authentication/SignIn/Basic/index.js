import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Switch from "@mui/material/Switch";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import { signInConfig } from "config";
import { LOG_DEBUG, removeCookie, setCookie } from "helper";
import BasicLayout from "pages/Authentication/components/BasicLayout";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleLogin = () => {
    // TODO: 加入captcha
    // check email
    console.log(email);
    // check pwd
    console.log(pwd);
    // Ready to login
    LOG_DEBUG("Remove cookie due to login");
    removeCookie();

    setCookie("Email", email);
    setCookie("CookieId", pwd);
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            {signInConfig.title}
          </MKTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MKTypography>
            </Grid>
            <Grid item xs={2}>
              <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MKTypography>
            </Grid>
            <Grid item xs={2}>
              <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MKTypography>
            </Grid>
          </Grid>
        </MKBox>
        <MKBox pt={4} pb={3} px={3}>
          <MKBox component="form" role="form">
            <MKBox mb={2}>
              <MKInput
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                label={signInConfig.email}
                fullWidth
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                type="password"
                label={signInConfig.password}
                fullWidth
              />
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
                &nbsp;&nbsp;{signInConfig.remeber_me_button}
              </MKTypography>
            </MKBox>
            <MKBox mt={4} mb={1}>
              <MKButton onClick={handleLogin} variant="gradient" color="info" fullWidth>
                {signInConfig.submit_button}
              </MKButton>
            </MKBox>
            <MKBox mt={3} mb={1} textAlign="center">
              <MKTypography variant="button" color="text">
                {signInConfig.register_text}{" "}
                <MKTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  {signInConfig.register_button}
                </MKTypography>
              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
    </BasicLayout>
  );
}

export default SignInBasic;
