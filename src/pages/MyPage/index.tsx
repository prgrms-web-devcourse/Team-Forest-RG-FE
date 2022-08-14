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

export { default as ProfileModify } from "./components/Profile";
export { default as EvaluateTab } from "./components/EvaluateTab";
export { default as UserEvaluate } from "./components/EvaluateTab/EvaluateForm";
export { default as RidingTab } from "./components/RidingTab";
