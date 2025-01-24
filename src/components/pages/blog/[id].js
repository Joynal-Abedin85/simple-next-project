
// pages/blog/[id].js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;  // Get dynamic route ID

  useEffect(() => {
    if (id) {
      // Fetch post details from API based on the ID
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg">{post.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
