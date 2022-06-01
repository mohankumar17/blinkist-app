import React from "react";
import { Grid } from "@mui/material";
import { ArticleCard } from "../articles/Article.stories";

function ViewArticles({ booksList, isHome, handleClick, handleDblClick }: any) {
  return (
    <Grid
      sx={{ paddingTop: "10px" }}
      container
      justifyContent="flex-start"
      rowSpacing={2}
      columnSpacing={{ xs: 0.5, sm: 1, md: 1.5 }}
    >
      {booksList.map((eachBook: any, index: number) => (
        <Grid item md={4} sm={6} key={eachBook.id}>
          <ArticleCard
            id={eachBook.id}
            src={eachBook.src}
            title={eachBook.title}
            authors={eachBook.authors}
            time_to_read={eachBook.time_to_read}
            tot_reads={eachBook.tot_reads}
            btnStatus={eachBook.btnStatus}
            isHome={isHome}
            handleClick={handleClick}
            handleDblClick={handleDblClick}
          ></ArticleCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default ViewArticles;
