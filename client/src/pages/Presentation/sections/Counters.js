
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import MKBox from "components/MKBox";

import DefaultCounterCard from "components/Cards/CounterCards/DefaultCounterCard";

import { counterConfig } from "config";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={counterConfig.counter1.count}
              suffix={counterConfig.counter1.suffix}
              title={counterConfig.counter1.name}
              description={counterConfig.counter1.description}
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={counterConfig.counter2.count}
              suffix={counterConfig.counter2.suffix}
              title={counterConfig.counter2.name}
              description={counterConfig.counter2.description}
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={counterConfig.counter3.count}
              suffix={counterConfig.counter3.suffix}
              title={counterConfig.counter3.name}
              description={counterConfig.counter3.description}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
