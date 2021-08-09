import { serverClient, hashnodeClient } from "./apollo";
import { gql } from "@apollo/client";

export const getProjects = async () => {
  const { data } = await serverClient.query({
    query: gql`
      query GetProjects {
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

export const getArticles = async () => {
  const { data } = await hashnodeClient.query({
    query: gql`
      query GetPosts {
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
