import axiosInstance from "./axiosInstance";

interface CommentDefault {
  commentId: number;
  parentCommentId: number;
  authorId: number;
  authorName: string;
  authorImageUrl: string;
  createdAt: string;
  contents: string;
}

interface AdditionalCommentProp {
  childComments?: CommentDefault[];
}

type commentType = CommentDefault & AdditionalCommentProp;

export const getComments = async (
  postId: number
): Promise<{ comments: commentType[] }> => {
  const res = await axiosInstance({
    method: "GET",
    url: `/api/v1/ridingposts/${postId}/comments`,
  });
  return res.data;
};
