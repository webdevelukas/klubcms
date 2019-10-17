import React from "react";
import Card from "../components/Card";
import ProgressBarList from "../components/ProgressBarList";
import BadgeList from "../components/BadgeList";
import ProgressBarListItem from "../components/ProgressBarListItem";
import Badge from "../components/Badge";
import DateOfLatestUpdate from "../components/DateOfLatestUpdate";
import { SquareCardButtonWithIcon } from "../components/Button";
import WrenchIcon from "../icons/WrenchIcon";
import CardTitle from "../components/CardTitle";
import CardTitleOverline from "../components/CardTitleOverline";
import { CardImage } from "../components/Image";
import imageFile01 from "../sample-data/tsv-meisterfeier-01.jpg";

const image01 = {
  src: imageFile01
};

export default {
  title: "Card"
};

export const Default = () => (
  <Card>
    <CardImage src={image01.src} />
    <CardTitleOverline>25.09.2019 - Herbert Groenemeyer</CardTitleOverline>
    <CardTitle>Unsere U19 gewinnt zum 10. Mal in Folge. Wow!</CardTitle>
    <ProgressBarList>
      <ProgressBarListItem finished>Text</ProgressBarListItem>
      <ProgressBarListItem>Photos</ProgressBarListItem>
      <ProgressBarListItem finished>Published</ProgressBarListItem>
    </ProgressBarList>
    <BadgeList>
      <Badge>Fussball</Badge>
      <Badge>Herren</Badge>
      <Badge>1. Mannschaft</Badge>
    </BadgeList>
    <DateOfLatestUpdate>Last Update: 02.10.2019</DateOfLatestUpdate>
    <SquareCardButtonWithIcon>
      <WrenchIcon />
      Edit
    </SquareCardButtonWithIcon>
  </Card>
);
