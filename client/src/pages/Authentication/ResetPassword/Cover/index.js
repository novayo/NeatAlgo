
// @mui material components
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

// Authentication layout components
import CoverLayout from "pages/Authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function Cover() {
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MKTypography>
          <MKTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MKTypography>
        </MKBox>
        <MKBox pt={4} pb={3} px={3}>
          <MKBox component="form" role="form">
            <MKBox mb={4}>
              <MKInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="john@email.com"
              />
            </MKBox>
            <MKBox mt={6} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth>
                reset
              </MKButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
