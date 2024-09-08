import { IconType } from "react-icons/lib";

export interface TechStack {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: TechStack[];
  imageURL: string;
  liveDemoURL: string;
  repoURL: string;
}

export interface Blog {
  id: string;
  title: string;
  brief: string;
  publishedAt: Date;
  slug: string;
}

export interface GetAllProjects {
  projects: Project[];
}

export interface HashnodePosts {
  nodes: Blog[];
}

export interface HashnodeUser {
  posts: HashnodePosts;
}

export interface GetAllHashnodeBlogs {
  user: HashnodeUser;
}

export interface HashnodePostAuthor {
  name: string;
  profilePicture: string;
}

export interface HashnodePost {
  title: string;
  brief: string;
  reactionCount: number;
  slug: string;
  publishedAt: Date;
  coverImage: {
    url: string;
  };
  content: {
    markdown: string;
  };
  author: HashnodePostAuthor;
}

export interface HashnodePublication {
  id: string;
  post: HashnodePost;
}

export interface GetHashnodeBlog {
  publication: HashnodePublication;
}

export interface NavPill {
  id: number;
  title: string;
  path: string;
}

export interface SocialHandles {
  id: number;
  name: string;
  link?: string;
  icon: IconType;
}
