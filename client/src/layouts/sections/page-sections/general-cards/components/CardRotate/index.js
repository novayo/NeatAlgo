
// @mui material components
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";

// Images
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";

function CardRotate() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <RotatingCard>
          <RotatingCardFront
            image={bgFront}
            icon="touch_app"
            title={
              <>
                Feel the
                <br />
                NeatAlgo
              </>
            }
            description="All the MUI components that you need in a development have been re-design with the new look."
          />
          <RotatingCardBack
            image={bgBack}
            title="Discover More"
            description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
            action={{ type: "internal", route: "/", label: "start with header" }}
          />
        </RotatingCard>
      </Grid>
    </MKBox>
  );
}

export default CardRotate;
