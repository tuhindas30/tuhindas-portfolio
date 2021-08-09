import Section from "./Section";
import BlogPublishDate from "./BlogPublishDate";

const BlogCard = ({ post }) => {
  return (
    <Section>
      <BlogPublishDate dateString={post.dateAdded} />
      <h1 className="heading">{post.title}</h1>
      <p className="light-offset-color">
        {post.brief}
        <span className="blog-link">
          <a
            href={`https://tuhindas.hashnode.dev/${post.slug}`}
            target="_blank"
            rel="noreferrer"
            className="primary-color">
            Learn more
          </a>
        </span>
      </p>
    </Section>
  );
};

export default BlogCard;
