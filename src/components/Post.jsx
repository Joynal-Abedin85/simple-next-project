"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function Post() {
  const [posts, setPosts] = useState([]); // State to hold the fetched posts
  

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
       
        const data = await response.json();
        setPosts(data); // Set the posts in the state
      } catch (error) {
        console.log(error)
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 my-6">Blog Posts</h1>
      
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
           <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
           <div className="px-6 py-4">
             <div className="font-bold text-lime-400 text-xl mb-2">{post.title}</div>
             <p className="text-gray-700 text-base">
               {post.body}
             </p>
           </div>
           <div className="px-6 py-4">
           <Link
           href={`/blog/${post.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Read More
        </Link>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
}
