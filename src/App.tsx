import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HackRobot } from "./app/routes/hack-robot";
import { Variants } from "./app/routes/variants";
import { Profession } from "./app/routes/profession";
import { Layout } from "./app/components";

import "./App.css";

export const paths = [
  { path: "hack-robot", element: <HackRobot /> },
  { path: "variants", element: <Variants /> },
  { path: "profession", element: <Profession /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: paths,
  },
]);

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
