/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { theme } from "./core/theme";
import { Router } from "./routes/index";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => root.unmount());
}
