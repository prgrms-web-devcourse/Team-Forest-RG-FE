import axios from "axios";

const getDetailPage = async () => {
  const res = await axios.get("/data/data.json", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

interface CommentsProps {
  commentId: number;
  parentCommentId: number;
  authorId: number;
  authorName: string;
  authorImageUrl: string;
  contents: string;
  childComments?: CommentsProps[];
}

interface returnType {
  comments: CommentsProps[];
}

const getComments = async (): Promise<returnType> => {
  const res = await axios.get("/data/comment.json", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

export { getDetailPage, getComments };
