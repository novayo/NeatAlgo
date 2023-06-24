import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// HelpCenter page components
import FaqCollapse from "pages/Support/HelpCenter/components/FaqCollapse";

import { faqConfig } from "config";

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6} my={6}>
              <MKTypography variant="h2" align="center" fontWeight="bold" gutterBottom>
                {faqConfig.name}
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={10}>
              <FaqCollapse
                title={faqConfig.question1}
                open={collapse === 1}
                onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
              >
                {faqConfig.answer1}
              </FaqCollapse>
              <FaqCollapse
                title={faqConfig.question2}
                open={collapse === 2}
                onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
              >
                {faqConfig.answer2}
              </FaqCollapse>
              <FaqCollapse
                title={faqConfig.question3}
                open={collapse === 3}
                onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
              >
                {faqConfig.answer3}
              </FaqCollapse>
              <FaqCollapse
                title={faqConfig.question4}
                open={collapse === 4}
                onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
              >
                {faqConfig.answer4}
              </FaqCollapse>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Faq;
