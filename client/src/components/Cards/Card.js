// Imported dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useRedirectTo from "../../hooks/useRedirectTo";
import { paths } from "../../lib/paths";

// Imported components / icons
import { CardImage } from "../Images/Image";
import CardTitleOverline from "./CardTitleOverline";
import CardTitle from "./CardTitle";
import ProgressBarList from "./ProgressBarList";
import ProgressBarListItem from "./ProgressBarListItem";
import BadgeList from "../Badges/BadgeList";
import Badge from "../Badges/Badge";
import DateOfLatestUpdate from "./DateOfLatestUpdate";
import { SquareCardButtonWithIcon } from "../Buttons/Button";
import WrenchIcon from "../../icons/WrenchIcon";

const StyledCard = styled.article`
  display: grid;
  grid-template-areas:
    "CardImage CardTitleOverline CardTitleOverline CardTitleOverline"
    "CardImage CardTitle CardTitle CardTitle"
    "ProgressBarList DateOfLatestUpdate DateOfLatestUpdate Button"
    "ProgressBarList BadgeList BadgeList Button";
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: auto 1fr auto auto;
  grid-gap: 0.2em 0.5em;
  width: 100%;
  height: 180px;
  background: ${({ theme }) => theme.highlightContrast};
  margin-bottom: 1em;
  padding: 0.6em 0.8em;
`;

export default function Card({ article }) {
  const redirectTo = useRedirectTo();

  return (
    <>
      <StyledCard>
        <CardImage src={article.media.images.main} />
        <CardTitleOverline>
          {article.date.added} - {article.author}
        </CardTitleOverline>
        <CardTitle>{article.title}</CardTitle>
        <ProgressBarList>
          <ProgressBarListItem finished={!!article.content}>
            Text
          </ProgressBarListItem>
          <ProgressBarListItem
            finished={!!article.media.images.gallery.length > 0}
          >
            Photos
          </ProgressBarListItem>
          <ProgressBarListItem finished={!!article.date.published}>
            Published
          </ProgressBarListItem>
        </ProgressBarList>
        <BadgeList>
          {article.categories.map(category => {
            return <Badge key={category}>{category}</Badge>;
          })}
        </BadgeList>
        <DateOfLatestUpdate>
          Last update: {article.date.updated}
        </DateOfLatestUpdate>
        <SquareCardButtonWithIcon
          onClick={() => redirectTo(`${paths.editArticlePage}/${article._id}`)}
        >
          <WrenchIcon />
          Edit
        </SquareCardButtonWithIcon>
      </StyledCard>
    </>
  );
}

Card.propTypes = {
  article: PropTypes.object
};
