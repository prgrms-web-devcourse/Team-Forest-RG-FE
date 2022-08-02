import axios from "axios";
import axiosInstance from "./axiosInstance";

const fetchKakaoToken = async (queryString: string) => {
  try {
    const res = await axios.post(
      `https://kauth.kakao.com/oauth/token?${queryString}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error("fetchKakaoToken Failed");
  }
};

const fethchKakaoUser = async (accessToken: string) => {
  try {
    const res = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("fetchKakaoUser Failed");
  }
};

const logoutKaKao = async (accessToken: string) => {
  const data = await axios.post(
    "https://kapi.kakao.com/v1/user/logout",
    undefined,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};

const login = async (code: string) => {
  try {
    const queryData: any = {
      grant_type: "authorization_code",
      client_id: process.env.REST_API_KEY,
      redirect_uri: process.env.REDIRECT_URI,
      code,
    };
    const queryString = Object.keys(queryData)
      .map(
        (key: string) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryData[key])}`
      )
      .join("&");

    const data = await fetchKakaoToken(queryString);
    return { token: data.access_token, user: { id: "임시발급 userId" } };
    // Todo: server 합의 후 작성
    // const res = await axiosInstance({
    //   method: "POST",
    //   url: "/auth/login",
    //   data: code,
    // });
    // return res.data
  } catch (error) {
    throw new Error("login Failed");
  }
};

const logout = async () => {
  try {
    // Todo: server 합의 후 작성
    return { status: 200 };
  } catch (error) {
    throw new Error("logout Failed");
  }
};

const checkAuth = async (token: string) => {
  try {
    const user = await fethchKakaoUser(token);
    return { status: 200, user };
    // Todo: server 합의 후 작성
    // const res = await axiosInstance({
    //   method: "POST",
    //   url: "/auth/checkAuth",
    //   data: token,
    // });
    // return res.data
  } catch (error) {
    throw new Error("checkAuth By token Failed");
  }
};

export default {
  login,
  logout,
  checkAuth,
  fetchKakaoToken,
  fethchKakaoUser,
  logoutKaKao,
};
