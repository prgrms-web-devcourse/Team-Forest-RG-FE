import { useState } from "react";

const useTabs = (initialValue: number | string) => {
  const [value, setValue] = useState<number | string>(initialValue);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number | string
  ) => {
    setValue(newValue);
  };

  return [value, handleChange] as const;
};

export default useTabs;
