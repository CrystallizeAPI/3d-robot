import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./app/components";
import { HackRobot } from "./app/routes/hack-robot";
import { Variants } from "./app/routes/variants";
import { Profession } from "./app/routes/profession";
import { Environment } from "./app/routes/environment";
import { Ar } from "./app/routes/ar";

import { GoldChef } from "./app/routes/models/gold-chef";
import { CopperRobot } from "./app/routes/models/copper-robot";
import { CyanViking } from "./app/routes/models/cyan-viking";

import "./App.css";
import { Index } from "./app/routes";

export const paths = [
  { index: true, element: <Index />, path: "/" },
  { path: "hack-robot", element: <HackRobot /> },
  { path: "variants", element: <Variants /> },
  { path: "profession", element: <Profession /> },
  { path: "environment", element: <Environment /> },
  { path: "ar", element: <Ar /> },
  { path: "gold-chef", element: <GoldChef /> },
  { path: "copper-robot", element: <CopperRobot /> },
  { path: "cyan-viking", element: <CyanViking /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: paths,
  },
]);

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

export default App;
