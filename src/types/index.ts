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
  _id: string;
  title: string;
  brief: string;
  dateAdded: string;
  slug: string;
}

export interface GetAllProjects {
  projects: Project[];
}

export interface HashnodePosts {
  posts: Blog[];
}

export interface HashnodeUser {
  publication: HashnodePosts;
}

export interface GetAllHashnodeBlogs {
  user: HashnodeUser;
}

export interface HashnodePostAuthor {
  name: string;
  photo: string;
}

export interface HashnodePost {
  title: string;
  coverImage: string;
  brief: string;
  contentMarkdown: string;
  totalReactions: number;
  dateAdded: string;
  slug: string;
  author: HashnodePostAuthor;
}

export interface GetHashnodeBlog {
  post: HashnodePost;
}
