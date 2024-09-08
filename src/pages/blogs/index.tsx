import { useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Document from "../../components/Document";
const Section = dynamic(() => import("../../components/Section"));
const Search = dynamic(() => import("../../components/Search"));
const BlogCard = dynamic(() => import("../../components/BlogCard"));
import { getAllBlogs } from "../../lib/queries";
import { filterPosts } from "../../lib/blog";
import { Blog } from "../../types";
import styles from "../../../styles/Blogs.module.css";

interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchedPosts = filterPosts(searchTerm, blogs);

  return (
    <>
      <Document
        description={"Blogs by tuhindas"}
        image={"https://i.imgur.com/cSlF4tn.jpg"}
        title={"tuhindas | Blogs"}
      />
      <header className={styles.header}>
        <h1 className="sectionHeading">Blogs</h1>
        <p className={styles.message}>
          I love building new things. This blog is a way for me to write down
          and share new ideas and lessons with everyone.
        </p>
      </header>
      <Search searchTerm={searchTerm} onType={setSearchTerm} />
      <Section>
        {searchedPosts.length > 0 ? (
          searchedPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className={styles.noArticlesMessage}>No articles found</p>
        )}
      </Section>
    </>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const { user } = await getAllBlogs();

  return {
    props: {
      blogs: user.posts.nodes,
    },
  };
};
