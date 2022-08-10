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
      url: "/users/register",
      data: registerData,
    });
    return res.data;
  } catch (error) {
    throw new Error("register Profile Failed");
  }
};

export default { register };
