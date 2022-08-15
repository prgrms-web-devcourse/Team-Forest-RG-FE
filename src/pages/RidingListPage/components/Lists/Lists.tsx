import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import * as T from "response";
import { getPostList, postParameter } from "@/api/postList";
import { postList, postParameters } from "@/recoil/state/PostState";
import ListCard from "@/components/ListCard";

type props = T.PostDetail[];

const Lists = ({ data }: { data: props }) => {
  const navigate = useNavigate();
  const [parameters, setParameters] = useRecoilState(postParameters);
  const [postData, setPostData] = useRecoilState(postList);
  const { inView, ref } = useInView({
    threshold: 0.5,
  });

  const fetchMoreMutation = useMutation(
    (parameterProp: postParameter) => getPostList(parameterProp),
    {
      onSuccess: (newData) => {
        setPostData([...postData, ...newData.content]);
      },
    }
  );
  useEffect(() => {
    if (inView) {
      const nextParameter = { ...parameters, page: (parameters.page || 0) + 1 };
      fetchMoreMutation.mutate(nextParameter);
      setParameters(nextParameter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Grid container item direction="column" spacing={2} alignItems="center">
      <Grid container item spacing={2} justifyContent="center">
        {data.map(({ leader, riding }, index) => {
          return (
            <Grid
              key={riding.id}
              item
              xs="auto"
              ref={index === data.length - 1 ? ref : null}
            >
              <ListCard
                leaderId={leader.id}
                thumbnail={riding.thumbnail}
                ridingLevel={riding.ridingLevel}
                nickname={leader.nickname}
                profileImage={leader.profileImage}
                ridingData={riding.ridingDate}
                ridingStatus={riding.recruiting}
                ridingTitle={riding.title}
                tags={riding.bicycleType}
                minParticipants={riding.minParticipant}
                maxParticipants={riding.maxParticipant}
                currentParticipants={riding.participants.length}
                region={riding.zone.name}
                onClick={() => navigate(`/post/${riding.id}`)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Lists;
