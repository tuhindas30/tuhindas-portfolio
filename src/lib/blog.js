import { getAllBlogs } from "../lib/queries";

const getAllSlugs = async () => {
  const data = await getAllBlogs();
  const slug = data.user.publication.posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return slug;
};

const filterPosts = (searchTerm, blogs) => {
  if (searchTerm.length > 0) {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return blogs;
};

export { getAllSlugs, filterPosts };
