import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout, {
  LoginPage,
  MainPage,
  NotFoundPage,
  MyPage,
  RegisterPage,
  PostPage,
  RidingListPage,
} from "@/pages";
import AuthRoute from "@/routes/AuthRoute";
import RequireAuth from "@/routes/PrivateRoute";
import {
  RidingTab,
  ProfileModify,
  EvaluateTab,
  PrivacyModify,
  UserEvaluate,
} from "@/pages/MyPage";
import ProfilePage from "./pages/ProfilePage";
import RidingDetail from "./pages/RidingDetail";
import PostEditPage from "./pages/PostEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AuthRoute />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="posts" element={<RidingListPage />} />
            <Route path="/mypage" element={<MyPage />}>
              <Route index element={<RidingTab />} />
              <Route path="/mypage/riding" element={<RidingTab />} />
              <Route path="/mypage/evaluate" element={<EvaluateTab />} />
              <Route
                path="/mypage/evaluate/:postId"
                element={<UserEvaluate />}
              />
              <Route path="/mypage/profile" element={<ProfileModify />} />
              <Route path="/mypage/privacy" element={<PrivacyModify />} />
            </Route>
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route element={<RequireAuth />}>
              <Route path="/post/create" element={<PostPage />} />
              <Route path="/post/edit/:postId" element={<PostEditPage />} />
              <Route path="/post/:postId" element={<RidingDetail />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
