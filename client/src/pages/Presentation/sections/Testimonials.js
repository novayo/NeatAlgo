/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultReviewCard from "components/Cards/ReviewCards/DefaultReviewCard";

import { feedbackConfig } from "config";
import { feedbacks } from "pages/Presentation/sections/data/pagesData";

function Information() {
  const shuffle = [...feedbacks].sort(() => Math.random() - 0.5).slice(0, 6);
  const renderData = shuffle.map(({ name, date, review, rating }, idx) => (
    <Grid item xs={12} md={6} lg={4} key={idx}>
      {idx === 1 ? (
        <DefaultReviewCard name={name} color="info" date={date} review={review} rating={rating} />
      ) : (
        <DefaultReviewCard
          name={name}
          color="transparent"
          date={date}
          review={review}
          rating={rating}
        />
      )}
    </Grid>
  ));
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">{feedbackConfig.name}</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          {renderData}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
