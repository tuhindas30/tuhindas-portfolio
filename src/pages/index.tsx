import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Document from "../components/Document";
const Header = dynamic(() => import("../components/Header"));
const RecentSection = dynamic(() => import("../components/RecentSection"));
import { getAllBlogs, getAllProjects } from "../lib/queries";
import { Project, Blog } from "../types";

interface HomeProps {
  projects: Project[];
  blogs: Blog[];
}

const Home = ({ projects, blogs }: HomeProps) => {
  return (
    <>
      <Document
        description={"Homepage of tuhindas"}
        image={"https://i.imgur.com/cSlF4tn.jpg"}
        title={"tuhindas"}
      />
      <Header />
      <RecentSection type="BLOGS" blogs={blogs.slice(0, 2)} />
      <RecentSection type="PROJECTS" projects={projects.slice(0, 2)} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const [{ projects }, { user }] = await Promise.all([
    getAllProjects(),
    getAllBlogs(),
  ]);

  return {
    props: {
      projects,
      blogs: user.publication.posts,
    },
  };
};
