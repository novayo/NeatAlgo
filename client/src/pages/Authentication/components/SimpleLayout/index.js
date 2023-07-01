import Grid from "@mui/material/Grid";
import CenteredFooter from "components/Footers/CenteredFooter";
import MKBox from "components/MKBox";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import PropTypes from "prop-types";
import routes from "routes";

function SimpleLayout({ children }) {
  return (
    <MKBox height="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
          color: "info",
        }}
        transparent
      />
      <MKBox width="calc(100% - 2rem)" px={1} mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
        <CenteredFooter />
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the SimpleLayout
SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SimpleLayout;
