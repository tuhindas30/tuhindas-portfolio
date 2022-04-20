import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getBlog } from "../../lib/queries";
import { getAllSlugs } from "../../lib/blog";
import Document from "../../components/Document";
import Section from "../../components/Section";
import CodeBlock from "../../components/CodeBlock";
import BlogAuthor from "../../components/BlogAuthor";
import { HashnodePost } from "../../types";
import styles from "../../../styles/Blogs.module.css";

interface BlogProps {
  blog: HashnodePost;
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <>
      <Document
        description={"Blogs by tuhindas"}
        image={blog.coverImage}
        title={blog.title}
      />
      <Section>
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={707}
          height={371}
          className={styles.coverImage}
        />
        <h1 className={styles.title}>{blog.title}</h1>
        <BlogAuthor
          name={blog.author.name}
          photo={blog.author.photo}
          publishedOn={blog.dateAdded}
          likes={blog.totalReactions}
        />
        <ReactMarkdown
          components={{
            code: CodeBlock,
          }}
          className={styles.markdown}
          linkTarget="_blank">
          {blog.contentMarkdown}
        </ReactMarkdown>
        <>
          <>View original post</>
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href={`https://tuhindas.hashnode.dev/${blog.slug}`}>
            here
          </a>
          .
        </>
      </Section>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== "string")
    return {
      notFound: true,
    };

  const { post } = await getBlog(params.slug);
  return {
    props: {
      blog: post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllSlugs();

  return {
    paths,
    fallback: false,
  };
};
