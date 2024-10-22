import { createBrowserRouter, RouterProvider, Outlet, useLocation, useNavigate } from "react-router-dom";

import { Robot } from "./app/robot";
import { Variants } from "./app/variants";
import { Skills } from "./app/skills";
import { Ar } from "./app/ar";

import { GoldChef } from "./app/ar/gold-chef";
import { CopperRobot } from "./app/ar/copper-robot";
import { CyanViking } from "./app/ar/cyan-viking";

export const paths = [
  { path: "/", element: <Robot />, index: true },
  { path: "variants", element: <Variants /> },
  { path: "skills", element: <Skills /> },
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

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigateTo = (type: "next" | "prev") => {
    const index = pathname === "/" ? 0 : paths.findIndex((path) => `/${path.path}` === pathname);
    let nextPathIndex: number;

    if (type === "next") {
      nextPathIndex = index + 1 > paths.length ? paths.length : index + 1;
    } else {
      nextPathIndex = index - 1 < 0 ? 0 : index - 1;
    }

    const nextPath = paths[nextPathIndex]?.path;

    !!nextPath && navigate(nextPath);
  };

  return (
    <>
      <Outlet />
      <div className="navigation">
        <button type="button" onClick={() => navigateTo("prev")}>
          <svg height="24" width="24" viewBox="0 -960 960 960" fill="#4c4f5a">
            <title>Arrow</title>
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </button>
        <button type="button" onClick={() => navigateTo("next")}>
          <svg height="24" width="24" viewBox="0 -960 960 960" fill="#4c4f5a">
            <title>Arrow</title>
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}
