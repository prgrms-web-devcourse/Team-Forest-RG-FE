import axiosInstance from "./axiosInstance";

const login = async (authorizationCode: string) => {
  try {
    const res = await axiosInstance({
      method: "POST",
      url: "/oauth/login",
      data: authorizationCode,
    });
    return res.data;
  } catch (error) {
    throw new Error("login Failed");
  }
};

//* accessToken을 보내면, 현재 토큰에 해당하는 User 정보를 보내준다.
const checkAuth = async () => {
  try {
    const res = await axiosInstance({
      method: "GET",
      url: "/user/me",
    });
    return res.data;
  } catch (error) {
    throw new Error("checkAuth By token Failed");
  }
};

export default {
  login,
  checkAuth,
};
