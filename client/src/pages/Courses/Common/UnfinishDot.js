import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MKTypography from "components/MKTypography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { getFixedLengthString } from "helper";

function UnfinishedDot({ isEnd, selected, locked, title }) {
  title = getFixedLengthString(selected ? 20 : 21, title);

  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          {/* 圓 */}
          <TimelineDot
            variant="outlined"
            component="a"
            sx={{
              color: "rgb(220, 223, 225)",
              p: locked ? 1 : 2.2,
              my: 1,
            }}
          >
            {/* 是否顯示中間icon */}
            {locked ? <LockOutlinedIcon /> : null}
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
        {/* 文字 */}
        <TimelineContent sx={{ py: 1.5 }}>
          <MKTypography
            variant="subtitle2"
            component="a"
            sx={{
              fontWeight: selected ? 900 : "normal",
            }}
          >
            {title}
          </MKTypography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}

export default UnfinishedDot;
