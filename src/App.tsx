import "./App.css";
import { HackRobot } from "./app/routes/hack-robot";
import { Variants } from "./app/routes/variants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/hack-robot", element: <HackRobot /> },
  { path: "/variants", element: <Variants /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
