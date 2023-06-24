
// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Emails() {
  return (
    <Card>
      <MKBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <MKTypography variant="body2" color="text">
          Emails (21)
        </MKTypography>
        <Tooltip title="Check your emails" placement="top">
          <MKBox component="a" href="#">
            <MKTypography variant="body2" fontWeight="regular">
              Check
            </MKTypography>
          </MKBox>
        </Tooltip>
      </MKBox>
    </Card>
  );
}

export default Emails;
