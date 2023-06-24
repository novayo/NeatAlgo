// @mui material components
import Icon from "@mui/material/Icon";
import ContactUs from "pages/Support/ContactUs";
import SignInCoverPage from "pages/Authentication/SignIn/Basic";

// config
import { courseConfig, routesConfig } from "config";

const routes = [
  {
    name: routesConfig.button_courses.name,
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: courseConfig.python.name,
        description: courseConfig.python.description,
        href: courseConfig.python.url,
      },
      {
        name: courseConfig.algo_beginner.name,
        description: courseConfig.algo_beginner.description,
        href: courseConfig.algo_beginner.url,
      },
      {
        name: courseConfig.algo_advanced.name,
        description: courseConfig.algo_advanced.description,
        href: courseConfig.algo_advanced.url,
      },
    ],
  },
  {
    name: routesConfig.button_contact_us.name,
    route: routesConfig.button_contact_us.route,
    component: <ContactUs />,
  },
  {
    name: routesConfig.button_login.name,
    route: routesConfig.button_login.route,
    component: <SignInCoverPage />,
  },
];

export default routes;
