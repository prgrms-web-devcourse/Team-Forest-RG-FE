import { Outlet } from "react-router-dom";

function ListPage() {
  return (
    <div>
      <h1>ListPage</h1>
      <Outlet />
    </div>
  );
}

export default ListPage;
