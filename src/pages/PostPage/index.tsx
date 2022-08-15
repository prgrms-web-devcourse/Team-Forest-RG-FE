import styled from "@emotion/styled";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { PostForm } from "./components";
import { RidingFormValues } from "./components/postForm/PostForm";
import auth from "@/api/auth";
import { postPost } from "@/api/posts";

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
      const { registered } = await auth.checkAuth();
      if (!registered)
        navigate("/register", { state: { from: location.pathname } });
    };
    checkIsRegister();
  }, []);

  const handleSubmit: SubmitHandler<RidingFormValues> = async (data) => {
    const postId = await postPost(data);
    navigate(`/post/${postId}`, { replace: true });
  };
  return (
    <Container>
      <PostForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default PostPage;
