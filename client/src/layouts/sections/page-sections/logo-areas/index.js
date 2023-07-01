
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import LogoAreaOne from "layouts/sections/page-sections/logo-areas/components/LogoAreaOne";
import LogoAreaThree from "layouts/sections/page-sections/logo-areas/components/LogoAreaThree";
import LogoAreaTwo from "layouts/sections/page-sections/logo-areas/components/LogoAreaTwo";

// Stats page components code
import logoAreaOneCode from "layouts/sections/page-sections/logo-areas/components/LogoAreaOne/code";
import logoAreaThreeCode from "layouts/sections/page-sections/logo-areas/components/LogoAreaThree/code";
import logoAreaTwoCode from "layouts/sections/page-sections/logo-areas/components/LogoAreaTwo/code";

function LogoAreas() {
  return (
    <BaseLayout
      title="Logo Areas"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/logo-areas" },
        { label: "Logo Areas" },
      ]}
    >
      <View title="Logo Area 1" code={logoAreaOneCode}>
        <LogoAreaOne />
      </View>
      <View title="Logo Area 2" code={logoAreaTwoCode}>
        <LogoAreaTwo />
      </View>
      <View title="Logo Area 3" code={logoAreaThreeCode}>
        <LogoAreaThree />
      </View>
    </BaseLayout>
  );
}

export default LogoAreas;
