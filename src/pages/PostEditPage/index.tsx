import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import dayjs from "dayjs";
import { PostDetail } from "response";
import { editPost, getPost } from "@/api/posts";
import { PostForm } from "../PostPage/components";
import { RidingFormValues } from "../PostPage/components/postForm/PostForm";
import Spinner from "@/components/Spinner";

function PostEditPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [ridingData, setRidingData] = useState<RidingFormValues>();
  const [urlData, setUrlData] =
    useState<{
      details?: string[][];
      thumbnail?: string;
    }>();
  const handleValue = useCallback((value: PostDetail) => {
    const {
      riding: {
        bicycleType,
        departurePosition,
        minParticipant,
        maxParticipant,
        ridingCourses,
        ridingDate,
        ridingLevel,
        thumbnail,
        thumbnailId,
        zone,
        details,
        ...datas
      },
    } = value;

    const formUrls = {
      details: details.map((item) =>
        item.images.map((image) => image.imageUrl)
      ),
      thumbnail,
    };
    setUrlData(formUrls);

    const detailsValue = details.map((item) => ({
      title: item.title,
      images: item.images.map((image) => image.id),
      content: item.contents,
    }));

    const formattedDate = dayjs(ridingDate).format("YYYY-MM-DDTHH:mm");
    const FormData = {
      information: {
        bicycleTypes: bicycleType,
        departurePlace: departurePosition,
        minParticipantCount: minParticipant,
        maxParticipantCount: maxParticipant,
        routes: ridingCourses,
        level: ridingLevel,
        regionCode: zone.code,
        ridingDate: formattedDate,
        thumbnail: thumbnailId,
        ...datas,
      },
      details: detailsValue,
    };

    setRidingData(FormData);
  }, []);

  useQuery(
    ["riding-edit", postId],
    () => getPost(postId ? parseInt(postId, 10) : 0),
    {
      onSuccess: handleValue,
    }
  );

  const handleSubmit: SubmitHandler<RidingFormValues> = (data) => {
    if (!postId) return;
    editPost(parseInt(postId, 10), data);
    navigate(`/post/${postId}`);
  };

  return !ridingData ? (
    <Spinner />
  ) : (
    <div>
      <PostForm
        defaultValues={ridingData}
        onSubmit={handleSubmit}
        defaultUrl={urlData}
      />
    </div>
  );
}

export default PostEditPage;
