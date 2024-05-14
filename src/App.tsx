import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./app/components";
import { HackRobot } from "./app/routes/hack-robot";
import { Variants } from "./app/routes/variants";
import { Skills } from "./app/routes/skills";
import { Environment } from "./app/routes/environment";
import { Ar } from "./app/routes/ar";

import { GoldChef } from "./app/routes/ar/gold-chef";
import { CopperRobot } from "./app/routes/ar/copper-robot";
import { CyanViking } from "./app/routes/ar/cyan-viking";

import "./App.css";
import { Index } from "./app/routes";

export const paths = [
  { index: true, element: <Index />, path: "/" },
  { path: "hack-robot", element: <HackRobot /> },
  { path: "variants", element: <Variants /> },
  { path: "skills", element: <Skills /> },
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
