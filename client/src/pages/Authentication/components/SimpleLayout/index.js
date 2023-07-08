import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import PropTypes from "prop-types";

function SimpleLayout({ children }) {
  return (
    <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
      <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
        <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
          {children}
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Typechecking props for the SimpleLayout
SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SimpleLayout;
