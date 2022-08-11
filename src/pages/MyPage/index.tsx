/* eslint-disable no-use-before-define */
import { Outlet } from "react-router-dom";
import SideNavigation from "./components/SideNavigation";
import {
  Container,
  SideNavigationSection,
  ContentSection,
} from "./index.style";

function MyPage() {
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
