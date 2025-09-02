import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  colors: {
    sireethorn: virtualColor({
      name: "sireethorn",
      light: "violet",
      dark: "yellow",
    }),
  },
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);

