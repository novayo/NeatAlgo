import DefaultNavbar from "components/Navbars/DefaultNavbar";
import routes from "routes";
import { routesConfig } from "config";

function NeatNavbar({ sticky }) {
  let navitems = [];
  routes.forEach((dict) => {
    if ("isNavbar" in dict && dict["isNavbar"]) {
      navitems.push(dict);
    }
  });

  return (
    <>
      {/* Navbar */}
      <DefaultNavbar
        routes={navitems}
        action={{
          type: "internal",
          route: routesConfig.button_buy.route,
          label: routesConfig.button_buy.name,
          color: routesConfig.button_buy.color,
        }}
        sticky={sticky === undefined ? true : sticky}
      />
    </>
  );
}

export default NeatNavbar;
