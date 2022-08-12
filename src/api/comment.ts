import axiosInstance from "./axiosInstance";
import * as T from "response";

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

export const postComment = async (
  postId: number,
  contents: string,
  parentCommentId: number
) => {
  const res = await axiosInstance({
    method: "POST",
    url: `/api/v1/ridingposts/${postId}/comments`,
    data: {
      contents,
      parentCommentId,
    },
  });
  return res.data;
};

export const updateComment = async (
  commentId: number,
  postId: number,
  contents: string
) => {
  const res = await axiosInstance({
    method: "PUT",
    url: `/api/v1/ridingposts/${postId}/comments/${commentId}`,
    data: {
      contents,
    },
  });
  return res.data;
};

export const deleteComment = async (commentId: number, postId: number) => {
  const res = await axiosInstance({
    method: "DELETE",
    url: `/api/v1/ridingposts/${postId}/comments/${commentId}`,
  });
  return res.data;
};
