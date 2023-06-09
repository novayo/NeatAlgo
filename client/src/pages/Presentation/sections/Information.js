import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";
import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import { informationConfig } from "config";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                icon="touch_app"
                description={informationConfig.card.description}
                title={
                  <>
                    {informationConfig.card.title1}
                    <br />
                    {informationConfig.card.title2}
                  </>
                }
                image={informationConfig.rotate_card.image_front}
              />
              <RotatingCardBack
                title={informationConfig.rotate_card.title}
                description={informationConfig.rotate_card.description}
                action={{
                  type: "internal",
                  route: informationConfig.rotate_card.url,
                  label: informationConfig.rotate_card.button_name,
                }}
                image={informationConfig.rotate_card.image_back}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={informationConfig.pros_1.icon}
                  title={informationConfig.pros_1.name}
                  description={informationConfig.pros_1.description}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={informationConfig.pros_2.icon}
                  title={informationConfig.pros_2.name}
                  description={informationConfig.pros_2.description}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={informationConfig.pros_3.icon}
                  title={informationConfig.pros_3.name}
                  description={informationConfig.pros_3.description}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={informationConfig.pros_4.icon}
                  title={informationConfig.pros_4.name}
                  description={informationConfig.pros_4.description}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
