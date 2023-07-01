
// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

import DefaultFooter from "components/Footers/DefaultFooter";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

// DesktopApp page sections
import Banner from "pages/Apps/DesktopApp/sections/Banner";
import Features from "pages/Apps/DesktopApp/sections/Features";
import Information from "pages/Apps/DesktopApp/sections/Information";
import Pricing from "pages/Apps/DesktopApp/sections/Pricing";
import Testimonials from "pages/Apps/DesktopApp/sections/Testimonials";

// Routes
import footerRoutes from "footer.routes";
import routes from "routes";

function DesktopApp() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
          color: "warning",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="50vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
              linearGradient(gradients.dark.main, gradients.dark.state),
          }}
        />
        <Banner />
        <Information />
        <Features />
        <Testimonials />
        <Pricing />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default DesktopApp;
