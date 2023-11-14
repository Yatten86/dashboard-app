import {
  Box,
  InputBase,
  MenuList,
  Typography,
  menuItemClasses,
} from "@mui/material";
import {
  SidebarContext,
  menuClasses,
  sidebarClasses,
  Sidebar,
  SubMenu,
  MenuItem,
} from "react-pro-sidebar";

import { styled } from "../../theme/";

const TopbarBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: 2,
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background,
  borderRadius: "3px",
}));

const StyledInputBase = styled(InputBase)(() => ({
  marginLeft: 2,
  flex: 1,
}));

const IconBox = styled(Box)(() => ({
  display: "flex",
}));

const TopBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  marginLeft: "15px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  marginLeft: "16px",
}));

const ImageBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const UserNameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginTop: "10px",
  color: theme.palette.grey[100],
}));

const UserTypeTypography = styled(Typography)(({ theme }) => ({
 color: theme.palette.primary[200],
}));

const SidebarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [`.${sidebarClasses.container}`]: {
    backgroundColor: theme.palette.sidebar.default,
    color: theme.palette.error,
  },
}));

const StyledSidebar = styled(Sidebar)(({ theme }) => ({
  // display: "flex",
  [`.${sidebarClasses.container}`]: {
    backgroundColor: theme.palette.sidebar.default,
    color: "black",
  },
}));

export {
  TopbarBox,
  SearchBox,
  StyledInputBase,
  IconBox,
  StyledTypography,
  TopBox,
  ImageBox,
  UserNameTypography,
  UserTypeTypography,
  SidebarBox,
  StyledSidebar,
};
