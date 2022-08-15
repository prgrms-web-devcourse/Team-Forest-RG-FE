import axiosInstance from "./axiosInstance";

export const getNotifications = async (page: number = 0): Promise<any> => {
  const response = await axiosInstance({
    method: "GET",
    url: `/api/v1/notifications?page=${page}&size=6`,
  });
  return response.data;
};

export const readAllNotifications = async (): Promise<any> => {
  const response = await axiosInstance({
    method: "DELETE",
    url: `/api/v1/notifications`,
  });
  return response.data;
};
