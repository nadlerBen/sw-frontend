import React, { useState, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../context/context";
import { Button, Checkbox } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { timeSince } from "../utils/utils";

const RepoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: auto;
`;

const RepoData = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-inline-start: 20px;
`;

const RepoImage = styled.img`
  height: 100px;
  width: 100px;
`;

const RepoTitle = styled.h2`
  align-self: flex-start;
`;

const RepoDesc = styled.p`
  align-self: flex-start;
`;

const BottomRepoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BottomRepoData = styled.p`
  padding-inline-end: 10px;
`;

const StyledCheckbox = styled(Checkbox)`
  padding-inline-end: 10px;
`;

// TODO - format "submitted X ago" date to wanted format
const Repo = ({ data }) => {
  const { manageFavorite, removeRepo, favorites } = useContext(DataContext);
  const {
    name,
    desc,
    id,
    image,
    stars,
    issues,
    lastCommitterName,
    lastCommitTime,
  } = data;
  const [isToggled, setIsToggled] = useState(favorites[id] || false);

  const handleFavoriteToggle = () => {
    const updatedIsToggled = !isToggled;
    setIsToggled(updatedIsToggled);
    manageFavorite(id, updatedIsToggled);
  };

  return (
    <RepoContainer>
      <RepoImage src={image} />
      <RepoData>
        <RepoTitle>{name}</RepoTitle>
        <RepoDesc>{desc}</RepoDesc>
        <BottomRepoDetails>
          <BottomRepoData>Stars: {stars}</BottomRepoData>
          <BottomRepoData>Issues: {issues}</BottomRepoData>
          <BottomRepoData>
            Submitted {timeSince(lastCommitTime)} ago by {lastCommitterName}
          </BottomRepoData>
        </BottomRepoDetails>
      </RepoData>
      <StyledCheckbox
        type="checkbox"
        checked={isToggled}
        onChange={handleFavoriteToggle}
      />
      <Button onClick={() => removeRepo(id)} icon={<DeleteFilled />} />
    </RepoContainer>
  );
};

export default Repo;
