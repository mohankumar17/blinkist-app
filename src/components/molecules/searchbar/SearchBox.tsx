import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export type SearchBoxType = {
  value: string;
  handleKeyDown: (event: any) => void;
};

function SearchBox({ value, handleKeyDown }: SearchBoxType) {
  const [textValue, setValue] = useState<string>(value);
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "658px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon></SearchIcon>
              </InputAdornment>
            ),
          }}
          inputProps={{ "data-testid": "searchbox" }}
          id="standard-basic"
          variant="standard"
          placeholder="Search by title or author"
          value={textValue}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event)}
        />
      </Box>
    </>
  );
}

export default SearchBox;
