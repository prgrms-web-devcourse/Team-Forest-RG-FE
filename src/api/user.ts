import axiosInstance from "./axiosInstance";

export interface RegisterData {
  nickname: string;
  phoneNumber: string;
  ridingStartYear?: number;
  favoriteRegionCode?: number;
  level: string;
  bicycles: string[];
}
const register = async (registerData: RegisterData) => {
  try {
    const res = await axiosInstance({
      method: "POST",
      url: "/api/v1/users/register",
      data: registerData,
    });
    return res.data;
  } catch (error) {
    throw new Error("register Profile Failed");
  }
};

const getUserInfo = async (id: number) => {
  try {
    const res = await axiosInstance({
      method: "GET",
      url: `api/v1/users/${id}`,
    });
    return res.data;
  } catch (error) {
    throw new Error("getUserInfo Failed");
  }
};
export default { register, getUserInfo };
