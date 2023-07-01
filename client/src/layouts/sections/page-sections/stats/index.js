
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import StatsOne from "layouts/sections/page-sections/stats/components/StatsOne";
import StatsThree from "layouts/sections/page-sections/stats/components/StatsThree";
import StatsTwo from "layouts/sections/page-sections/stats/components/StatsTwo";

// Stats page components code
import statsOneCode from "layouts/sections/page-sections/stats/components/StatsOne/code";
import statsThreeCode from "layouts/sections/page-sections/stats/components/StatsThree/code";
import statsTwoCode from "layouts/sections/page-sections/stats/components/StatsTwo/code";

function Stats() {
  return (
    <BaseLayout
      title="Stats"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/stats" },
        { label: "Stats" },
      ]}
    >
      <View title="Stats 1" code={statsOneCode}>
        <StatsOne />
      </View>
      <View title="Stats 2" code={statsTwoCode}>
        <StatsTwo />
      </View>
      <View title="Stats 3" code={statsThreeCode}>
        <StatsThree />
      </View>
    </BaseLayout>
  );
}

export default Stats;
