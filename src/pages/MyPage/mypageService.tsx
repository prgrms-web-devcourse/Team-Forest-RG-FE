/* eslint-disable no-use-before-define */
export interface UserInfoType {
  privacyProfile: {
    phoneNumber: string;
    kakaoEmail: string;
  };
  ridingProfile: {
    nickname: string;
    profileImage: string;
    introduction: string;
    ridingStartYear: number;
    level: string;
    bicycles: string[];
  };
  manner: {
    mannerPoint: number;
    noShow: number;
    banned: null;
  };
  ridings: {
    scheduled: Riding[];
    finished: Riding[];
    leading: Riding[];
    canEvaluated: Riding[];
  };
}
export interface Riding {
  postId: number;
  leader: {
    id: number;
    nickname: string;
    profileImage: string;
  };
  riding: {
    title: string;
    thumbnail: string;
    ridingLevel: string;
    zone: {
      code: number;
      name: string;
    };
    fee: number;
    estimatedTime: string;
    createdAt: string;
    ridingDate: string;
    bicycleType: string[];
    ridingCourses: string[];
    maxParticipant: number;
    minParticipant: number;
    participants: [
      {
        id: number;
        nickname: string;
        profileImage: string;
      }
    ];
    departurePosition: {
      lat: number;
      lng: number;
    };
    details?: [
      {
        id: number;
        title: string;
        contents: string;
        images: [
          {
            id: number;
            imageUrl: string;
          }
        ];
      }
    ];
  };
}

export const userMockData: UserInfoType = {
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
            "data:image/jpeg;base64,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",
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
