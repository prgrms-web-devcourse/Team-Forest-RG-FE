import { EvaluateFormValues } from "./EvaluateForm";

export const numToDay = ["일", "월", "화", "수", "목", "금", "토"];

export const recommendedOptions = [
  { value: "true", dataLabel: "추천" },
  { value: "false", dataLabel: "비추천" },
];

type AllowedKeys = "recommended" | "noshow";
interface Evaluate {
  memberId?: number;
  recommended?: boolean;
  noshow?: boolean;
}
const DEFAULT_RECOMMNED_VALUE = true;
const DEFAULT_NOSHOW_VALUE = false;

export const getEvaluateListFrom = (formData: EvaluateFormValues) => {
  const evaluateList: Evaluate[] = [];

  const splitedData = Object.entries(formData).map((el: any) => {
    const [memberId, key] = el[0].split(" ");

    return [Number(memberId), key, el[1]];
  });

  splitedData.forEach((data: any) => {
    const [memberId, key, value]: [
      number,
      AllowedKeys,
      boolean | "true" | "false" | null
    ] = data;
    let newValue = value;

    if (!evaluateList[memberId]) evaluateList[memberId] = {};

    if (key === "recommended") {
      if (!value) {
        newValue = DEFAULT_RECOMMNED_VALUE;
      } else {
        newValue = value === "true";
      }
    }
    evaluateList[memberId][key] = newValue as boolean;
    evaluateList[memberId].memberId = memberId;
  });

  return evaluateList
    .filter((el) => el)
    .map((el) =>
      typeof el.noshow === "undefined"
        ? { ...el, noshow: DEFAULT_NOSHOW_VALUE }
        : el
    );
};
