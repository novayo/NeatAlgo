import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MKTypography from "components/MKTypography";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { getFixedLengthString } from "helper";

function FinishedDot({ isEnd, selected, title }) {
  title = getFixedLengthString(selected ? 22 : 23, title);

  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            component="a"
            sx={{
              color: "rgb(220, 223, 225)",
              p: 1,
              my: 1,
            }}
          >
            <CheckOutlinedIcon color="action" />
          </TimelineDot>
          {/* 線 */}
          {!isEnd ? (
            <TimelineConnector
              sx={{
                bgcolor: "rgb(220, 223, 225)",
              }}
            />
          ) : null}
        </TimelineSeparator>
        <TimelineContent sx={{ py: 1.5 }}>
          <MKTypography
            variant="subtitle2"
            component="a"
            sx={{
              fontWeight: selected ? "bold" : "normal",
            }}
          >
            {title}
          </MKTypography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}

export default FinishedDot;
