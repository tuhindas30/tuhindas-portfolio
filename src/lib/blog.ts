import { getAllBlogs } from "./queries";
import { Blog } from "../types";

const getAllSlugs = async () => {
  const {
    user: {
      posts: { nodes },
    },
  } = await getAllBlogs();
  const slug = nodes.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return slug;
};

const filterPosts = (searchTerm: string, blogs: Blog[]) => {
  if (searchTerm.length > 0) {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return blogs;
};

export { getAllSlugs, filterPosts };
