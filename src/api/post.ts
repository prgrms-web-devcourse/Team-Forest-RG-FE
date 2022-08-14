import * as T from "response";
import axiosInstance from "./axiosInstance";

const getPost = async (id: number): Promise<T.PostDetail> => {
  try {
    const res = await axiosInstance({
      method: "GET",
      url: `/api/v1/ridingposts/${id}`,
    });
    return res.data;
  } catch (error) {
    throw new Error("register Profile Failed");
  }
};

export default { getPost };
