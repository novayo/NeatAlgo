import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProgressBar({ progress }) {
  return (
    <>
      <MKTypography variant="h4">進度</MKTypography>
      <MKBox
        color="white"
        bgColor="white"
        variant="gradient"
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
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
            width: "6rem",
            position: "absolute",
            mt: "calc(16% - 2rem)",
            ml: "calc(50% - 3rem)",
          }}
        >
          <MKTypography
            color="dark"
            fontSize="2rem"
            fontWeight="bold"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {`${Math.round(progress)}%`}
          </MKTypography>
        </MKBox>
      </MKBox>
    </>
  );
}
