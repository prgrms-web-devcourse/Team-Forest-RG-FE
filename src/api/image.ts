import axiosInstance from "./axiosInstance";

export type Image = {
  id: number;
  originalFileName: string;
  url: string;
};

export const postImage = async (imageFile: FormData) => {
  try {
    const res = await axiosInstance({
      method: "POST",
      url: "/api/v1/images",
      data: imageFile,
    });
    return res.data as Image;
  } catch (error) {
    throw new Error("이미지 등록에 실패했습니다.");
  }
};

export const deleteImage = async (imageId: number) => {
  try {
    const res = await axiosInstance({
      method: "DELETE",
      url: `/api/v1/images/${imageId}`,
    });
    return res.data;
  } catch (error) {
    throw new Error("이미지 삭제에 실패했습니다.");
  }
};
export default { postImage, deleteImage };
