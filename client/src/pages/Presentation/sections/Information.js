/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Python入門
                    <br />
                  </>
                }
                description="新手需知道的所有 python 基本知識。"
              />
              <RotatingCardBack
                image={bgBack}
                title="Python入門"
                description="*對象(初學者) *先備知識(無) *將會學習到寫Leetcode所需python知識"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "了解更多",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    AL&DS: beginner
                    <br />
                  </>
                }
                description="任何人輕鬆入門的演算法和資料結構。學員將依照合理的學習路徑，一步一步熟悉並解出Easy~Medium題目。"
              />
              <RotatingCardBack
                image={bgBack}
                title="AL&DS: beginner"
                description="*對象(X) *先備知識(X) *X"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "了解更多",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    AL&DS: advanced
                    <br />
                  </>
                }
                description="主題式學習不同種類的演算法和資料結構，讓你有能力解出9成Medium題目。"
              />
              <RotatingCardBack
                image={bgBack}
                title="AL&DS: advanced"
                description="*對象(X) *先備知識(X) *X"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "了解更多",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
