
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";

// PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";
import headerThreeCode from "layouts/sections/page-sections/page-headers/components/HeaderThree/code";
import headerTwoCode from "layouts/sections/page-sections/page-headers/components/HeaderTwo/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Page Headers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "Page Headers" },
      ]}
    >
      <View title="Header 1" code={headerOneCode} height="40rem">
        <HeaderOne />
      </View>
      <View title="Header 2" code={headerTwoCode} height="40rem">
        <HeaderTwo />
      </View>
      <View title="Header 3" code={headerThreeCode} height="40rem">
        <HeaderThree />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
