import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import { GoogleLogin } from "@react-oauth/google";
import LogoImage from "assets/neatalgo/NeatAlgo.png";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { mainConfig, routesConfig } from "config";
import { LOG_DEBUG, LOG_ERROR } from "helper";
import jwt from "jwt-decode";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const linkComponent = {
    component: "a",
    href,
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  const responseGoogle = (response) => {
    if ("credential" in response) {
      const data = jwt(response["credential"]);
      const name = data["name"];
      const email = data["email"];
      if (name && email) {
        LOG_DEBUG(`Google Login: ${name} ${email}`);
      }
    } else {
      LOG_ERROR(`Google Login failed: ${JSON.stringify(response)}`);
    }
  };

  const responseFacebook = (response) => {
    LOG_DEBUG(`Facebook Login: ${response}`);
    console.log(response);
  };

  return (
    <>
      {/* 登入按鈕 */}
      {name === routesConfig.button_login.name ? (
        <MKBox
          {...rest}
          mx={1}
          p={1}
          display="flex"
          alignItems="baseline"
          color={light ? "white" : "dark"}
          opacity={light ? 1 : 0.6}
          sx={{ cursor: "pointer", userSelect: "none" }}
          onClick={handleOpen}
        >
          <MKTypography
            variant="body2"
            lineHeight={1}
            color="inherit"
            sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
          >
            {icon}
          </MKTypography>
          <MKTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color={light ? "white" : "dark"}
            sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
          >
            登入
          </MKTypography>
          <MKTypography variant="body2" color={light ? "white" : "dark"} ml="auto">
            <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
              {collapse && "keyboard_arrow_down"}
            </Icon>
          </MKTypography>
        </MKBox>
      ) : (
        <>
          <MKBox
            {...rest}
            mx={1}
            p={1}
            display="flex"
            alignItems="baseline"
            color={light ? "white" : "dark"}
            opacity={light ? 1 : 0.6}
            sx={{ cursor: "pointer", userSelect: "none" }}
            {...(route && routeComponent)}
            {...(href && linkComponent)}
          >
            <MKTypography
              variant="body2"
              lineHeight={1}
              color="inherit"
              sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
            >
              {icon}
            </MKTypography>
            <MKTypography
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={light ? "white" : "dark"}
              sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
            >
              {name}
            </MKTypography>
            <MKTypography variant="body2" color={light ? "white" : "dark"} ml="auto">
              <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
                {collapse && "keyboard_arrow_down"}
              </Icon>
            </MKTypography>
          </MKBox>
          {children && (
            <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
              {children}
            </Collapse>
          )}
        </>
      )}
      <Modal open={open} onClose={handleClose}>
        <MKBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: 0,
            borderRadius: "25px",
          }}
        >
          <Container>
            {/* Logo and brand */}
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={1} />
              <Grid item xs={2}>
                <MKBox
                  height="100%"
                  width="auto"
                  sx={{
                    backgroundImage: `url(${LogoImage})`,
                    backgroundPosition: "left",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <MKTypography variant="h3" textAlign="left">
                  {mainConfig.app_name}
                </MKTypography>
              </Grid>
            </Grid>
            <Divider sx={{ borderBottomWidth: "10px", bgcolor: "dark.main" }} />
            {/* Login button */}
            <Grid container justifyContent="center">
              <Grid item sx={{ pt: 1 }}>
                <GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} />
              </Grid>
              <Grid item sx={{ pt: 1, pb: 1 }}>
                <FacebookLogin
                  appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                  callback={responseFacebook}
                  fields="name,email"
                  icon="fa-facebook"
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Modal>
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
