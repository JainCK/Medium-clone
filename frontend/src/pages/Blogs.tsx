import { useEffect } from "react";
import { Appbar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, posts } = useBlogs();

  useEffect(() => {
    console.log("Posts data:", posts);
  }, [posts]);

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
        {posts.map((post) => (
  <BlogCard
    id={post.id}
    authorName={post.author.name || "Anonymous"}
    title={post.title}
    content={post.content}
    publishedDate={"2nd Feb 2024"}
  />
))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
