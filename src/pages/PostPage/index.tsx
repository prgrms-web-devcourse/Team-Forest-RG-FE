import styled from "@emotion/styled";
import { PostForm } from "./components";

const Container = styled.div`
  margin: auto;
  width: fit-content;
  box-sizing: border-box;
  padding: 5rem;
`;

function PostPage() {
  return (
    <Container>
      <PostForm />
    </Container>
  );
}

export default PostPage;
