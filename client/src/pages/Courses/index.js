// @mui material components
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { courseConfig, pricingConfig } from "config";
import { ENV, GET } from "helper";
import NeatTimeLine from "pages/Courses/Common/NeatTimeLine";
import ProgressBar from "pages/Courses/Common/ProgressBar";
import VideoPlayer from "pages/Courses/VideoPlayer";
import NeatFooter from "pages/Footers";
import NeatNavbar from "pages/Navbars";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Courses({ type, id, locked, title, description, url, backgroundImage }) {
  const [courseLength, setCourseLength] = useState(0);
  const [progress, setProgressNumber] = useState(0);
  const [finished, setFinished] = useState(false);
  const [pre_finish_time, setPreFinishTime] = useState(Date.now());

  // user info
  const [vip, setVIP] = useState(null);
  const [finish_course, setFinishCourse] = useState([]);

  useEffect(() => {
    const course_len = ENV()["course_settings"]["python"].length;
    setCourseLength(course_len);

    (async () => {
      // Query user_info.
      // TODO: if not login, should not query
      // TODO: add jwt
      let user_info = await GET(`/course/user`, { username: "Eric" });

      // Update vip
      setVIP(user_info["vip"] || false);

      // Update finish_course
      let finish_course = user_info["finish_course"] || [];
      for (let i = finish_course.length; i < course_len; i++) {
        finish_course.push(false);
      }
      setFinishCourse(finish_course);

      // Update checkbox
      setFinished(finish_course[id - 1]);
    })();
  }, []);

  // Handle user_info change
  useEffect(() => {
    if (finish_course) {
      // Update progress number
      setProgressNumber(Math.round((finish_course.filter(Boolean).length / courseLength) * 100));
    }
  }, [vip, finish_course]);

  // Handle finish course. To Backend.
  useEffect(() => {
    let newArr = [...finish_course];
    newArr[id - 1] = finished;
    setFinishCourse(newArr);

    // TODO: update backend
  }, [finished]);

  // Update the checkbox status at least 500ms
  const handleChecked = () => {
    const timeElapsed = Date.now() - pre_finish_time;
    if (timeElapsed > 500) {
      setFinished((finished) => !finished);
      setPreFinishTime(Date.now());
    }
  };

  // Avoid not getting needed variables
  if (vip === undefined) {
    return null;
  }

  // Need to be vip if course locked
  if (locked && vip === false) {
    return <Navigate to={pricingConfig.url} />;
  }

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
                <ProgressBar progress={progress} />
                <Divider sx={{ my: 3, bgcolor: "secondary.light" }} />
                <NeatTimeLine type={type} id={id} finish_course={finish_course} vip={vip} />
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
