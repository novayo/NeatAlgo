
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// ALerts page components
import AlertWithContent from "layouts/sections/attention-catchers/alerts/components/AlertWithContent";
import AlertsWithLinks from "layouts/sections/attention-catchers/alerts/components/AlertsWithLinks";
import DismissingAlert from "layouts/sections/attention-catchers/alerts/components/DismissingAlert";
import SimpleAlerts from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts";

// ALerts page components code
import alertWithContentCode from "layouts/sections/attention-catchers/alerts/components/AlertWithContent/code";
import alertsWithLinksCode from "layouts/sections/attention-catchers/alerts/components/AlertsWithLinks/code";
import dismissingAlertCode from "layouts/sections/attention-catchers/alerts/components/DismissingAlert/code";
import simpleAlertsCode from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts/code";

function Alerts() {
  return (
    <BaseLayout
      title="Alerts"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/alerts" },
        { label: "Alerts" },
      ]}
    >
      <View title="Simple alerts" code={simpleAlertsCode}>
        <SimpleAlerts />
      </View>
      <View title="Alerts with links" code={alertsWithLinksCode}>
        <AlertsWithLinks />
      </View>
      <View title="Alert with content" code={alertWithContentCode}>
        <AlertWithContent />
      </View>
      <View title="Dismissing alert" code={dismissingAlertCode}>
        <DismissingAlert />
      </View>
    </BaseLayout>
  );
}

export default Alerts;
