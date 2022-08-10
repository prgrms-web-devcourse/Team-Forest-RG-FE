import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;

export { default as MainPage } from "./MainPage";
export { default as NotFoundPage } from "./NotFoundPage";
