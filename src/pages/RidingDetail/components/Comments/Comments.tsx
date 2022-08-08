import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Text from "@/components/Text";
import CommentsField from "./components/CommentsField";
import CommentsContents from "./components/CommentsContents";
import { getComments } from "@/api/mock";

const Comments = () => {
  const { data: commentsData, isSuccess } = useQuery(
    ["comments"],
    getComments,
    {
      select: (data) => data.comments,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Text variant="h4">{`${
          isSuccess ? commentsData.length : 0
        }개의 댓글이 있습니다`}</Text>
      </Grid>
      <Grid item>
        <CommentsField parentId={0} />
      </Grid>
      <Grid item>
        {isSuccess &&
          commentsData.map(
            ({
              commentId,
              authorId,
              authorName,
              authorImageUrl,
              contents,
              childComments,
            }) => (
              <CommentsContents
                commentId={commentId}
                parentCommentId={commentId}
                authorId={authorId}
                authorName={authorName}
                authorImageUrl={authorImageUrl}
                contents={contents}
                childComments={childComments}
                key={commentId}
              />
            )
          )}
      </Grid>
    </Grid>
  );
};

export default Comments;