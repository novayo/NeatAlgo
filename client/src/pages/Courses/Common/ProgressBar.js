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
            mt: "5%",
            ml: "5%",
            color: "rgb(173, 173, 201)",
          }}
        />
        <CircularProgress
          size="80%"
          variant="determinate"
          value={progress}
          thickness={2}
          sx={{
            mt: "5%",
            ml: "5%",
            color: "rgb(69, 64, 64)",
            position: "absolute",
          }}
        />
        <MKBox
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            ml: "auto",
            mr: "auto",
            textAlign: "center",
          }}
        >
          <MKTypography
            color="dark"
            fontSize="150%"
            fontWeight="bold"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              mt: "8%",
              ml: "2%",
            }}
          >
            {`${Math.round(progress)}%`}
          </MKTypography>
        </MKBox>
      </MKBox>
    </>
  );
}
