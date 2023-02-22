import React, { useContext } from "react";
import { DataContext } from "../context/context";
import RepoList from "../components/ReposList";

const Favorites = () => {
  const { repoData, favorites } = useContext(DataContext);
  return (
    <RepoList
      data={repoData.filter((repo) => (favorites[repo.id] ? true : false))}
    />
  );
};

export default Favorites;
