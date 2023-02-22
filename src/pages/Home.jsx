import React, { useContext } from "react";
import { DataContext } from "../context/context";
import RepoList from "../components/ReposList";

const Home = () => {
  const { repoData } = useContext(DataContext);
  return <RepoList data={repoData} />;
};

export default Home;
