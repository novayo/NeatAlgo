/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">使用者回饋</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          {/* TODO: 日期、 */}
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="黃婷琪"
              date="1 week ago"
              review="非常滿意這個平台！清晰易懂的教學內容和個人化學習路徑讓我輕鬆掌握演算法知識。強烈推薦！"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="鄭琮寶"
              date="1 week ago"
              review="這個平台提供了清晰易懂的教學內容，幫助我順利掌握演算法和資料結構的知識。我尤其喜歡他們提供的學習路徑，讓我能夠按照合理的步調進行學習，逐漸踏入軟體工程師的世界。無論是新手還是有一定基礎的學習者，這個平台都能夠滿足他們的需求。我也很喜歡他們不限次數觀看影片和課程的訂閱方式，讓我可以根據自己的進度自由學習。總體而言，這個平台給我帶來了很大的幫助，我強烈推薦給所有想學習演算法和資料結構的人。"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="NiNi"
              date="3 weeks ago"
              review="這個平台真是太棒了！他們的教學內容深入淺出，幫助我從零基礎起步，掌握了演算法和資料結構的核心概念。訂閱一年更是物超所值，我強烈推薦給所有想學習的人！"
              rating={5}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
