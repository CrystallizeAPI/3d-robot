import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Arrow } from "./arrow";
import { paths } from "../../App";

export const Layout = () => {
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
          <Arrow />
        </button>
        <button type="button" onClick={() => navigateTo("next")}>
          <Arrow />
        </button>
      </div>
    </>
  );
};
