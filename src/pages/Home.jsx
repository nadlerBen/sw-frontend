import React, { useContext } from "react";
import { DataContext } from "../context/context";
import { Skeleton } from "antd";
import RepoList from "../components/ReposList";

const Home = () => {
  const { repoData } = useContext(DataContext);
  return <>{repoData.length ? <RepoList data={repoData} /> : <Skeleton />}</>;
};

export default Home;
