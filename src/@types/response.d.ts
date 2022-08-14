declare module "response" {
  interface User {
    id: number;
    nickname: string;
    profileImage: string;
  }
  interface Section {
    id: number;
    title: string;
    contents: string;
    images: {
      id: number;
      imageUrl: string;
    }[];
  }
  export interface PostDetail {
    leader: User;
    riding: {
      id: number;
      title: string;
      recruiting: boolean;
      thumbnail: string;
      thumbnailId: number | null;
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
      participants: User[];
      departurePosition: {
        lat: number;
        lng: number;
      };
      details: Section[];
    };
  }

  export interface Post {
    id: number;
    title: string;
    thumbnail: string;
    ridingLevel: string;
    zone: { code: number; name: string };
    fee?: number;
    estimatedTime: string;
    ridingDate: string;
    bicycles: string[];
    ridingCourses: string[];
    departurePosition: { lng: number; lat: number };
  }
  export interface UserInfo {
    privacyProfile: {
      phoneNumber: string;
      kakaoEmail: string | null;
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
      banned: null | string;
    };
    ridings: {
      scheduled: Post[];
      finished: Post[];
      leading: Post[];
      canEvaluated: Post[];
    };
  }
  module.exports = {
    PostDetail: response.PostDetail,
    UserInfo: response.UserInfo,
  };
}
