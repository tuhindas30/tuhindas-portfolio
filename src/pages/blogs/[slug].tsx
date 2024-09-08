import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getBlog } from "../../lib/queries";
import { getAllSlugs } from "../../lib/blog";
import Document from "../../components/Document";
const Section = dynamic(() => import("../../components/Section"));
const CodeBlock = dynamic(() => import("../../components/CodeBlock"));
const BlogAuthor = dynamic(() => import("../../components/BlogAuthor"));
import { HashnodePost } from "../../types";
import styles from "../../../styles/Blog.module.css";

interface BlogProps {
  blog: HashnodePost;
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <Section>
      <Document
        description={"Blogs by tuhindas"}
        image={blog.coverImage.url}
        title={blog.title}
      />
      <div className={styles.coverImageContainer}>
        <Image
          src={blog.coverImage.url}
          alt={blog.title}
          width={1600}
          height={840}
          className={styles.coverImage}
        />
      </div>
      <h2 className="sectionHeading">{blog.title}</h2>
      <BlogAuthor
        name={blog.author.name}
        photo={blog.author.profilePicture}
        publishedOn={blog.publishedAt}
        likes={blog.reactionCount}
      />
      <ReactMarkdown
        components={{
          code: CodeBlock,
        }}
        className={styles.markdown}
        linkTarget="_blank">
        {blog.content.markdown}
      </ReactMarkdown>
      <p className={styles.originalPostLink}>
        This blog was actually posted&nbsp;
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href={`https://tuhindas.hashnode.dev/${blog.slug}`}>
          here
        </a>
        .
      </p>
    </Section>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== "string")
    return {
      notFound: true,
    };

  const { publication } = await getBlog(params.slug);
  return {
    props: {
      blog: publication.post,
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
