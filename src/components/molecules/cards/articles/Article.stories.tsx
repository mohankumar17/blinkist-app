import React from "react";
import Article from "./Article";
import { ArticleTypes } from "./Article";

export default {
  title: "Molecules/Cards/Articles",
  component: Article,
};

export const ArticleCard = ({
  id,
  src,
  title,
  authors,
  time_to_read,
  tot_reads,
  isRead,
  handleClick,
  handleDblClick,
}: ArticleTypes) => (
  <Article
    id={id}
    src={src}
    title={title}
    authors={authors}
    time_to_read={time_to_read}
    tot_reads={tot_reads}
    isRead={isRead}
    handleClick={handleClick}
    handleDblClick={handleDblClick}
  ></Article>
);
