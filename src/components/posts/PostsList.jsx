import { Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

function PostsList({ posts, onLike, onDelete }) {
  return (
    <Stack>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          image={post.image}
          id={post.id}
          onLike={onLike}
          isLiked={post.isLiked}
          likesCount={post._count.likedBy}
          onDelete={onDelete}
          createdAt={post.createdAt}
        />
      ))}
    </Stack>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  onLike: PropTypes.func,
  onDelete: PropTypes.func,
};

export default PostsList;
