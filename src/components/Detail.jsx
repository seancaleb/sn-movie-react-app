import { Link, Text } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { Link as RouteLink } from "react-router-dom";

const Detail = ({ title, value }) => {
  let renderedValue;

  if (!value || value.length === 0) {
    renderedValue = <Text {...valueTextProps}>Not specified</Text>;
  } else if (value instanceof Array) {
    if (title === "Casts") {
      renderedValue = value.map((item, index) => {
        return (
          <Link key={item.id} as={RouteLink} to={`/cast/${item.id}`} _focus={{ boxShadow: "none" }}>
            <Text {...castsProps}>
              {item.name}
              {index === value.length - 1 ? "" : ", "}
            </Text>
          </Link>
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
  as: "span",
  color: "whiteAlpha.800",
  fontWeight: "normal",
  _hover: {
    color: "brand.primary",
    cursor: "pointer",
    textDecor: "underline",
    textDecorationColor: "brand.primary",
  },
};
