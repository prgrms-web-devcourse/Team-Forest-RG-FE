/* eslint-disable no-use-before-define */
import { Outlet, useParams } from "react-router-dom";
import SideNavigation from "./components/SideNavigation";
import {
  Container,
  SideNavigationSection,
  ContentSection,
} from "./index.style";

function MyPage() {
  const { id } = useParams();

  return (
    <Container>
      <SideNavigationSection>
        <SideNavigation userId={id} />
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
