
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";
import FeaturesTwo from "layouts/sections/page-sections/featuers/components/FeaturesTwo";
import FeaturesThree from "layouts/sections/page-sections/featuers/components/FeaturesThree";

// Features page components code
import featuresOneCode from "layouts/sections/page-sections/featuers/components/FeaturesOne/code";
import featuresTwoCode from "layouts/sections/page-sections/featuers/components/FeaturesTwo/code";
import featuresThreeCode from "layouts/sections/page-sections/featuers/components/FeaturesThree/code";

function Features() {
  return (
    <BaseLayout
      title="Features"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "Features" },
      ]}
    >
      <View title="Features 1" code={featuresOneCode}>
        <FeaturesOne />
      </View>
      <View title="Features 2" code={featuresTwoCode}>
        <FeaturesTwo />
      </View>
      <View title="Features 3" code={featuresThreeCode}>
        <FeaturesThree />
      </View>
    </BaseLayout>
  );
}

export default Features;
