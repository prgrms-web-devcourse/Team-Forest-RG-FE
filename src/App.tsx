import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout, {
  ListPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  PostPage,
  ProfilePage,
  RegisterPage,
} from "@/pages";
import AuthRoute from "@/routes/AuthRoute";
import RequireAuth from "@/routes/PrivateRoute";

function App() {
  console.log(process.env.REACT_APP_TOML_ENV_VAR);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AuthRoute />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/posts" element={<ListPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route element={<RequireAuth />}>
              <Route path="/post" element={<PostPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
