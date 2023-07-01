import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
import colors from "assets/theme/base/colors";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      borderRadius: borderRadius.md,
    },
  },
};
