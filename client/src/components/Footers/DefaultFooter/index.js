
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

function DefaultFooter({ content }) {
  const { copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ textAlign: "right", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
