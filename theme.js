import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body, #root, main, #__next": {
        height: "100%",
        width: "100%",
      },
    },
  },
  colors: {
  },
  components: {
    Button: {
      baseStyle: {
        _focus: "",
      },
    },
  },
});