import { useEffect, Dispatch, SetStateAction } from "react";
import { useForm, useWatch, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState, useRecoilState } from "recoil";
import { ListItemText } from "@mui/material";
import { postList, postParameters } from "@/recoil/state/PostState";
import { getPostList, postParameter } from "@/api/postList";
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
  filterName: string;
  isReset?: boolean;
  disabled?: boolean;
}

const Filter = ({
  filterData,
  placeholder,
  setData,
  disableFetch = false,
  filterName,
  disabled,
  isReset = false,
}: props) => {
  const { control, reset } = useForm<Type>({
    defaultValues: {
      filter: "",
    },
  });
  const setPostData = useSetRecoilState(postList);
  const [currentParameter, setCurrentParameter] =
    useRecoilState(postParameters);
  const filterMutation = useMutation(
    (parameter: postParameter) => getPostList(parameter),
    {
      onSuccess: (postData) => {
        setPostData(postData?.content);
      },
    }
  );

  const watchFilterData = useWatch({
    control,
    name: "filter",
  });

  useEffect(() => {
    if (watchFilterData && !disableFetch) {
      const nextParameter = {
        ...currentParameter,
        [filterName]: watchFilterData,
        page: 0,
      };
      filterMutation.mutate(nextParameter);
      setCurrentParameter(nextParameter);
    }
    if (setData) {
      setData(watchFilterData);
    }
  }, [watchFilterData, setData, disableFetch]);

  useEffect(() => {
    if (isReset) {
      reset();
    }
  }, [isReset]);

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
            disabled={disabled}
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
