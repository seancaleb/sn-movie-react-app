import { Text } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";

const Detail = ({ title, value }) => {
  let renderedValue;

  if (!value || value.length === 0) {
    renderedValue = <Text {...valueTextProps}>Not specified</Text>;
  } else if (value instanceof Array) {
    if (title === "Casts") {
      renderedValue = value.map((item, index) => {
        return (
          <Text key={item.id} {...castsProps}>
            {item.name}
            {index === value.length - 1 ? "" : ", "}
          </Text>
        );
      });
    } else {
      renderedValue = value.map((item, index) => {
        return (
          <Text key={item.id || nanoid()} {...valueTextProps}>
            {item.name || item}
            {index === value.length - 1 ? "" : ", "}
          </Text>
        );
      });
    }
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

const castsProps = {
  color: "whiteAlpha.800",
  fontWeight: "normal",
  _hover: { color: "brand.primary", cursor: "pointer" },
  as: "span",
};
