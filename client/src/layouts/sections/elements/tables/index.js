
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Tables page components
import TableOne from "layouts/sections/elements/tables/components/TableOne";

// Tables page components code
import tableOneCode from "layouts/sections/elements/tables/components/TableOne/code";

function Tables() {
  return (
    <BaseLayout
      title="Tables"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/tables" },
        { label: "Tables" },
      ]}
    >
      <View title="Table One" code={tableOneCode}>
        <TableOne />
      </View>
    </BaseLayout>
  );
}

export default Tables;
