import { UserInfo } from "response";

interface TabPanelType {
  label: string;
  value: "scheduled" | "finished" | "leading" | "canEvaluated";
}
export interface TabDataType {
  value: "scheduled" | "finished" | "leading" | "canEvaluated";
  targetData: JSX.Element;
}
export const RIDING_TAB_PANELS: TabPanelType[] = [
  { label: "예정된 라이딩", value: "scheduled" },
  { label: "지난 라이딩", value: "finished" },
  { label: "내가 만든 라이딩", value: "leading" },
];

export const EVALUATED_TAB_PANELS: TabPanelType[] = [
  { label: "평가 가능 라이딩", value: "canEvaluated" },
];

export const DEFAULT_RIDING_TAB_ITEM_LIST: TabDataType[] =
  RIDING_TAB_PANELS.map(({ label, value }) => ({
    value,
    targetData: <div>{label}</div>,
  }));

export const DEFAULT_EVALUATED_TAB_ITEM_LIST: TabDataType[] =
  EVALUATED_TAB_PANELS.map(({ label, value }) => ({
    value,
    targetData: <div>{label}</div>,
  }));

export const userMockData: UserInfo = {
  privacyProfile: {
    phoneNumber: "01033147155",
    kakaoEmail: "kocon1351@naver.com",
  },
  ridingProfile: {
    nickname: "outwater",
    profileImage:
      "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
    introduction:
      "자기소개입니다. 저는 라이딩을 사랑하는 라죽남 입니다. 로드 MTB 따릉이 가리지 않고, 자전거가 있는 모든 곳을 환영합니다. 같이 타고 즐겨보아요.",
    ridingStartYear: 2021,
    level: "입문자", // 입문자(하) , 숙련자(중), 전문가(상)
    bicycles: ["로드", "따릉이", "MTB", "하이브리드", "픽시", "상관없음"],
  },
  manner: {
    mannerPoint: 100,
    noShow: 0,
    banned: null,
  },
  ridings: {
    scheduled: [
      {
        postId: 1,
        leader: {
          id: 1,
          nickname: "testUser",
          profileImage:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
        },
        riding: {
          title: "예정된 라이딩1",
          thumbnail:
            "https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_375/product_banner_1596507027193_337445",
          ridingLevel: "상",
          zone: {
            code: 11010,
            name: "경기도 성남시 분당구",
          },
          fee: 10000,
          estimatedTime: "120분",
          createdAt: "2022-08-17T17:42:37",
          ridingDate: "2022-08-19T17:42:37",
          bicycleType: ["MTB"],
          ridingCourses: ["중앙 공원", "능골 공원", "탑골 공원"],
          maxParticipant: 5,
          minParticipant: 2,
          participants: [
            {
              id: 1,
              nickname: "testUser",
              profileImage:
                "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 7,
              title: "sub title",
              contents: "sub contents",
              images: [
                {
                  id: 52,
                  imageUrl: "http://amazons3/static/image/testimage.jpg",
                },
              ],
            },
          ],
        },
      },
      {
        postId: 2,
        leader: {
          id: 1,
          nickname: "testUser",
          profileImage:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
        },
        riding: {
          title: "예정된 라이딩2",
          thumbnail:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
          ridingLevel: "상",
          zone: {
            code: 11010,
            name: "경기도성남시 분당구",
          },
          fee: 10000,
          estimatedTime: "120분",
          createdAt: "2022-08-17T17:42:37",
          ridingDate: "2022-08-19T17:42:37",
          bicycleType: ["MTB"],
          ridingCourses: ["중앙 공원", "능골 공원", "탑골 공원"],
          maxParticipant: 5,
          minParticipant: 2,
          participants: [
            {
              id: 1,
              nickname: "testUser",
              profileImage:
                "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 7,
              title: "sub title",
              contents: "sub contents",
              images: [
                {
                  id: 52,
                  imageUrl: "http://amazons3/static/image/testimage.jpg",
                },
              ],
            },
          ],
        },
      },
      {
        postId: 3,
        leader: {
          id: 1,
          nickname: "testUser",
          profileImage:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
        },
        riding: {
          title: "예정된 라이딩3",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfJjHkKSKxXea0cSihBn8_hBh2d9ZupO58Q&usqp=CAU",
          ridingLevel: "상",
          zone: {
            code: 11010,
            name: "경기도 성남시 분당구",
          },
          fee: 10000,
          estimatedTime: "120분",
          createdAt: "2022-08-17T17:42:37",
          ridingDate: "2022-08-19T17:42:37",
          bicycleType: ["MTB"],
          ridingCourses: ["중앙 공원", "능골 공원", "탑골 공원"],
          maxParticipant: 5,
          minParticipant: 2,
          participants: [
            {
              id: 1,
              nickname: "testUser",
              profileImage:
                "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 7,
              title: "sub title",
              contents: "sub contents",
              images: [
                {
                  id: 52,
                  imageUrl: "http://amazons3/static/image/testimage.jpg",
                },
              ],
            },
          ],
        },
      },
      {
        postId: 5,
        leader: {
          id: 1,
          nickname: "testUser",
          profileImage:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
        },
        riding: {
          title: "예정된 라이딩5",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEQjDW12F_B04Gu-AFNHkbESQYXnEUd2O6A&usqp=CAU",
          ridingLevel: "상",
          zone: {
            code: 11010,
            name: "경기도성남시 분당구",
          },
          fee: 10000,
          estimatedTime: "120분",
          createdAt: "2022-08-17T17:42:37",
          ridingDate: "2022-08-19T17:42:37",
          bicycleType: ["MTB"],
          ridingCourses: ["중앙 공원", "능골 공원", "탑골 공원"],
          maxParticipant: 5,
          minParticipant: 2,
          participants: [
            {
              id: 1,
              nickname: "testUser",
              profileImage:
                "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 7,
              title: "sub title",
              contents: "sub contents",
              images: [
                {
                  id: 52,
                  imageUrl: "http://amazons3/static/image/testimage.jpg",
                },
              ],
            },
          ],
        },
      },
    ],
    finished: [
      {
        postId: 6,
        leader: {
          id: 1,
          nickname: "testUser",
          profileImage:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
        },
        riding: {
          title: "완료된 라이딩6",
          thumbnail:
            "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          ridingLevel: "상",
          zone: {
            code: 11010,
            name: "경기도성남시 분당구",
          },
          fee: 10000,
          estimatedTime: "120분",
          createdAt: "2022-08-17T17:42:37",
          ridingDate: "2022-08-19T17:42:37",
          bicycleType: ["MTB"],
          ridingCourses: ["중앙 공원", "능골 공원", "탑골 공원"],
          maxParticipant: 5,
          minParticipant: 2,
          participants: [
            {
              id: 1,
              nickname: "testUser",
              profileImage:
                "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 7,
              title: "sub title",
              contents: "sub contents",
              images: [
                {
                  id: 52,
                  imageUrl: "http://amazons3/static/image/testimage.jpg",
                },
              ],
            },
          ],
        },
      },
    ],
    leading: [
      {
        postId: 7,
        leader: {
          id: 1,
          nickname: "testUser",
          profileImage:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
        },
        riding: {
          title: "내가만든 라이딩7",
          thumbnail:
            "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          ridingLevel: "상",
          zone: {
            code: 11010,
            name: "경기도성남시 분당구",
          },
          fee: 10000,
          estimatedTime: "120분",
          createdAt: "2022-08-17T17:42:37",
          ridingDate: "2022-08-19T17:42:37",
          bicycleType: ["MTB"],
          ridingCourses: ["중앙 공원", "능골 공원", "탑골 공원"],
          maxParticipant: 5,
          minParticipant: 2,
          participants: [
            {
              id: 1,
              nickname: "testUser",
              profileImage:
                "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 7,
              title: "sub title",
              contents: "sub contents",
              images: [
                {
                  id: 52,
                  imageUrl: "http://amazons3/static/image/testimage.jpg",
                },
              ],
            },
          ],
        },
      },
    ],
    canEvaluated: [
      {
        postId: 952,
        leader: {
          id: 3,
          nickname: "인수테스트",
          profileImage:
            "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        },
        riding: {
          title: "Riding_1604754150",
          thumbnail:
            "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          ridingLevel: "상",
          zone: {
            code: 31220,
            name: "경기도 안성시",
          },
          fee: 0,
          estimatedTime: "3시간",
          createdAt: "2022-08-13T11:44:52",
          ridingDate: "2022-09-01T11:44:52",
          bicycleType: ["TSB"],
          ridingCourses: ["서울특별시", "경기도"],
          maxParticipant: 7,
          minParticipant: 6,
          participants: [
            {
              id: 3,
              nickname: "인수테스트",
              profileImage:
                "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 952,
              title: "sub-title",
              contents: "sub-content",
              images: [
                {
                  id: 1904,
                  imageUrl:
                    "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
                },
              ],
            },
          ],
        },
      },

      {
        postId: 8,
        leader: {
          id: 1,
          nickname: "testUser",
          profileImage:
            "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
        },
        riding: {
          title: "평가가능 라이딩8",
          thumbnail:
            "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          ridingLevel: "상",
          zone: {
            code: 11010,
            name: "경기도성남시 분당구",
          },
          fee: 10000,
          estimatedTime: "120분",
          createdAt: "2022-08-17T17:42:37",
          ridingDate: "2022-08-19T17:42:37",
          bicycleType: ["MTB"],
          ridingCourses: ["중앙 공원", "능골 공원", "탑골 공원"],
          maxParticipant: 5,
          minParticipant: 2,
          participants: [
            {
              id: 1,
              nickname: "testUser",
              profileImage:
                "https://programmers.co.kr/assets/icons/apple-icon-6eafc2c4c58a21aef692d6e44ce99d41f999c71789f277317532d0a9c6db8976.png",
            },
          ],
          departurePosition: {
            lat: 35.2326,
            lng: 127.65025,
          },
          details: [
            {
              id: 7,
              title: "sub title",
              contents: "sub contents",
              images: [
                {
                  id: 52,
                  imageUrl: "http://amazons3/static/image/testimage.jpg",
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
