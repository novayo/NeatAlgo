import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import ProgressBar from "pages/Courses/Common/ProgressBar";
import Divider from "@mui/material/Divider";
import NeatTimeLine from "pages/Courses/Common/NeatTimeLine";

export default function LeftBox({ progress, type, id, finish_course, vip, is_mobile }) {
  return (
    <>
      <Grid item xs={12} md={3}>
        <MKBox
          height={!is_mobile ? "75vh" : "100%"}
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
    </>
  );
}
