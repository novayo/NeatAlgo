import SimplePricingCard from "components/Cards/PricingCards/SimplePricingCard";
import DefaultPricingCard from "components/Cards/PricingCards/DefaultPricingCard";
import MKTypography from "components/MKTypography";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Link } from "react-router-dom";
import { copyrightConfig, courseConfig, pricingConfig } from "config";
import NeatNavbar from "pages/Navbars";
import NeatFooter from "pages/Footers";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

function NeatPrice() {
  return (
    <>
      {/* Navbar */}
      <NeatNavbar />
      {/* 空白區域 */}
      <MKBox minHeight="20vh" width="100%"></MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={9}
            sx={{ mx: "auto" }}
            direction="column"
            alignItems="left"
            justify="left"
          >
            {/* 標題 */}
            <MKTypography variant="h3"> 選擇適合您的方案 </MKTypography>
            <Divider sx={{ md: 3 }} light={false} />
            <MKTypography variant="subtitle2">
              <DoneAllIcon />
              &nbsp; 不自動續訂
            </MKTypography>
            <MKTypography variant="subtitle2">
              <DoneAllIcon />
              &nbsp; 不限次數
            </MKTypography>
            <MKTypography variant="subtitle2">
              <DoneAllIcon />
              &nbsp; 不限時間
            </MKTypography>
            <MKTypography variant="subtitle2">
              <DoneAllIcon />
              &nbsp; 盡情觀賞所有課程，無廣告干擾
            </MKTypography>
            <MKTypography variant="button" fontWeight="bold" sx={{ mt: "1vh" }}>
              <ErrorOutlineOutlinedIcon />
              &nbsp; 享有7天內百分之百全額退費保障，逾期恕不接受退款申請。如需申請退款，請點選
              <Link to={copyrightConfig.terms_refund_url}>「這裡」</Link>
              以獲取退款步驟指引。
            </MKTypography>
          </Grid>
          <Divider sx={{ mt: 3, md: 3, bgcolor: "secondary.light" }} />
          <Grid container item xs={12} lg={9} sx={{ mx: "auto" }} spacing={2} alignItems="center">
            {/* 月繳 */}
            <Grid item xs={12} md={5}>
              <DefaultPricingCard
                badge={{ color: "light", label: "" }}
                price={{ currency: "NT$", value: "830", type: "月" }}
                action={{ type: "internal", route: "/", color: "dark", label: "立即訂閱" }}
                specifications={[
                  {
                    label: `
                  目前的月繳方案提供了所有年繳的使用權，是短期訂閱者的最佳選擇。`,
                    includes: true,
                  },
                ]}
              />
            </Grid>
            {/* 月繳 */}
            {/* 年繳 */}
            <Grid item xs={12} md={6}>
              <SimplePricingCard
                variant="gradient"
                color="dark"
                title="年繳"
                description="現在只需NT$500/月。相較於月繳方案，這個方案讓您節省超過60%的費用。"
                price={{ value: "NT$6000", type: "年" }}
                action={{ type: "internal", route: pricingConfig.pay_url, label: "立即訂閱" }}
                specifications={[
                  `可無限觀看 ${courseConfig.python.name}`,
                  `可無限觀看 ${courseConfig.algo_beginner.name}`,
                  `可無限觀看 ${courseConfig.algo_advanced.name}`,
                ]}
              />
            </Grid>
            {/* 年繳 */}
          </Grid>
        </Container>
      </Card>
      <NeatFooter />
    </>
  );
}

export default NeatPrice;
