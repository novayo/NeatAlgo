// @mui material components
import Icon from "@mui/material/Icon";
import ContactUs from "pages/Support/ContactUs";
import SignInCoverPage from "pages/Authentication/SignIn/Basic";
import OnePagePDF from "pages/OnePagePDF";
import NeatPrice from "pages/Pricing";
import CoursePython from "pages/Courses/Python";
import terms_pdf from "assets/pdf/TERMS_OF_USE.pdf";
import privacy_pdf from "assets/pdf/PRIVACY_POLICY.pdf";

// config
import { courseConfig, routesConfig, copyrightConfig, pricingConfig } from "config";

const routes = [
  {
    name: routesConfig.button_courses.name,
    isNavbar: true,
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
    isNavbar: true,
  },
  {
    name: routesConfig.button_login.name,
    route: routesConfig.button_login.route,
    component: <SignInCoverPage />,
    isNavbar: true,
  },
  {
    name: "Terms Of Use",
    route: copyrightConfig.terms_url,
    component: <OnePagePDF title="Terms Of Use" pdf_file={terms_pdf} default_page={1} />,
  },
  {
    name: "Terms Of Use - Refund",
    route: copyrightConfig.terms_refund_url,
    component: (
      <OnePagePDF
        title="Terms Of Use"
        pdf_file={terms_pdf}
        default_page={copyrightConfig.terms_refund_page}
      />
    ),
  },
  {
    name: "Privacy Policy",
    route: copyrightConfig.privacy_url,
    component: <OnePagePDF title="Privacy Policy" pdf_file={privacy_pdf} default_page={1} />,
  },
  {
    name: "Pricing",
    route: pricingConfig.url,
    component: <NeatPrice />,
  },
  {
    name: "CoursePython",
    route: courseConfig.python.url,
    component: <CoursePython />,
  },
];

export default routes;
