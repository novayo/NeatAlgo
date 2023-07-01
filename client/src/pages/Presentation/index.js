// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import NeatFooter from "pages/Footers";
import NeatNavbar from "pages/Navbars";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Courses from "pages/Presentation/sections/Courses";
import Information from "pages/Presentation/sections/Information";
import Faq from "pages/Presentation/sections/Questions";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Topics from "pages/Presentation/sections/Topics";

// Config
import { mainConfig } from "config";

function Presentation() {
  return (
    <>
      {/* Navbar */}
      <NeatNavbar />

      {/* 首頁圖片 */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${mainConfig.main_page_img})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="left" mx="auto">
            {/* 大標題 */}
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {mainConfig.app_name}
            </MKTypography>
            {/* 小標題 */}
            <MKTypography
              variant="body1"
              color="white"
              textAlign="left"
              px={{ xs: 6, lg: 8 }}
              mt={1}
            >
              {mainConfig.subtitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      {/* 主要內容 */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Courses />
        <Topics />
        <Faq />
        <Testimonials />
      </Card>

      {/* Footer */}
      <NeatFooter />
    </>
  );
}

export default Presentation;
