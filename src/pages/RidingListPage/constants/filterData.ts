import { regionCode } from "@/constants/region";

export const bicycleTypeData = [
  { key: 0, value: 2, text: "로드" },
  { key: 1, value: 1, text: "MTB" },
  { key: 2, value: 4, text: "픽시" },
  { key: 3, value: 5, text: "하이브리드" },
  { key: 4, value: 3, text: "따릉이" },
];

export const recruitTypeData = [
  { key: 0, value: 1, text: "모집 진행중" },
  { key: 1, value: 2, text: "모집 완료" },
];

export const levelData = [
  { key: 0, value: "하", text: "하" },
  { key: 1, value: "중", text: "중" },
  { key: 2, value: "상", text: "상" },
];

export const regionData = regionCode.map((region, index) => ({
  key: index,
  value: region.code,
  text: region.name,
  details: region.detail.map((detail, idx) => ({
    key: idx,
    value: detail.code,
    text: detail.name,
  })),
}));
