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
  query GetAllBlogs {
    user(username: "tuhindas") {
      posts(pageSize: 0, page: 1) {
        totalDocuments
        nodes {
          id
          title
          brief
          publishedAt
          slug
        }
      }
    }
  }
`;

const BLOG_QUERY = gql`
  query GetBlog($slug: String!) {
    publication(host: "tuhindas.hashnode.dev") {
      id
      post(slug: $slug) {
        title
        coverImage {
          url
        }
        content {
          markdown
        }
        reactionCount
        publishedAt
        slug
        author {
          name
          profilePicture
        }
      }
    }
  }
`;

export const getAllProjects = async () => {
  const { data } = await serverClient.query<GetAllProjects>({
    query: ALL_PROJECTS_QUERY,
  });
  return data;
};

export const getAllBlogs = async () => {
  const { data } = await hashnodeClient.query<GetAllHashnodeBlogs>({
    query: ALL_BLOGS_QUERY,
  });
  return data;
};

export const getBlog = async (slug: string) => {
  const { data } = await hashnodeClient.query<GetHashnodeBlog>({
    query: BLOG_QUERY,
    variables: {
      slug,
    },
  });
  return data;
};
