import React from "react";
import Repo from "./Repo";

const RepoList = ({ data }) => {
  return data.map((repo) => <Repo key={repo.id} data={repo} />);
};

export default RepoList;
