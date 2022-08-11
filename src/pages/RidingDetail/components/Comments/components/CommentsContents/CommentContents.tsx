/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
} from "@mui/material";
import Avatar from "@/components/Avatar";
import Text from "@/components/Text";
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
}

const CommentsContents = ({
  parentCommentId,
  authorId,
  authorName,
  authorImageUrl,
  contents,
  childComments,
}: CommentsProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleReplyOpen = () => {
    setIsReplyOpen((prev) => !prev);
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
            <Grid item>
              <CommentActionButton content="답글" onClick={handleReplyOpen} />
            </Grid>
            {isReplyOpen && (
              <Grid item>
                <CommentsField
                  parentId={parentCommentId}
                  inputProps={{ label: "답글 달기" }}
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
                        commentId={childCommentId}
                        contents={childContents}
                        authorId={childId}
                        authorName={childAuthorName}
                        authorImageUrl={childAuthorImageUrl}
                        parentCommentId={childParentCommentId}
                        key={childCommentId}
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
