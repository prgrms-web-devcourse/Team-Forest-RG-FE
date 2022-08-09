import Button from "@/components/Button";
import { regionCode } from "@/constants/region";

export const getYearOptions = (start: number, end: number) => {
  const yearOptions = [];
  for (let year = start; year <= end; year += 1) {
    yearOptions.push({
      key: year,
      value: year,
      text: `${String(year)}년`,
    });
  }
  return yearOptions.reverse();
};

export const regionOptions = regionCode.map((region) => ({
  key: region.code,
  value: region.code,
  text: region.name,
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const RadioIconButton = ({
  label,
  type,
}: {
  label: string | number;
  type: string;
}) =>
  type === "checked" ? (
    <Button customColor="primary">{label}</Button>
  ) : (
    <Button customColor="#999">{label}</Button>
  );
