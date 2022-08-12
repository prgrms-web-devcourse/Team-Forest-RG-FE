import axiosInstance from "./axiosInstance";
import * as T from "response";

export const getPosts = async (postId: number): Promise<T.PostDetail> => {
  const response = await axiosInstance({
    method: "GET",
    url: `/api/v1/ridingposts/${postId}`,
  });
  return response.data;
};
