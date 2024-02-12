import { CircularProgress, Heading, Stack } from "@chakra-ui/react";
import EditPostForm from "../../components/posts/EditPostForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostDetailsService } from "../../services/postsServices";

function EditPostPage() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getPostDetailsService(postId)
      .then((data) => setPost(data))
      .finally(() => setIsLoading(false))
      .catch((err) => setError(err));
  }, [postId]);

  return (
    <div>
      {isLoading && <CircularProgress />}
      {!error ? (
        <Stack>
          <Heading mb="16px">Edit Post</Heading>
          <EditPostForm post={post} />
        </Stack>
      ) : (
        console.log(error)
      )}
    </div>
  );
}

export default EditPostPage;
