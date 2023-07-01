import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import MKTypography from "components/MKTypography";
import { getFixedLengthString } from "helper";
import { pricingConfig } from "config";

function NeatTimeLineItem({ finished, isEnd, selected, locked, title, url }) {
  title = getFixedLengthString(selected ? 20 : 21, title);

  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant={`${finished ? "filled" : "outlined"}`}
            sx={{
              color: "rgb(220, 223, 225)",
              p: !locked && !finished ? 2.2 : 1,
              my: 1,
            }}
          >
            {/* 如果沒完成，顯示鎖 */}
            {!finished && locked ? <LockOutlinedIcon /> : null}
            {/* 如果完成，顯示打勾 */}
            {finished ? <CheckOutlinedIcon color="action" /> : null}
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
        <TimelineContent sx={{ py: 2 }}>
          <MKTypography
            variant="subtitle2"
            component="a"
            href={!locked ? url : pricingConfig.url}
            sx={({ palette: { info } }) => ({
              display: "flex",
              fontWeight: selected ? 900 : "normal",
              "&:hover": {
                color: info.main,
                transform: `translateX(3px)`,
                transitionDuration: "800ms",
              },
              "&:not(:hover)": {
                transform: `translateX(-3px)`,
                transitionDuration: "800ms",
              },
            })}
          >
            {title}
          </MKTypography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}

export default NeatTimeLineItem;
