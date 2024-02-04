/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Box, GlobalStyles } from "@mui/material";
import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";

/**
 * The main application layout.
 */
export function MainLayout(): JSX.Element {
  return (
    <Fragment>
      <GlobalStyles
        styles={{
          "#root": {
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto 1fr",
            height: "100dvh",
          },
        }}
      />

      <Box sx={{ gridArea: "1 / 2 / -1 / -1", pt: "60px" }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </Fragment>
  );
}
