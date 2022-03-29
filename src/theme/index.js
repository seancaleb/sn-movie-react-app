import { extendTheme } from "@chakra-ui/react";
import { colors, fonts } from "./foundations";
import { Button, Text } from "./components";
import "../index.css";

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Text,
  },
});

export default theme;
