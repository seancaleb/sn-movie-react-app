import { Text } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";

const Detail = ({ title, value, component: Component }) => {
  let renderedValue;

  if (Component) {
    renderedValue = Component;
  } else if (!value || value.length === 0) {
    renderedValue = <Text {...valueTextProps}>Not specified</Text>;
  } else if (value instanceof Array) {
    renderedValue = value.map((item, index) => {
      return (
        <Text key={nanoid()} {...valueTextProps}>
          {item}
          {index === value.length - 1 ? "" : ", "}
        </Text>
      );
    });
  } else {
    renderedValue = <Text {...valueTextProps}>{value}</Text>;
  }

  return (
    <Text {...titleTextProps}>
      {title}: {renderedValue}
    </Text>
  );
};

export default Detail;

const titleTextProps = {
  fontSize: "14px",
  fontWeight: "medium",
};

const valueTextProps = {
  as: "span",
  fontSize: "14px",
  color: "whiteAlpha.800",
  fontWeight: "normal",
};
