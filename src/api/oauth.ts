import axios from "axios";

export const fetchKakaoToken = async (queryString: string) => {
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

export const fethchKakaoUser = async (accessToken: string) => {
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
