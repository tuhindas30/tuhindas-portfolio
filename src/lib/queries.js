import { serverClient, hashnodeClient } from "./apollo";
import { gql } from "@apollo/client";

export const getAllProjects = async () => {
  const { data } = await serverClient.query({
    query: gql`
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
    `,
  });
  return data;
};

export const getAllBlogs = async () => {
  const { data } = await hashnodeClient.query({
    query: gql`
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
    `,
  });
  return data;
};

export const getBlog = async (slug) => {
  const { data } = await hashnodeClient.query({
    query: gql`
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
    `,
    variables: {
      slug,
    },
  });
  return data;
};
