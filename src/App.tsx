import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout, { MainPage, NotFoundPage } from "./pages";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
