import React, { useMemo } from "react";
import Repo from "./Repo";

const RepoList = ({ data }) => {
  const repos = useMemo(() => {
    return data.map((repo) => <Repo key={repo.id} data={repo} />);
  }, [data]);
  return repos;
};

export default RepoList;
