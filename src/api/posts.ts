import * as T from "response";
import { RidingFormValues } from "@/pages/PostPage/components/postForm/PostForm";
import axiosInstance from "./axiosInstance";

export const getPosts = async (postId: number): Promise<T.PostDetail> => {
  const response = await axiosInstance({
    method: "GET",
    url: `/api/v1/ridingposts/${postId}`,
  });
  return response.data;
};

export const postPosts = async (
  postData: RidingFormValues
): Promise<T.PostDetail> => {
  const response = await axiosInstance({
    method: "POST",
    url: "/api/v1/ridingposts/",
    data: postData,
  });
  return response.data;
};
