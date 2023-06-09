
// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultFooter from "components/Footers/DefaultFooter";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

// Rental page sections
import Contact from "pages/LandingPages/Rental/sections/Contact";
import Faq from "pages/LandingPages/Rental/sections/Faq";
import Places from "pages/LandingPages/Rental/sections/Places";
import Search from "pages/LandingPages/Rental/sections/Search";
import Testimonials from "pages/LandingPages/Rental/sections/Testimonials";

// Routes
import footerRoutes from "footer.routes";
import routes from "routes";

// Images
import bgImage from "assets/images/bg-rental.jpeg";

function Rental() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Book your next trip
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1}>
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "hidden",
        }}
      >
        <Search />
        <Places />
        <Testimonials />
        <Faq />
        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Rental;
