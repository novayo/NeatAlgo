import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// HelpCenter page components
import FaqCollapse from "pages/Support/HelpCenter/components/FaqCollapse";

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6} my={6}>
              <MKTypography variant="h2" align="center" fontWeight="bold" gutterBottom>
                常見問題
              </MKTypography>
              <MKBox mb={2}>
                {/* <MKTypography variant="body2" align="center" color="text">
                這裡是副標題
                </MKTypography> */}
              </MKBox>
            </Grid>
            <Grid item xs={12} md={10}>
              <FaqCollapse
                title="什麼是白話算法？"
                open={collapse === 1}
                onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
              >
                這個平台是一個教學網站，專門為新手、跨領域者和學生提供易懂的演算法和資料結構教學，同時提供豐富的LeetCode題目練習和解題思路分析，以培養學習者獨立思考和解決問題的能力。
              </FaqCollapse>
              <FaqCollapse
                title="訂閱需要多少錢？"
                open={collapse === 2}
                onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
              >
                訂閱一年：NT$500/月
                <br />
                訂閱一月：NT$830/月
              </FaqCollapse>
              <FaqCollapse
                title="訂閱後會限制影片或觀看次數嗎？"
                open={collapse === 3}
                onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
              >
                不會，訂閱後可以不限次觀看影片及課程。
              </FaqCollapse>
              <FaqCollapse
                title="課程間有什麼差異呢？"
                open={collapse === 4}
                onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
              >
                依照課程提供不同難度的主題:
                <br />
                1. python入門 - 不懂程式語言、想學習python者
                <br />
                2. AL&DS: Beginner - 不了解leetcode、不能穩定解出easy者
                <br />
                3. AL&DS: Advanced - 不能穩定解出medium者、想擴展刷題領域者
              </FaqCollapse>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Faq;
