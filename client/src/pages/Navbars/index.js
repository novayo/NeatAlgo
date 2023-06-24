import DefaultNavbar from "components/Navbars/DefaultNavbar";
import routes from "routes";
import { routesConfig } from "config";

function NeatNavbar() {
  return (
    <>
      {/* Navbar */}
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: routesConfig.button_buy.route,
          label: routesConfig.button_buy.name,
          color: routesConfig.button_buy.color,
        }}
        sticky
      />
    </>
  );
}

export default NeatNavbar;
