import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import routes from "routes";

function IllustrationLayout({ header, title, description, illustration, children }) {
  return (
    <MKBox width="100%" height="100%" bgColor="white">
      <MKBox position="absolute" width="100%" mt={1}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-pro-react",
            label: "buy now",
            color: "dark",
          }}
        />
      </MKBox>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${illustration})` }}
          />
        </Grid>
        <Grid item xs={11} sm={8} md={5} lg={4} xl={3} sx={{ mx: "auto" }}>
          <MKBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <MKBox p={3} textAlign="center">
              {!header ? (
                <>
                  <MKBox mb={1} textAlign="center">
                    <MKTypography variant="h4" fontWeight="bold">
                      {title}
                    </MKTypography>
                  </MKBox>
                  <MKTypography variant="body2" color="text">
                    {description}
                  </MKTypography>
                </>
              ) : (
                header
              )}
            </MKBox>
            <MKBox p={3}>{children}</MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  illustration: "",
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.string,
};

export default IllustrationLayout;
