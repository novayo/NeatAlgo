import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import MKTypography from "components/MKTypography";
import { courseConfig } from "config";
import { raise } from "helper";
import NeatTimeLineItem from "pages/Courses/Common/NeatTimeLineItem";

function NeatTimeLine({ type, id }) {
  if (!(type in courseConfig)) {
    raise("Course type doesn't exist!");
  }

  let allCoursesList = courseConfig[type]["courses"];
  let courseComponents = [];
  allCoursesList.forEach((course_info_dict, index) => {
    courseComponents.push(
      <NeatTimeLineItem
        key={index}
        // TODO: check user's data
        finished={index === 2 ? true : false}
        isEnd={index === allCoursesList.length - 1}
        selected={id === course_info_dict["id"]}
        locked={course_info_dict["locked"]}
        title={`${index + 1} - ${course_info_dict["title"]}`}
        url={course_info_dict["url"]}
      />
    );
  });
  return (
    <>
      <MKTypography variant="h4" mb={1}>
        課程
      </MKTypography>
      <Timeline
        // Make item left align
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {courseComponents}
      </Timeline>
    </>
  );
}

export default NeatTimeLine;
