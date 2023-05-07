import Container from "@mui/material/Container";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import Grid from "@mui/material/Grid";

function Courses() {
  return (
    <>
      <Container>
        <Grid container spacing={3} sx={{ mt: 6 }}>
          {/* Grid size: 12 */}
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image="https://hackmd.io/_uploads/Bks1FerEh.png"
              title="Python 入門"
              description="新手需知道的刷題所有 python 基本知識。"
              action={{
                type: "internal",
                route: "/somewhere",
                color: "info",
                label: "了解更多",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image="https://hackmd.io/_uploads/Hyp1ClSV2.png"
              title="AL&DS: beginner"
              description="任何人輕鬆入門的演算法和資料結構。學員將依照合理的學習路徑，一步一步熟悉並解出Easy~Medium題目。"
              action={{
                type: "internal",
                route: "/somewhere",
                color: "info",
                label: "了解更多",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image="https://hackmd.io/_uploads/S13E0xB42.png"
              title="AL&DS: advanced"
              description="主題式學習不同種類的演算法和資料結構，讓你有能力解出9成Medium題目。"
              action={{
                type: "internal",
                route: "/somewhere",
                color: "info",
                label: "了解更多",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Courses;
