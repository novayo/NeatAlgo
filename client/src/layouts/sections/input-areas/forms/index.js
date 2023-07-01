
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Forms page components
import FormContext from "layouts/sections/input-areas/forms/components/FormContext";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

// Forms page components code
import formContextCode from "layouts/sections/input-areas/forms/components/FormContext/code";
import formSimpleCode from "layouts/sections/input-areas/forms/components/FormSimple/code";

function Forms() {
  return (
    <BaseLayout
      title="Forms"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/forms" },
        { label: "Forms" },
      ]}
    >
      <View title="Form Simple" code={formSimpleCode}>
        <FormSimple />
      </View>
      <View title="Form Context" code={formContextCode}>
        <FormContext />
      </View>
    </BaseLayout>
  );
}

export default Forms;
