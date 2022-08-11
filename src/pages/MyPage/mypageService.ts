interface userMockDataType {
  privacyProfile: {
    phoneNumber: string;
    kakaoEmail: string;
  };
  riderProfile: {
    nickname: string;
    profileImage: string;
    introduction: string;
    ridingStartYear: number;
    level: string;
    bicycles: string[];
  };
  manner: {
    mannerPoint: number;
    mannerLevel: string;
    noShow: number;
    banned: null;
  };
}
export const userMockData: userMockDataType = {
  privacyProfile: {
    phoneNumber: "01033147155",
    kakaoEmail: "kocon1351@naver.com",
  },
  riderProfile: {
    nickname: "outwater",
    profileImage:
      "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
    introduction:
      "자기소개입니다. 저는 라이딩을 사랑하는 라죽남 입니다. 로드 MTB 따릉이 가리지 않고, 자전거가 있는 모든 곳을 환영합니다. 같이 타고 즐겨보아요.",
    ridingStartYear: 2021,
    level: "입문자", // 입문자 , 숙련자, 전문가
    bicycles: ["로드", "따릉이", "MTB", "하이브리드", "픽시", "상관없음"],
  },
  manner: {
    mannerPoint: 100,
    mannerLevel: "?",
    noShow: 0,
    banned: null,
  },
};
