
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import NavbarBlur from "layouts/sections/navigation/navbars/components/NavbarBlur";
import NavbarDark from "layouts/sections/navigation/navbars/components/NavbarDark";
import NavbarLight from "layouts/sections/navigation/navbars/components/NavbarLight";
import NavbarTransparent from "layouts/sections/navigation/navbars/components/NavbarTransparent";

// Stats page components code
import navbarBlurCode from "layouts/sections/navigation/navbars/components/NavbarBlur/code";
import navbarDarkCode from "layouts/sections/navigation/navbars/components/NavbarDark/code";
import navbarLightCode from "layouts/sections/navigation/navbars/components/NavbarLight/code";
import navbarTransparentCode from "layouts/sections/navigation/navbars/components/NavbarTransparent/code";

function Navbars() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <View title="Navbar dark" code={navbarDarkCode}>
        <MKBox py={6}>
          <NavbarDark />
        </MKBox>
      </View>
      <View title="Navbar light" code={navbarLightCode}>
        <MKBox py={6}>
          <NavbarLight />
        </MKBox>
      </View>
      <View title="Navbar transparent" code={navbarTransparentCode}>
        <MKBox py={6}>
          <NavbarTransparent />
        </MKBox>
      </View>
      <View title="Navbar blur" code={navbarBlurCode}>
        <MKBox py={6} variant="gradient" bgColor="dark">
          <NavbarBlur />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Navbars;
