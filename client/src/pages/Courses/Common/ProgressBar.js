import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProgressBar({ progress }) {
  return (
    <>
      <MKTypography variant="h4">進度</MKTypography>
      <MKBox
        color="white"
        bgColor="white "
        variant="gradient"
        sx={{
          position: "relative",
          display: "inline-flex",
        }}
      >
        <CircularProgress
          size="80%"
          variant="determinate"
          value={100}
          thickness={2}
          sx={{
            mt: "2vh",
            ml: "1vh",
            color: "rgb(173, 173, 201)",
            position: "relative",
          }}
        />
        <CircularProgress
          size="80%"
          variant="determinate"
          value={progress}
          thickness={2}
          sx={{
            mt: "2vh",
            ml: "1vh",
            color: "rgb(69, 64, 64)",
            position: "absolute",
          }}
        />
        <MKBox
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MKTypography color="rgb(69, 64, 64)" fontSize="200%" fontWeight="bold">
            {`${Math.round(progress)}%`}
          </MKTypography>
        </MKBox>
      </MKBox>
    </>
  );
}
