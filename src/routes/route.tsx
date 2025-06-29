import WebLayout from "@/layout/WebLayout";
import Documentation from "@/views/documentation/Documentation";
import Home from "@/views/home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: WebLayout,
        children: [
          { index: true, Component: Home },
          { path: "documentation", Component: Documentation },
        ],
      },
  ]);

  export {router}