import { IconButton, useTheme } from "@mui/material";


import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { IconBox, SearchBox, StyledInputBase, TopbarBox } from "./style";

const Topbar = () => {
  const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);

  return (
    <TopbarBox>
      <SearchBox>
        <StyledInputBase placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </SearchBox>
      <IconBox>
        <IconBox >
          {theme.palette.mode === "DARK" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconBox>
        <IconBox>
          <NotificationsOutlinedIcon />
        </IconBox>
        <IconBox>
          <SettingsOutlinedIcon />
        </IconBox>
        <IconBox>
          <PersonOutlinedIcon />
        </IconBox>
      </IconBox>
    </TopbarBox>
  );
};

export default Topbar;
