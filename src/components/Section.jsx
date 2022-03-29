import { Grid } from "@chakra-ui/react";

const Section = (props) => {
  return <Grid {...sectionProps} {...props} />;
};

const sectionProps = {
  as: "section",
  display: "grid",
  templateColumns: "repeat(12, 1fr)",
  gap: "30px",
  pb: {
    base: "40px",
    lg: "60px",
  },
};

export default Section;
