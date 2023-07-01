import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
import colors from "assets/theme/base/colors";

import linearGradient from "assets/theme/functions/linearGradient";
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

export default {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};
