import styled from "@emotion/styled";
import { PostForm } from "./components";
import { RidingFormValues } from "./components/postForm/PostForm";

const Container = styled.div`
  margin: auto;
  width: fit-content;
  box-sizing: border-box;
  padding: 5rem;
`;

function PostPage() {
  const handleSubmit = (data: RidingFormValues) => {
    console.log(data);
  };
  return (
    <Container>
      <PostForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default PostPage;
