// customTheme.js
import { extendTheme } from "@chakra-ui/react";

// Define your custom breakpoints
const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "98em", // ~1536px
  }

  
// Extend the theme with custom breakpoints
const customTheme = extendTheme({
  breakpoints,
  fonts: {
    heading: "Sora, sans-serif", // Use Sora for headings
    body: "Sora, sans-serif",    // Use Sora for body text
  },
  

});

export default customTheme;
