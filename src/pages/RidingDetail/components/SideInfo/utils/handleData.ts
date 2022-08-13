import { SideInfoProps } from "../SideInfo";

export const keyToLabel = (key: keyof SideInfoProps["data"]): string => {
  switch (key) {
    case "ridingLevel":
      return "라이딩 난이도";
    case "zone":
      return "지역";
    case "fee":
      return "요금";
    case "estimatedTime":
      return "예상 소요 시간";
    case "ridingDate":
      return "라이딩 날짜";
    case "bicycleType":
      return "자전거 종류";
    case "maxParticipant":
      return "최대 인원";
    case "minParticipant":
      return "최소 인원";
    case "participants":
      return "참여 인원";
    default:
      return "";
  }
};
