import Container from "@mui/material/Container";
import CenteredBlogCard from "components/Cards/BlogCards/CenteredBlogCard";
import Grid from "@mui/material/Grid";

import { courseConfig, navConfig } from "config";

function Courses() {
  return (
    <>
      <Container>
        <Grid container spacing={3} sx={{ mt: 6 }}>
          {/* Grid size: 12 */}
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image={courseConfig.python.image}
              title={courseConfig.python.name}
              description={courseConfig.python.description}
              action={{
                type: navConfig.courses_button.type,
                route: courseConfig.python.courses[0].url,
                color: navConfig.courses_button.color,
                label: navConfig.courses_button.label,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image={courseConfig.algo_beginner.image}
              title={courseConfig.algo_beginner.name}
              description={courseConfig.algo_beginner.description}
              action={{
                type: navConfig.courses_button.type,
                route: courseConfig.algo_beginner.url,
                color: navConfig.courses_button.color,
                label: navConfig.courses_button.label,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image={courseConfig.algo_advanced.image}
              title={courseConfig.algo_advanced.name}
              description={courseConfig.algo_advanced.description}
              action={{
                type: navConfig.courses_button.type,
                route: courseConfig.algo_advanced.url,
                color: navConfig.courses_button.color,
                label: navConfig.courses_button.label,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Courses;
