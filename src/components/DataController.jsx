import React, { useState, useEffect, useCallback } from "react";
import { API_URI } from "../constants/constants";
import { DataContext } from "../context/context";

const DataController = ({ children }) => {
  const [repoData, setRepoData] = useState([]);
  const [favorites, setFavorites] = useState({});

  const fetchRepos = useCallback(async () => {
    const result = await fetch(API_URI, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const resultJson = await result.json();

    setRepoData(resultJson);
  }, []);

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
      {children}
    </DataContext.Provider>
  );
};

export default DataController;
