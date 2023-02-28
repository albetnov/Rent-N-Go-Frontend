import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import colors from "./utils/colors";
import "@fontsource/poppins";1

const theme = extendTheme({
  colors: { ...colors },
  fonts: {
    body: `'Poppins'`,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </React.StrictMode>
);
