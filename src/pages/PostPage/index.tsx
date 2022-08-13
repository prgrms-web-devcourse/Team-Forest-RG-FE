import styled from "@emotion/styled";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PostForm } from "./components";
import { RidingFormValues } from "./components/postForm/PostForm";
import { postPosts } from "@/api/posts";

const Container = styled.div`
  margin: auto;
  width: fit-content;
  box-sizing: border-box;
  padding: 5rem;
`;

function PostPage() {
  const navigate = useNavigate();
  const handleSubmit: SubmitHandler<RidingFormValues> = async (data) => {
    const postId = await postPosts(data);
    navigate(`/post/${postId}`, { replace: true });
  };
  return (
    <Container>
      <PostForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default PostPage;
