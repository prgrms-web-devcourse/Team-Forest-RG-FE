import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import koLocal from "dayjs/locale/ko";
import dayjs from "dayjs";
import Input from "@/components/Input";

interface DatePickerProps {
  defaultValule?: string | Date;
  value?: string | Date;
  onChange?: (...event: any) => void;
  label?: string;
  error?: boolean;
}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      defaultValule = dayjs().format("YYYY-MM-DDTHH:mm"),
      value,
      onChange,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={koLocal}>
        <Input
          label={label}
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          ref={ref}
          value={
            value ? dayjs(value).format("YYYY-MM-DDTHH:mm") : defaultValule
          }
          onChange={onChange}
          error={error}
          {...props}
        />
      </LocalizationProvider>
    );
  }
);

export default DatePicker;
