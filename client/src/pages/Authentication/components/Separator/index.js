import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Separator() {
  const separatorStyles = {
    content: '""',
    display: "inline-block",
    width: "30%",
    height: "1px",
    position: "relative",
    verticalAlign: "middle",
  };

  return (
    <MKBox my={3} position="relative" textAlign="center">
      <MKTypography
        variant="button"
        fontWeight="bold"
        color="secondary"
        px={2}
        sx={{
          "&::before": {
            ...separatorStyles,
            right: "0.5em",
            marginLeft: "-50%",
            background: ({ functions: { rgba }, palette: { secondary } }) =>
              `linear-gradient(90deg, transparent, ${rgba(secondary.main, 0.4)}, ${rgba(
                secondary.main,
                0.4
              )})`,
          },
          "&::after": {
            ...separatorStyles,
            left: "0.5em",
            marginRight: "-50%",
            background: ({ functions: { rgba }, palette: { secondary } }) =>
              `linear-gradient(90deg, ${rgba(secondary.main, 0.4)}, ${rgba(
                secondary.main,
                0.4
              )}, transparent)`,
          },
        }}
      >
        or continue with
      </MKTypography>
    </MKBox>
  );
}

export default Separator;
