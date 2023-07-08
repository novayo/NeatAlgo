// @mui material components
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { courseConfig, pricingConfig } from "config";
import { ENV, GET } from "helper";
import VideoPlayer from "pages/Courses/VideoPlayer";
import NeatFooter from "pages/Footers";
import NeatNavbar from "pages/Navbars";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { contactUsConfig } from "config";
import breakpoints from "assets/theme/base/breakpoints";
import Drawer from "@mui/material/Drawer";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LeftBox from "pages/Courses/LeftBox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";

function Courses({ type, id, locked, title, description, url, backgroundImage }) {
  const [courseLength, setCourseLength] = useState(0);
  const [progress, setProgressNumber] = useState(0);
  const [finished, setFinished] = useState(false);
  const [pre_finish_time, setPreFinishTime] = useState(Date.now());

  // user info
  const [vip, setVIP] = useState(null);
  const [finish_course, setFinishCourse] = useState([]);

  // RWD
  const [is_mobile, setIsMobile] = useState(false);
  const [openHamburger, setHamburgerOpen] = useState(false);

  useEffect(() => {
    const course_len = ENV()["course_settings"][type].length;
    setCourseLength(course_len);

    // Query user_info.
    (async () => {
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

    // Handle Moble view
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    /** 
     The event listener that calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
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

  // Route to feedback page
  const handleFeedbackClicked = () => {
    window.location.replace(contactUsConfig.url);
  };

  const handleNavToNext = () => {
    if (id === courseLength) {
      window.location.replace(ENV()["course_settings"][type][0]["url"]);
    } else {
      window.location.replace(ENV()["course_settings"][type][id]["url"]);
    }
  };

  const handleNavToPrev = () => {
    if (id === 1) {
      window.location.replace(ENV()["course_settings"][type][courseLength - 1]["url"]);
    } else {
      window.location.replace(ENV()["course_settings"][type][id - 2]["url"]);
    }
  };

  // Handle Hamburger icon click
  const handleHamburgerClicked = () => {
    if (!is_mobile) {
      setHamburgerOpen(false);
      return;
    }
    if (openHamburger === false) {
      setHamburgerOpen(true);
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
              {courseConfig[type].name}
            </MKTypography>
            {/* 小標題 */}
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 8 }}
              mt={1}
            >
              {courseConfig[type].description}
            </MKTypography>
          </Grid>
          <Grid container item xs={6} lg={3} mt={5} justifyContent="center" mx="auto">
            {/* 訂閱按鈕 */}
            <MKButton
              component="a"
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
      {/* If is mobile, show whole page hamburger */}
      {is_mobile ? (
        <>
          <Drawer
            anchor="right"
            variant="temporary"
            open={openHamburger}
            ModalProps={{ onBackdropClick: () => setHamburgerOpen(false) }}
          >
            {/* Hamburger closed button */}
            <ChevronRightIcon fontSize="large" onClick={() => setHamburgerOpen(false)} />
            <Divider />
            <LeftBox
              progress={progress}
              type={type}
              id={id}
              finish_course={finish_course}
              vip={vip}
              is_mobile={is_mobile}
            />
          </Drawer>
        </>
      ) : null}
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
            {/* Left Box. If is mobile, show Menu button instead */}
            {!is_mobile ? (
              <LeftBox
                progress={progress}
                type={type}
                id={id}
                finish_course={finish_course}
                vip={vip}
                is_mobile={is_mobile}
              />
            ) : (
              // Menu button
              <MKBox width="100%" justifyContent="end" display="flex" sx={{ px: 2 }}>
                <MenuOutlinedIcon fontSize="medium" onClick={handleHamburgerClicked} />
              </MKBox>
            )}
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
                      <MKBox sx={{ ml: "0.8vw" }}>
                        <MKTypography variant="h4" textAlign="left">
                          {title}
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    {/* Empty Area */}
                    <Grid item xs={4}></Grid>
                    {/* Feedback icon */}
                    <Grid item xs={1} md={1.5} justifyContent="end" display="flex">
                      <RateReviewIcon
                        fontSize={!is_mobile ? "large" : "medium"}
                        color="action"
                        onClick={handleFeedbackClicked}
                        sx={{
                          "&:hover": {
                            color: "success.main",
                            transitionDuration: "800ms",
                          },
                        }}
                      />
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
                  {/* Page Navigater */}
                  <Grid container item direction="row" justifyContent="center" sx={{ p: 1 }}>
                    <Grid item xs={1} justifyContent="center" display="flex">
                      <ArrowCircleLeftOutlinedIcon
                        fontSize="large"
                        color="secondary"
                        onClick={handleNavToPrev}
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                            transitionDuration: "800ms",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={1} justifyContent="center" display="flex">
                      <ArrowCircleRightOutlinedIcon
                        fontSize="large"
                        color="secondary"
                        onClick={handleNavToNext}
                        sx={{
                          "&:hover": {
                            color: "success.main",
                          },
                        }}
                      />
                    </Grid>
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
