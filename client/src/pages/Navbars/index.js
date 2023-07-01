import DefaultNavbar from "components/Navbars/DefaultNavbar";
import { routesConfig } from "config";
import routes from "routes";

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
