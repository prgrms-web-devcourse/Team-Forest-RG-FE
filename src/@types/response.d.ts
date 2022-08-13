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
      participants: User[];
      departurePosition: {
        lat: number;
        lng: number;
      };
      details: Section[];
    };
  }
}

module.exports = {
  PostDetail: response.PostDetail,
};
