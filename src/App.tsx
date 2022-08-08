import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout, { MainPage, NotFoundPage } from "@/pages";
import LoginPage from "@/pages/LoginPage";
import PostPage from "@/pages/PostPage";
import AuthRoute from "@/routes/AuthRoute";
import RequireAuth from "@/routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/post" element={<PostPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
