
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox component="section" py={3} mt={8}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="grid_view"
              title="Components"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="textsms"
              title="Mix & Match"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="palette"
              title="Design"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="card_giftcard"
              title="Payment"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
