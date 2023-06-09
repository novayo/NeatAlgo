
// @mui material components
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import SimplePricingCard from "components/Cards/PricingCards/SimplePricingCard";

function CardPricing() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <SimplePricingCard
          variant="gradient"
          color="dark"
          title="Premium"
          description="Free access for 200 members"
          price={{ value: "$499", type: "year" }}
          action={{ type: "internal", route: "/", label: "buy now" }}
          specifications={[
            "Complete documentation",
            "Working materials in Sketch",
            "20GB cloud storage",
            "100 team members",
          ]}
        />
      </Grid>
    </MKBox>
  );
}

export default CardPricing;
