import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { getBlog } from "../../lib/queries";
import { getAllSlugs } from "../../lib/blog";
import Document from "../../components/Document";
import Section from "../../components/Section";
import CodeBlock from "../../components/CodeBlock";
import BlogAuthor from "../../components/BlogAuthor";
import styles from "./Blogs.module.css";

export const getStaticProps = async ({ params }) => {
  const { post } = await getBlog(params.slug);
  return {
    props: {
      blog: {
        title: post.title,
        coverImage: post.coverImage,
        contentMarkdown: post.contentMarkdown,
        dateAdded: post.dateAdded,
        totalReactions: post.totalReactions,
        slug: post.slug,
        author: {
          name: post.author.name,
          photo: post.author.photo,
        },
      },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllSlugs();

  return {
    paths,
    fallback: false,
  };
};

const BlogPage = ({ blog }) => {
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
          components={CodeBlock}
          className={styles.markdown}
          rehypePlugins={[rehypeRaw]}
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

export default BlogPage;
