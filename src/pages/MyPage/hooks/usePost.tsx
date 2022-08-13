import { useEffect, useState } from "react";
import { PostDetail } from "response";
import postApi from "@/api/post";

const usePost = (postId: number | undefined): [PostDetail, boolean, any] => {
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!postId) {
          return;
        }
        const data = await postApi.getPost(postId);
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);
  return [post!, loading, error];
};

export default usePost;
