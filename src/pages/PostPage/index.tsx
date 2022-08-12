import styled from "@emotion/styled";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PostForm } from "./components";
import auth from "@/api/auth";

const Container = styled.div`
  margin: auto;
  width: fit-content;
  box-sizing: border-box;
  padding: 5rem;
`;

function PostPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkIsRegister = async () => {
      const { isRegistered } = await auth.checkAuth();
      if (!isRegistered)
        navigate("/register", { state: { from: location.pathname } });
    };
    checkIsRegister();
  }, []);
  return (
    <Container>
      <PostForm />
    </Container>
  );
}

export default PostPage;
