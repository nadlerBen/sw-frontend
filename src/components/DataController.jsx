import React, { useState, useEffect, useCallback } from "react";
import { API_URI } from "../constants/constants";
import { DataContext } from "../context/context";
import { Button } from "antd";

const DataController = ({ children }) => {
  const [repoData, setRepoData] = useState([]);
  const [favorites, setFavorites] = useState({});

  // fetches data with an option for sorting on specific criteria
  const fetchRepos = useCallback(
    async (sortByStars = false, sortByIssues = false, sortAtoZ = false) => {
      const url = new URL(API_URI);

      if (sortByStars) {
        url.searchParams.append("sortBy", "stars");
        url.searchParams.append("order", "desc");
      } else if (sortByIssues) {
        url.searchParams.append("sortBy", "issues");
        url.searchParams.append("order", "desc");
      } else if (sortAtoZ) {
        url.searchParams.append("sortBy", "name");
        url.searchParams.append("order", "asc");
      }

      const result = await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const resultJson = await result.json();

      setRepoData(resultJson);
    },
    []
  );

  useEffect(() => {
    fetchRepos();
  }, []);

  const removeRepo = (repoId) => {
    const filteredRepos = repoData.filter((repo) => repo.id !== repoId);
    setRepoData(filteredRepos);
  };

  const manageFavorite = (repoId, shouldAdd) => {
    setFavorites({ ...favorites, [repoId]: shouldAdd });
  };

  return (
    <DataContext.Provider
      value={{ repoData, removeRepo, manageFavorite, favorites }}
    >
      <Button onClick={() => fetchRepos(true)}>Sort by stars</Button>
      <Button onClick={() => fetchRepos(false, true, false)}>
        Sort by issues
      </Button>
      <Button onClick={() => fetchRepos(false, false, true)}>Sort A-Z</Button>
      {children}
    </DataContext.Provider>
  );
};

export default DataController;
