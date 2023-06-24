import DefaultNavbar from "components/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarTransparent() {
  return (
    <DefaultNavbar
      routes={routes}
      action={{
        type: "external",
        route: "https://www.creative-tim.com/product/material-kit-pro-react",
        label: "buy now",
        color: "info",
      }}
      transparent
      relative
      center
    />
  );
}

export default NavbarTransparent;`;

export default navbarTransparentCode;
