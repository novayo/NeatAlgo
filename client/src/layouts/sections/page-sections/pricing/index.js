
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Pricing page components
import PricingOne from "layouts/sections/page-sections/pricing/components/PricingOne";
import PricingThree from "layouts/sections/page-sections/pricing/components/PricingThree";
import PricingTwo from "layouts/sections/page-sections/pricing/components/PricingTwo";

// Pricing page components code
import pricingOneCode from "layouts/sections/page-sections/pricing/components/PricingOne/code";
import pricingThreeCode from "layouts/sections/page-sections/pricing/components/PricingThree/code";
import pricingTwoCode from "layouts/sections/page-sections/pricing/components/PricingTwo/code";

function Pricing() {
  return (
    <BaseLayout
      title="Pricing"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/pricing" },
        { label: "Pricing" },
      ]}
    >
      <View title="Pricing 1" height="40rem" code={pricingOneCode}>
        <PricingOne />
      </View>
      <View title="Pricing 2" code={pricingTwoCode}>
        <MKBox bgColor="white">
          <PricingTwo />
        </MKBox>
      </View>
      <View title="Features 3" code={pricingThreeCode}>
        <MKBox bgColor="grey-200">
          <PricingThree />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Pricing;
