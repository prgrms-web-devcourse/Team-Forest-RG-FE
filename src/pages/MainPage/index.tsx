import { Grid, Stack, styled } from "@mui/material";
import { Navigation } from "swiper";
import mainCarouselData from "./constants/CarouselData";
import Carousel from "@/components/Carousel";
import { CarouselWrapper } from "./MainPage.style";
import RecommendList from "./components/RecommendList";

function MainPage() {
  const RidingByLebel = RidingListByLevel.content;
  // API CALL 3번
  // https://rg-server.p-e.kr/api/v1/ridingposts?bicycleCode=2
  // https://rg-server.p-e.kr/api/v1/ridingposts?ridingLevel=상
  //
  return (
    <Grid container direction="column">
      <Grid container item justifyContent="center">
        <Grid item xs={6}>
          <CarouselWrapper>
            <Carousel
              data={mainCarouselData}
              options={{
                navigation: true,
                modules: [Navigation],
              }}
            />
          </CarouselWrapper>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Stack direction="column" marginY="3rem">
          <RecommendList
            data={RidingByLebel}
            label="나의 실력에 맞는 라이딩 추천"
          />
          <RecommendList
            data={RidingByLebel}
            label="나의 실력에 맞는 라이딩 추천"
          />
          <RecommendList
            data={RidingByLebel}
            label="나의 실력에 맞는 라이딩 추천"
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default MainPage;

const RidingListByLevel = {
  content: [
    {
      leader: {
        id: 9,
        nickname: "Didi현정",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 1000,
        title: "Riding_1905309404",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1999,
        ridingLevel: "상",
        zone: {
          code: 21,
          name: "부산광역시 null",
        },
        fee: 0,
        estimatedTime: "1시간",
        createdAt: "2022-08-14T17:15:16",
        ridingDate: "2022-08-22T17:15:16",
        bicycleType: ["따릉이"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 4,
        minParticipant: 4,
        participants: [
          {
            id: 9,
            nickname: "Didi현정",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 1000,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 2000,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 9,
        nickname: "Didi현정",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 996,
        title: "Riding_1477363836",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1991,
        ridingLevel: "상",
        zone: {
          code: 36020,
          name: "전라남도 여수시",
        },
        fee: 10000,
        estimatedTime: "3시간",
        createdAt: "2022-08-14T17:15:16",
        ridingDate: "2022-08-30T17:15:16",
        bicycleType: ["따릉이"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 5,
        minParticipant: 5,
        participants: [
          {
            id: 9,
            nickname: "Didi현정",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 996,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1992,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 5,
        nickname: "Pray민재",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 994,
        title: "Riding_934549927",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1987,
        ridingLevel: "상",
        zone: {
          code: 21310,
          name: "부산광역시 기장군",
        },
        fee: 10000,
        estimatedTime: "4시간",
        createdAt: "2022-08-14T17:15:16",
        ridingDate: "2022-08-20T17:15:16",
        bicycleType: ["하이브리드"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 8,
        minParticipant: 6,
        participants: [
          {
            id: 5,
            nickname: "Pray민재",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 994,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1988,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 6,
        nickname: "Kant한빈",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 992,
        title: "Riding_1880361278",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1983,
        ridingLevel: "상",
        zone: {
          code: 31240,
          name: "경기도 화성시",
        },
        fee: 10000,
        estimatedTime: "3시간",
        createdAt: "2022-08-14T17:15:15",
        ridingDate: "2022-08-28T17:15:15",
        bicycleType: ["TSB"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 8,
        minParticipant: 5,
        participants: [
          {
            id: 6,
            nickname: "Kant한빈",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 992,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1984,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 9,
        nickname: "Didi현정",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 991,
        title: "Riding_1234784994",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1981,
        ridingLevel: "상",
        zone: {
          code: 26010,
          name: "울산광역시 중구",
        },
        fee: 0,
        estimatedTime: "3시간",
        createdAt: "2022-08-14T17:15:15",
        ridingDate: "2022-08-18T17:15:15",
        bicycleType: ["하이브리드"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 8,
        minParticipant: 6,
        participants: [
          {
            id: 9,
            nickname: "Didi현정",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 991,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1982,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 4,
        nickname: "Partey훈기",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 990,
        title: "Riding_774743993",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1979,
        ridingLevel: "상",
        zone: {
          code: 34370,
          name: "충청남도 예산군",
        },
        fee: 0,
        estimatedTime: "5시간",
        createdAt: "2022-08-14T17:15:15",
        ridingDate: "2022-08-26T17:15:15",
        bicycleType: ["따릉이"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 7,
        minParticipant: 5,
        participants: [
          {
            id: 4,
            nickname: "Partey훈기",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 990,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1980,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 3,
        nickname: "Matt승범",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 982,
        title: "Riding_2043413344",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1963,
        ridingLevel: "상",
        zone: {
          code: 21040,
          name: "부산광역시 영도구",
        },
        fee: 0,
        estimatedTime: "2시간",
        createdAt: "2022-08-14T17:15:15",
        ridingDate: "2022-09-01T17:15:15",
        bicycleType: ["따릉이"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 11,
        minParticipant: 7,
        participants: [
          {
            id: 3,
            nickname: "Matt승범",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 982,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1964,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 9,
        nickname: "Didi현정",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 980,
        title: "Riding_577192930",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1959,
        ridingLevel: "상",
        zone: {
          code: 37310,
          name: "경상북도 군위군",
        },
        fee: 10000,
        estimatedTime: "5시간",
        createdAt: "2022-08-14T17:15:15",
        ridingDate: "2022-08-31T17:15:14",
        bicycleType: ["따릉이"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 8,
        minParticipant: 4,
        participants: [
          {
            id: 9,
            nickname: "Didi현정",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 980,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1960,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 9,
        nickname: "Didi현정",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 976,
        title: "Riding_2126060535",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1951,
        ridingLevel: "상",
        zone: {
          code: 38030,
          name: "경상남도 진주시",
        },
        fee: 0,
        estimatedTime: "2시간",
        createdAt: "2022-08-14T17:15:14",
        ridingDate: "2022-08-24T17:15:14",
        bicycleType: ["상관없음"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 9,
        minParticipant: 6,
        participants: [
          {
            id: 9,
            nickname: "Didi현정",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 976,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1952,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
    {
      leader: {
        id: 6,
        nickname: "Kant한빈",
        profileImage:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
      },
      riding: {
        id: 975,
        title: "Riding_682882936",
        thumbnail:
          "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
        thumbnailId: 1949,
        ridingLevel: "상",
        zone: {
          code: 22040,
          name: "대구광역시 남구",
        },
        fee: 0,
        estimatedTime: "2시간",
        createdAt: "2022-08-14T17:15:14",
        ridingDate: "2022-08-27T17:15:14",
        bicycleType: ["로드"],
        ridingCourses: ["서울특별시", "경기도"],
        maxParticipant: 4,
        minParticipant: 3,
        participants: [
          {
            id: 6,
            nickname: "Kant한빈",
            profileImage:
              "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png",
          },
        ],
        departurePosition: null,
        details: [
          {
            id: 975,
            title: "sub-title",
            contents: "sub-content",
            images: [
              {
                id: 1950,
                imageUrl:
                  "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/09be3f01-f808-41a6-aadb-0cd63c57a7c6.png",
              },
            ],
          },
        ],
        recruiting: true,
      },
    },
  ],
  pageable: {
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  size: 10,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  last: false,
  first: true,
  numberOfElements: 10,
  empty: false,
};
