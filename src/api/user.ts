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

const evaluate = async (data: any) => {
  try {
    const res = await axiosInstance({
      method: "POST",
      url: "api/v1/user/evaluate",
      data,
    });
    return res.data;
  } catch (error) {
    throw new Error("Evaluate Failed");
  }
};
export default { register, getUserInfo, evaluate };
