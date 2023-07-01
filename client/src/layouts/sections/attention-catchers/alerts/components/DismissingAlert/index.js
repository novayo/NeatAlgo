
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKAlert from "components/MKAlert";
import MKBox from "components/MKBox";

function DismissingAlert() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="warning" dismissible>
              <strong>Holy molly!</strong>&nbsp; You should check in on some of those fields below.
            </MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DismissingAlert;
