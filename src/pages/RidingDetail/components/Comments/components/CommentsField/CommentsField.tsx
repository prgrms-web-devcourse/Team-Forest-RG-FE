import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { postComment, updateComment } from "@/api/comment";

type commentType = {
  comment: string;
};

interface CommentsProps {
  parentId?: number;
  contents?: string;
  inputProps?: React.ComponentProps<typeof Input>;
  postId: number;
  commentId?: number;
  isUpdate?: boolean;
  setClose?: () => void;
}

const CommentsField = ({
  parentId = 0,
  contents,
  inputProps,
  postId,
  commentId,
  setClose,
  isUpdate = false,
}: CommentsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<commentType>({
    defaultValues: {
      comment: contents || "",
    },
  });
  const queryClient = useQueryClient();

  const commentRegisterMutation = useMutation(
    (contents: string) => postComment(postId, contents, parentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
      },
    }
  );

  const updateCommentMutation = useMutation(
    ({ id, contents }: { id: number; contents: string }) =>
      updateComment(id, postId, contents),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
      },
    }
  );

  const onSubmit = (data: commentType) => {
    !isUpdate
      ? commentRegisterMutation.mutate(data.comment)
      : commentId &&
        updateCommentMutation.mutate({ id: commentId, contents: data.comment });
    setValue("comment", "");
    setClose && parentId && setClose();
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
