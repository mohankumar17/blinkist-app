import React from "react";
import Article from "./Article";
import { ArticleTypes } from "./Article";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/Card",
  component: Article,
  argTypes: {
    handleClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof Article>;

// export const ArticleCard = ({
//   id,
//   src,
//   title,
//   authors,
//   time_to_read,
//   tot_reads,
//   btnStatus,
//   isHome,
//   handleClick,
//   handleDblClick,
// }: ArticleTypes) => (
//   <Article
//     id={id}
//     src={src}
//     title={title}
//     authors={authors}
//     time_to_read={time_to_read}
//     tot_reads={tot_reads}
//     btnStatus={btnStatus}
//     isHome={isHome}
//     handleClick={handleClick}
//     handleDblClick={handleDblClick}
//   ></Article>
// );

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const ArticleCard = Template.bind({});

ArticleCard.args = {
  src: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  title: "Lives of the Stoics",
  authors: "Ryan Holiday, Stephen Hansel",
  time_to_read: "15-minute read",
  tot_reads: "2.1k reads",
  isHome: true,
  btnStatus: 0,
};

export const ArticleCardInLibrary = Template.bind({});

ArticleCardInLibrary.args = {
  src: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  title: "Lives of the Stoics",
  authors: "Ryan Holiday, Stephen Hansel",
  time_to_read: "15-minute read",
  tot_reads: "2.1k reads",
  isHome: true,
  btnStatus: 1,
};

export const ArticleCardCurrentlyReading = Template.bind({});

ArticleCardCurrentlyReading.args = {
  src: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  title: "Lives of the Stoics",
  authors: "Ryan Holiday, Stephen Hansel",
  time_to_read: "15-minute read",
  tot_reads: "2.1k reads",
  isHome: false,
  btnStatus: 1,
};

export const ArticleCardFinished = Template.bind({});

ArticleCardFinished.args = {
  src: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  title: "Lives of the Stoics",
  authors: "Ryan Holiday, Stephen Hansel",
  time_to_read: "15-minute read",
  tot_reads: "2.1k reads",
  isHome: false,
  btnStatus: 2,
};
