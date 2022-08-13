import { useEffect, Dispatch, SetStateAction } from "react";
import { useForm, useWatch, Controller } from "react-hook-form";
import { ListItemText } from "@mui/material";
import Select from "@/components/Select";
import CheckBox from "@/components/CheckBox";

type Type = {
  filter: string | number;
};

interface props {
  filterData: {
    key: string | number;
    value: string | number;
    text: string | number;
    details?: props["filterData"];
  }[];
  placeholder?: string;
  setData?: Dispatch<SetStateAction<string | number>>;
  disableFetch?: boolean;
}

const Filter = ({
  filterData,
  placeholder,
  setData,
  disableFetch = false,
}: props) => {
  const { control } = useForm<Type>({
    defaultValues: {
      filter: "",
    },
  });

  const watchFilterData = useWatch({
    control,
    name: "filter",
  });

  useEffect(() => {
    if (watchFilterData && !disableFetch) {
      console.log(watchFilterData, "fetch api call,.....");
    }
    if (setData) {
      setData(watchFilterData);
    }
  }, [watchFilterData, setData]);

  const data = filterData.map((item) => ({
    ...item,
    text: (
      <>
        <CheckBox checked={watchFilterData === item.value} />
        <ListItemText primary={item.text} />
      </>
    ),
  }));

  return (
    <Controller
      name="filter"
      control={control}
      defaultValue=""
      render={({ field }) => {
        const valueOutOFRange = filterData.find(
          (item) => item.value === field.value
        );
        return (
          <Select
            {...field}
            value={valueOutOFRange ? field.value : ""}
            label=""
            data={data}
            defaultValue=""
            displayEmpty={!!placeholder}
            renderValue={(selected) => {
              if (!selected && placeholder) {
                return placeholder;
              }
              return filterData.find((item) => item.value === selected)?.text;
            }}
          />
        );
      }}
    />
  );
};

export default Filter;
