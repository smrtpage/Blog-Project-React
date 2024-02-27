import InfiniteScroll from "react-infinite-scroll-component";
import { usePosts } from "../../hooks/usePosts";
import { getUserLikesService } from "../../services/userServices";
import { CircularProgress, Stack } from "@chakra-ui/react";
import PostsList from "../posts/PostsList";
import { useMemo } from "react";
import PropTypes from "prop-types";

function UserLikedPosts({ userId }) {
  const params = useMemo(() => {
    return {
      userId,
    };
  }, [userId]);

  const { posts, activePage, hasMore, fetchPosts, likePost, deletePost } =
    usePosts(getUserLikesService, params);
  return (
    <InfiniteScroll
      dataLength={posts.length}
      endMessage={<span>🐧</span>}
      loader={
        <Stack py="32px" alignItems="center">
          <CircularProgress isIndeterminate />
        </Stack>
      }
      next={() => fetchPosts(activePage + 1)}
      hasMore={hasMore}
    >
      <PostsList posts={posts} onLike={likePost} onDelete={deletePost} />
    </InfiniteScroll>
  );
}

UserLikedPosts.propTypes = {
  userId: PropTypes.number,
};

export default UserLikedPosts;
