import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import Input from "@/components/Input";
import Button from "@/components/Button";

type commentType = {
  comment: string;
};

interface CommentsProps {
  parentId: number;
  contents?: string;
  inputProps?: React.ComponentProps<typeof Input>;
}

const CommentsField = ({ parentId, contents, inputProps }: CommentsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<commentType>({
    defaultValues: {
      comment: contents || "",
    },
  });

  const onSubmit = (data: commentType) => {
    console.log(data, parentId);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Input
            multiline
            fullWidth
            rowsMax={4}
            {...register("comment", { required: "댓글을 입력 해주세요!" })}
            error={!!errors.comment}
            errorMessage={errors.comment?.message}
            {...inputProps}
          />
        </Grid>
        <Grid item alignSelf="flex-end">
          <Button type="submit">댓글 달기</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentsField;
