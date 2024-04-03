import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ZustandPage from "./zustand/pages/zustand.tsx";
import JotaiPage from "./jotai/pages/jotai.tsx";
import AspidaPage from "./aspida";
import ZodiosPage from "./zodios";
import AtomsDevtools from "./atom-dev-tools.tsx";
import { SWRConfig } from "swr";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "zustand",
    element: <ZustandPage />,
  },
  {
    path: "jotai",
    element: <JotaiPage />,
  },
  {
    path: "aspida",
    element: <AspidaPage />,
  },
  {
    path: "zodios",
    element: <ZodiosPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AtomsDevtools>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SWRConfig>
    </AtomsDevtools>
    ,
  </React.StrictMode>,
);
