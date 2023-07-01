
// @mui material components
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function SelectPicker() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Autocomplete
            defaultValue="Washington"
            options={["Brazil", "Bucharest", "London", "Washington"]}
            sx={{ width: 300 }}
            renderInput={(params) => <MKInput {...params} variant="standard" />}
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SelectPicker;
