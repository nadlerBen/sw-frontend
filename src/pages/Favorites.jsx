import React, { useContext, useMemo } from "react";
import { DataContext } from "../context/context";
import RepoList from "../components/ReposList";

const Favorites = () => {
  const { repoData, favorites } = useContext(DataContext);

  const favoriteRepos = useMemo(() => {
    return repoData.filter((repo) => (favorites[repo.id] ? true : false));
  }, [favorites]);

  return <RepoList data={favoriteRepos} />;
};

export default Favorites;
