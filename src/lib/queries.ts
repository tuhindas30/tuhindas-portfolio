import { gql } from "@apollo/client";
import { serverClient, hashnodeClient } from "./apollo";
import { GetAllHashnodeBlogs, GetAllProjects, GetHashnodeBlog } from "../types";

const ALL_PROJECTS_QUERY = gql`
  query GetAllProjects {
    projects {
      id
      title
      shortDescription
      techStack {
        id
        name
      }
      imageURL
      liveDemoURL
      repoURL
    }
  }
`;

const ALL_BLOGS_QUERY = gql`
  query GetAlBlogs {
    user(username: "tuhindas") {
      publication {
        posts(page: 0) {
          _id
          title
          brief
          dateAdded
          slug
        }
      }
    }
  }
`;

const BLOG_QUERY = gql`
  query GetBlog($slug: String!) {
    post(slug: $slug, hostname: "tuhindas.hashnode.dev") {
      title
      coverImage
      contentMarkdown
      totalReactions
      dateAdded
      slug
      author {
        name
        photo
      }
    }
  }
`;

export const getAllProjects = async () => {
  const { data }: { data: GetAllProjects } = await serverClient.query({
    query: ALL_PROJECTS_QUERY,
  });
  return data;
};

export const getAllBlogs = async () => {
  const { data }: { data: GetAllHashnodeBlogs } = await hashnodeClient.query({
    query: ALL_BLOGS_QUERY,
  });
  return data;
};

export const getBlog = async (slug: string) => {
  const { data }: { data: GetHashnodeBlog } = await hashnodeClient.query({
    query: BLOG_QUERY,
    variables: {
      slug,
    },
  });
  return data;
};
