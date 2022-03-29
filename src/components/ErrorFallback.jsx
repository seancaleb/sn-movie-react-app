import { GridItem, Heading, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <GridItem {...flexWrapperProps}>
      <WarningTwoIcon {...iconProps} />
      <Heading {...headingProps}>Something went wrong.</Heading>
      <Text {...textProps}>{error.data.status_message}</Text>
    </GridItem>
  );
};

export default ErrorFallback;

const flexWrapperProps = {
  role: "alert",
  display: "flex",
  colSpan: 12,
  flexDir: "column",
  w: "100%",
  alignItems: "center",
  justifyContent: "center",
  py: "20px",
  gap: "5px",
};

const iconProps = {
  boxSize: "35px",
  color: "brand.primary",
};

const headingProps = {
  color: "#fff",
  bgGradient: "linear-gradient(to-br, brand.primary, brand.secondary)",
  bgClip: "text",
  fontSize: "24px",
};

const textProps = {
  color: "whiteAlpha.400",
  textAlign: "center",
};
