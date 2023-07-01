
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Modals page components
import NotificationModal from "layouts/sections/attention-catchers/modals/components/NotificationModal";
import SimpleModal from "layouts/sections/attention-catchers/modals/components/SimpleModal";

// Modals page components code
import notificationModalCode from "layouts/sections/attention-catchers/modals/components/NotificationModal/code";
import simpleModalCode from "layouts/sections/attention-catchers/modals/components/SimpleModal/code";

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/modals" },
        { label: "Modals" },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
      <View title="Notification modal" code={notificationModalCode}>
        <NotificationModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
