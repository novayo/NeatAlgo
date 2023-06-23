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
import Counters from "pages/presentation/sections/Counters";
import Faq from "pages/presentation/sections/Questions";
import Information from "pages/presentation/sections/Information";
import Topics from "pages/presentation/sections/Topics";
import Testimonials from "pages/presentation/sections/Testimonials";
import Courses from "pages/presentation/sections/Courses";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "搶先體驗!",
          color: "info",
        }}
        sticky
      />

      {/* 這是人臉畫面的box */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(https://hackmd.io/_uploads/BJ7mz3INn.png)`, // 這是人臉png
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="left" mx="auto">
            {/* 這是大標題 */}
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
              白話算法
            </MKTypography>
            {/* 這是小標題 */}
            <MKTypography
              variant="body1"
              color="white"
              textAlign="left"
              px={{ xs: 6, lg: 8 }}
              mt={1}
            >
              用最易懂的方式帶你跨入演算法及資料結構的世界
              <br />
              適合新手、跨領域、學生、刷題者
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      {/* 人臉下面的box都是Card */}
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

      {/* 這是footer，在footer.routes.js定義 */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
