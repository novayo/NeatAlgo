
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Pricing page components
import TestimonialsOne from "layouts/sections/page-sections/testimonials/components/TestimonialsOne";
import TestimonialsThree from "layouts/sections/page-sections/testimonials/components/TestimonialsThree";
import TestimonialsTwo from "layouts/sections/page-sections/testimonials/components/TestimonialsTwo";

// Pricing page components code
import testimonialOneCode from "layouts/sections/page-sections/testimonials/components/TestimonialsOne/code";
import testimonialThreeCode from "layouts/sections/page-sections/testimonials/components/TestimonialsThree/code";
import testimonialTwoCode from "layouts/sections/page-sections/testimonials/components/TestimonialsTwo/code";

function Testimonials() {
  return (
    <BaseLayout
      title="Testimonials"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/testimonials" },
        { label: "Testimonials" },
      ]}
    >
      <View title="Testimonials 1" height="40rem" code={testimonialOneCode}>
        <TestimonialsOne />
      </View>
      <View title="Testimonials 2" code={testimonialTwoCode}>
        <MKBox bgColor="white">
          <TestimonialsTwo />
        </MKBox>
      </View>
      <View title="Testimonials 3" code={testimonialThreeCode}>
        <MKBox bgColor="white">
          <TestimonialsThree />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Testimonials;
