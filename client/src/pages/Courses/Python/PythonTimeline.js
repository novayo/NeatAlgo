import Timeline from "@mui/lab/Timeline";
import UnfinishedDot from "pages/Courses/Common/UnfinishDot";
import FinishedDot from "pages/Courses/Common/FinishDot";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

function PythonTimeline() {
  return (
    <Timeline
      // Make item left align
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <UnfinishedDot selected={false} locked={false} title="Time Complexity & Space Complexity" />
      <UnfinishedDot selected={false} locked={true} title="Time Complexity & Space Complexity" />
      <FinishedDot selected={false} title="Time Complexity & Space Complexity" />
      <UnfinishedDot selected={false} locked={true} title="Time Complexity & Space Complexity" />
      <UnfinishedDot selected={false} locked={true} title="Time Complexity & Space Complexity" />
      <UnfinishedDot selected={false} locked={true} title="Time Complexity & Space Complexity" />
      <UnfinishedDot selected={false} locked={true} title="Time Complexity & Space Complexity" />
      <UnfinishedDot selected={false} locked={true} title="Time Complexity & Space Complexity" />
      <UnfinishedDot selected={false} locked={true} title="Time Complexity & Space Complexity" />
      <FinishedDot
        isEnd={true}
        selected={true}
        locked={true}
        title="Time Complexity & Space Complexity"
      />
    </Timeline>
  );
}

export default PythonTimeline;
