import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import Input from "./Input";

const Feed = ({posts}) => {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  console.log(posts);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealtimePosts(responseData);
      setUseSSRPosts(false);
      setHandlePost(false);
    }

    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePost]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />

      {/* Posts */}
    </div>
  );
};

export default Feed;
