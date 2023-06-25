// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import NeatNavbar from "pages/Navbars";
import NeatFooter from "pages/Footers";

import TopBackground from "assets/images/office-dark.jpg";
import MKButton from "components/MKButton";
import Icon from "@mui/material/Icon";

// Config
import { courseConfig } from "config";
import PythonTimeline from "pages/Courses/Python/PythonTimeline";
import Divider from "@mui/material/Divider";
import ProgressBar from "pages/Courses/Common/ProgressBar";

function CoursePython() {
  return (
    <>
      {/* Navbar */}
      <NeatNavbar sticky={false} />

      {/* 首頁圖片 */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${TopBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            {/* 大標題 */}
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {courseConfig.python.name}
            </MKTypography>
            {/* 小標題 */}
            <MKTypography
              variant="body1"
              color="white"
              textAlign="left"
              px={{ xs: 6, lg: 8 }}
              mt={1}
            >
              {courseConfig.python.description}
            </MKTypography>
          </Grid>
          <Grid container item xs={6} lg={3} mt={5} justifyContent="center" mx="auto">
            <MKButton variant="outlined" color="light" size="small" fullWidth>
              立即訂閱&nbsp; <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      {/* 主要內容 */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: "rgba(220, 223, 225, 0.3)",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid
            container
            item
            sx={{ mx: "auto" }}
            my={10}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {/* Left Box */}
            <Grid item xs={12} md={3}>
              <MKBox
                height="85vh"
                color="white"
                bgColor="white"
                variant="gradient"
                shadow="lg"
                opacity={1}
                p={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  overflowY: "scroll",
                }}
              >
                <ProgressBar progress={100} />
                <Divider sx={{ my: 3, bgcolor: "secondary.light" }} />
                <PythonTimeline />
              </MKBox>
            </Grid>
            {/* Right Box */}
            <Grid item xs={12} md={9}>
              <MKBox
                minHeight="85vh"
                color="info"
                bgColor="white"
                variant="gradient"
                shadow="lg"
                opacity={1}
                p={2}
                display="flex"
                flexDirection="column"
                overflow="hidden"
                overflowY="scroll"
              >
                Box
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </Card>

      {/* Footer */}
      <NeatFooter />
    </>
  );
}

export default CoursePython;
