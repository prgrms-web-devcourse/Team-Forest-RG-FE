import { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state/authState";
import Avatar from "@/components/Avatar";
import Text from "@/components/Text";
import { deleteComment } from "@/api/comment";
import CommentActionButton from "../CommentActionButton";
import CommentsField from "../CommentsField";

interface CommentsProps {
  commentId: number;
  parentCommentId: number;
  authorId: number;
  authorName: string;
  authorImageUrl: string;
  contents: string;
  childComments?: CommentsProps[];
  postId: number;
  isChild?: boolean;
}

const CommentsContents = ({
  commentId,
  parentCommentId,
  authorId,
  authorName,
  authorImageUrl,
  contents,
  childComments,
  postId,
  isChild = false,
}: CommentsProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const myId = useRecoilValue(userState);
  const queryClient = useQueryClient();

  const handleReplyOpen = () => {
    setIsReplyOpen((prev) => !prev);
  };

  const handleUpdateOpen = () => {
    setIsUpdateOpen((prev) => !prev);
  };

  const deleteMutation = useMutation(() => deleteComment(commentId, postId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  const handleDelete = () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      deleteMutation.mutate();
    }
  };

  return (
    <Grid container item spacing={1}>
      <Grid item xs="auto">
        <Avatar src={authorImageUrl} alt={authorName} />
      </Grid>
      <Grid container item xs direction="column">
        <Grid item>
          <Text variant="subtitle1">{authorName}</Text>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Text variant="body1">{contents}</Text>
          </Grid>
          <Grid item container direction="column">
            <Grid container item spacing={1}>
              {!isChild && (
                <Grid item xs="auto">
                  <CommentActionButton
                    content="답글"
                    onClick={handleReplyOpen}
                  />
                </Grid>
              )}
              {myId === authorId && (
                <>
                  <Grid item xs="auto">
                    <CommentActionButton
                      content="수정"
                      onClick={handleUpdateOpen}
                    />
                  </Grid>
                  <Grid item xs="auto">
                    <CommentActionButton
                      content="삭제"
                      onClick={handleDelete}
                    />
                  </Grid>
                </>
              )}
            </Grid>
            {isReplyOpen && (
              <Grid item>
                <CommentsField
                  parentId={parentCommentId}
                  inputProps={{ label: "답글 달기" }}
                  postId={postId}
                  setClose={() => setIsReplyOpen(false)}
                />
              </Grid>
            )}
            {isUpdateOpen && (
              <Grid item>
                <CommentsField
                  commentId={commentId}
                  inputProps={{ label: "수정하기" }}
                  postId={postId}
                  isUpdate
                  setClose={() => setIsUpdateOpen(false)}
                  contents={contents}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
        {childComments && childComments.length > 0 && (
          <Grid container item>
            <Grid item xs="auto">
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionSummary
                  sx={{
                    flexDirection: "row-reverse",
                    padding: 0,
                    display: "inline-flex",
                    flexGrow: 0,
                  }}
                  expandIcon={<Icon color="primary">expand_more</Icon>}
                >
                  <Text
                    variant="body1"
                    color="primary"
                  >{`답글${childComments.length}개`}</Text>
                </AccordionSummary>
                <AccordionDetails>
                  {childComments.map(
                    ({
                      commentId: childCommentId,
                      contents: childContents,
                      authorId: childId,
                      authorName: childAuthorName,
                      authorImageUrl: childAuthorImageUrl,
                      parentCommentId: childParentCommentId,
                    }) => (
                      <CommentsContents
                        postId={postId}
                        commentId={childCommentId}
                        contents={childContents}
                        authorId={childId}
                        authorName={childAuthorName}
                        authorImageUrl={childAuthorImageUrl}
                        parentCommentId={childParentCommentId}
                        key={childCommentId}
                        isChild
                      />
                    )
                  )}
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default CommentsContents;
