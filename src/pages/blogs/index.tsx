import { useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { getAllBlogs } from "../../lib/queries";
import { filterPosts } from "../../lib/blog";
import Document from "../../components/Document";
const BlogCard = dynamic(() => import("../../components/BlogCard"));
import Search from "../../components/Search";
import Section from "../../components/Section";
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
        <h1>Blogs</h1>
        <p style={{ color: "var(--light-offset-color)" }}>
          I love building new things. This blog is a way for me to write down
          and share new ideas and lessons with everyone.
        </p>
      </header>
      <Search searchTerm={searchTerm} onType={setSearchTerm} />
      <Section>
        {searchedPosts.length > 0 ? (
          searchedPosts.map((post) => <BlogCard key={post._id} post={post} />)
        ) : (
          <h2 style={{ textAlign: "center" }}>No articles found</h2>
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
      blogs: user.publication.posts,
    },
  };
};
