/* eslint-disable no-use-before-define */
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import SideNavigation from "./components/SideNavigation";
import {
  Container,
  SideNavigationSection,
  ContentSection,
} from "./index.style";

function MyPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (!id || id === "null") {
      navigate("/", { replace: true });
    }
  }, [id, navigate]);

  return (
    <Container>
      <SideNavigationSection>
        <SideNavigation />
      </SideNavigationSection>
      <ContentSection>
        <Outlet />
      </ContentSection>
    </Container>
  );
}

export default MyPage;

export { default as PrivacyModify } from "./components/Privacy";
export { default as ProfileModify } from "./components/Profile";
export { default as RatingTab } from "./components/RatingTab";
export { default as RidingTab } from "./components/RidingTab";
