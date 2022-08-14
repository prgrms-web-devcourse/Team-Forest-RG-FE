import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import NavBar from "@/components/NavBar";

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

function Layout() {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}

export default Layout;

export { default as MainPage } from "./MainPage";
export { default as NotFoundPage } from "./NotFoundPage";
export { default as DetailPage } from "./DetailPage";
export { default as LoginPage } from "./LoginPage";
export { default as PostPage } from "./PostPage";
export { default as RegisterPage } from "./RegisterPage";
export { default as ListPage } from "./ListPage";
export { default as MyPage } from "./MyPage";
export { default as RidingListPage } from "./RidingListPage";
