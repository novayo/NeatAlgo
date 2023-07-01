// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import NeatFooter from "pages/Footers";
import NeatNavbar from "pages/Navbars";

import Icon from "@mui/material/Icon";
import MKButton from "components/MKButton";
import { useEffect, useState } from "react";

// Config
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import Divider from "@mui/material/Divider";
import { courseConfig, pricingConfig } from "config";
import { GET, LOG_DEBUG, POST } from "helper";
import NeatTimeLine from "pages/Courses/Common/NeatTimeLine";
import ProgressBar from "pages/Courses/Common/ProgressBar";
import VideoPlayer from "pages/Courses/VideoPlayer";

function Courses({ type, id, title, description, url, backgroundImage }) {
  const [finished, setFinished] = useState(false);
  const [pre_finish_time, setPreFinishTime] = useState(Date.now());
  const [data, setData] = useState(null);

  useEffect(() => {
    // 需要自己寫一個function來await
    (async () => {
      const data = await GET("/test/members");
      setData(data);
    })();
    POST("/test/post", { name: ["111", "345"] });
  }, []);

  useEffect(() => {
    if (data) {
      LOG_DEBUG(`backend data: ${data}`);
    }
  }, [data]);

  useEffect(() => {
    LOG_DEBUG(`checkbox: ${finished}`);
  }, [finished]);

  // Update the checkbox status at least 500ms
  const handleChecked = () => {
    const timeElapsed = Date.now() - pre_finish_time;
    if (timeElapsed > 500) {
      setFinished((finished) => !finished);
      setPreFinishTime(Date.now());
    }
  };

  return (
    <>
      {/* Navbar */}
      <NeatNavbar sticky={false} />

      {/* 首頁圖片 */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
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
            {/* 訂閱按鈕 */}
            <MKButton
              href={pricingConfig.url}
              variant="outlined"
              color="light"
              size="small"
              fullWidth
            >
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
                height="60vh"
                color="white"
                bgColor="white"
                variant="gradient"
                shadow="lg"
                opacity={1}
                p={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "scroll",
                }}
              >
                <ProgressBar progress={100} />
                <Divider sx={{ my: 3, bgcolor: "secondary.light" }} />
                <NeatTimeLine type={type} id={id} />
              </MKBox>
            </Grid>
            {/* Right Box */}
            <Grid item xs={12} md={9}>
              <MKBox
                minHeight="10vh"
                color="info"
                bgColor="white"
                variant="gradient"
                shadow="lg"
                opacity={1}
                display="flex"
                flexDirection="column"
                overflow="scroll"
              >
                <Grid container direction="column" justify="center" alignItems="stretch">
                  {/* Title */}
                  <Grid container item direction="row" justifyContent="left" sx={{ px: 2, pt: 2 }}>
                    <Grid item xs={1} md={0.5} justifyContent="center" alignItems="center">
                      {/* Check box */}
                      {finished ? (
                        <CheckBoxRoundedIcon
                          onClick={handleChecked}
                          color="success"
                          fontSize="large"
                          display="flex"
                        />
                      ) : (
                        <CheckBoxOutlinedIcon
                          onClick={handleChecked}
                          color="action"
                          fontSize="large"
                          display="flex"
                        />
                      )}
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <MKBox sx={{}}>
                        <MKTypography variant="h4" textAlign="left">
                          {title}
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  </Grid>
                  {/* Description */}
                  <Grid item>
                    <MKBox sx={{ px: 2 }}>
                      <MKTypography variant="body1" textAlign="left">
                        {description}
                      </MKTypography>
                    </MKBox>
                  </Grid>
                  {/* VideoPlayer */}
                  <Grid item>
                    <MKBox sx={{ px: 2 }}>
                      <VideoPlayer url={url} />
                    </MKBox>
                  </Grid>
                </Grid>
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

export default Courses;
