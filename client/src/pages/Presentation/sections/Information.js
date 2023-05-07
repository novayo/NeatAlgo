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

// Material Kit 2 PRO React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                icon="touch_app"
                title={
                  <>
                    什麼是
                    <br />
                    簡單算法
                  </>
                }
                description=""
              />
              <RotatingCardBack
                title="線上教學平台"
                description="易懂教學、完善題型，學習演算法資料結構、LeetCode的最佳選擇。 "
                action={{
                  type: "internal",
                  route: "/",
                  label: "立即訂閱",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="學習路徑"
                  description="通過學習路徑，學習者可以有計劃、有序地進行學習，從而快速掌握演算法和資料結構的知識，提升自己的競爭力。包括各個面向的演算法及資料結構（共50多個篇章）"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="新手面向的影片內容"
                  description="以簡潔易懂的方式呈現演算法和資料結構的基礎概念和常見題型。影片中除了講解理論知識外，還包含豐富的範例和實戰演練，讓學習者可以深入理解並熟練應用所學的知識。"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="code"
                  title="模板及題型"
                  description="透過模板，學習者可以更有效地理解解題思路和技巧。講解Leetcode題目，學習者可以更深入了解實際應用場景，並學習如何有效地解決Leetcode題目，提升面試及工作上的能力。"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="local_atm"
                  title="訂閱制"
                  description="訂閱計劃為期一年，學習者可以不限次數觀看所有影片和課程。透過這個訂閱計劃，學習者可以依自己的學習進度和需求，自由地使用平台上的所有學習資源。"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
