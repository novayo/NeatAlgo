import CircularProgress from "@mui/material/CircularProgress";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

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
          border={1}
          sx={{
            width: "6rem",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            mx: "auto",
            mt: "7.8vh",
            mb: "5.5vh",
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
