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
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Faq from "pages/Presentation/sections/Questions";
import Information from "pages/Presentation/sections/Information";
import Topics from "pages/Presentation/sections/Topics";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Courses from "pages/Presentation/sections/Courses";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Config
import { mainConfig, routesConfig } from "config";

function Presentation() {
  return (
    <>
      {/* Navbar */}
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: routesConfig.button_buy.route,
          label: routesConfig.button_buy.name,
          color: routesConfig.button_buy.color,
        }}
        sticky
      />

      {/* 首頁圖片 */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(https://hackmd.io/_uploads/BJ7mz3INn.png)`,
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
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
