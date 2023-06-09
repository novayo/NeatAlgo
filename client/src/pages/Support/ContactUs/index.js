import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import NeatNavbar from "pages/Navbars";
import NeatFooter from "pages/Footers";
import { contactUsConfig } from "config";
import Card from "@mui/material/Card";

function ContactUs() {
  return (
    <>
      <NeatNavbar />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={6} lg={6} xl={6}>
            <Card>
              {/* Blue section */}
              <MKBox
                variant="gradient"
                bgColor="info"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={2}
                mt={-3}
              >
                <MKTypography variant="h4" color="white">
                  {contactUsConfig.title}
                </MKTypography>
              </MKBox>
              <MKBox p={3}>
                <MKTypography variant="body2" color="text" mb={3}>
                  {contactUsConfig.subtitle}
                </MKTypography>
                <MKBox width="100%" component="form" method="post" autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label={contactUsConfig.username}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="email"
                        variant="standard"
                        label={contactUsConfig.email}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label={contactUsConfig.content_name}
                        placeholder={contactUsConfig.default_text}
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                    <MKButton type="submit" variant="gradient" color="info">
                      {contactUsConfig.submit_button}
                    </MKButton>
                  </Grid>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="0.5rem">
        <NeatFooter />
      </MKBox>
    </>
  );
}

export default ContactUs;
