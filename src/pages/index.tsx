import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>NavBar</div>
      <Outlet />
    </div>
  );
}

export default Layout;

export { default as MainPage } from "./MainPage";
export { default as NotFoundPage } from "./NotFoundPage";
