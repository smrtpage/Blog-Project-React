import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Heading, Text, CircularProgress } from "@chakra-ui/react";
import { getPostDetailsService } from "../../services/postsServices";
import ParsedMarkdown from "../../components/posts/ParsedMarkdown";

function PostPage() {
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

      {post && !error ? (
        <Stack>
          <Heading>{post.title}</Heading>
          <Text>by {post.author.fullName}</Text>
          <ParsedMarkdown value={post.body} />
        </Stack>
      ) : (
        console.log(error)
      )}
    </div>
  );
}

export default PostPage;
