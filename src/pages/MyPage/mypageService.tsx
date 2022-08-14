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
