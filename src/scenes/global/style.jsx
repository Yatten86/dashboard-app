import { Box, InputBase, styled } from "@mui/material";

const TopbarBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: 2,
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary[400]
      : theme.palette.primary[400],
  borderRadius: "3px",
}));

const StyledInputBase = styled(InputBase)(() => ({
  marginLeft: 2,
  flex: 1,
}));

const IconBox = styled(Box)(() => ({
  display: "flex",
}));

export { TopbarBox, SearchBox, StyledInputBase, IconBox };
