/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/layout";

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [{ path: "/", lazy: () => import("./App") }],
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
