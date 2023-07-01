
// @mui material components
// import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

import DefaultFooter from "components/Footers/DefaultFooter";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

// Pricing page sections
import AboutUs from "pages/Company/Pricing/sections/AboutUs";
import Faq from "pages/Company/Pricing/sections/Faq";
import Header from "pages/Company/Pricing/sections/Header";
import LifetimeMembership from "pages/Company/Pricing/sections/LifetimeMembership";
import PricingSection from "pages/Company/Pricing/sections/Pricing";
import Testimonials from "pages/Company/Pricing/sections/Testimonials";
import Trust from "pages/Company/Pricing/sections/Trust";

// Routes
import footerRoutes from "footer.routes";
import routes from "routes";

function Pricing() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
        }}
        transparent
        light
      />
      <Header />
      <MKBox p={3}>
        <AboutUs />
        <PricingSection />
        <LifetimeMembership />
        <Testimonials />
        <Trust />
        <Faq />
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Pricing;
