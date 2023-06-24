
// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function AboutUsOption({ icon, content }) {
  return (
    <MKBox display="flex" alignItems="center" p={2}>
      <MKBox
        width="3rem"
        height="3rem"
        variant="gradient"
        bgColor="info"
        color="white"
        coloredShadow="info"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="xl"
      >
        <Icon fontSize="small">{icon}</Icon>
      </MKBox>
      <MKTypography variant="body2" color="text" pl={2}>
        {content}
      </MKTypography>
    </MKBox>
  );
}

// Typechecking props for the AboutUsOption
AboutUsOption.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default AboutUsOption;
