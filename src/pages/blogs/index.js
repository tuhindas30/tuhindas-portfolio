import { useState } from "react";
import { getArticles } from "../../queries";
import Head from "next/head";
import BlogCard from "../../components/BlogCard";
import Search from "../../components/Search/Search";

export const getStaticProps = async () => {
  const data = await getArticles();

  return {
    props: {
      posts: data.user.publication.posts,
    },
  };
};

const Blogs = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterPosts = () => {
    if (searchTerm.length > 0) {
      return posts.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return posts;
  };

  const searchedPosts = filterPosts();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6cff5a" />
        <meta name="description" content="Blogs by tuhindas" />
        <meta name="keywords" content="Portfolio, Next.js, GraphQL, Apollo" />
        <meta name="author" content="Tuhin Das" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="tuhindas | Blogs" />
        <meta property="og:url" content="https://tuhindas.me" />
        <meta property="og:description" content="Blogs by tuhindas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/cSlF4tn.jpg" />
        <title>tuhindas | Blogs</title>
      </Head>
      <header>
        <main className="main">
          <h1>Blogs</h1>
          <p className="light-offset-color">
            I love building new things. This blog is a way for me to write down
            and share new ideas and lessons with everyone.
          </p>
        </main>
      </header>
      <Search searchTerm={searchTerm} onType={setSearchTerm} />
      {searchedPosts.length > 0 ? (
        searchedPosts.map((post) => <BlogCard key={post._id} post={post} />)
      ) : (
        <h2 style={{ textAlign: "center" }}>No articles found</h2>
      )}
    </>
  );
};

export default Blogs;
