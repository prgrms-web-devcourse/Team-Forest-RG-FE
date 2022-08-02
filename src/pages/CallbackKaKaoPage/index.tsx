import { useState } from "react";
import querystring from "query-string";
import { fetchKakaoToken, fethchKakaoUser } from "@/api/oauth";

function CallbackKaKaoPage() {
  const [accessToken, setAccessToken] = useState("");
  const query = querystring.parse(window.location.search);
  // Todo: 로그인 페이지 진입 한 페이지 기억해두었다가, 로그인 후 redirect시 사용
  // const { state } = querystring.parseUrl(String(window.location)).query;

  const getKakaoToken = async () => {
    const queryData: any = {
      grant_type: "authorization_code",
      client_id: process.env.REST_API_KEY,
      redirect_uri: process.env.REDIRECT_URI,
      code: query.code,
    };
    const queryString = Object.keys(queryData)
      .map(
        (key: string) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryData[key])}`
      )
      .join("&");

    const token = await fetchKakaoToken(queryString);
    // Todo with Server: 서버로 토큰 전송
    if (token) {
      setAccessToken(token.access_token);
      console.log("kakaoToken: ", token);
    }
  };

  const getKakaoUser = async () => {
    const user = await fethchKakaoUser(accessToken);
    console.log("kakaoUser: ", user);
  };
  return (
    <>
      <div>CallbackKaKaoPage</div>
      <button type="button" onClick={getKakaoToken}>
        토큰 발급 하기
      </button>
      <div>
        <button type="button" onClick={getKakaoUser}>
          토큰 유효성 검사 확인
        </button>
      </div>
    </>
  );
}

export default CallbackKaKaoPage;
