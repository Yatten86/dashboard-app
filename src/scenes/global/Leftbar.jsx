import { useState } from "react";
import { IconButton, useTheme, Box, Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  ImageBox,
  UserNameTypography,
  SidebarBox,
  StyledTypography,
  TopBox,
  UserTypeTypography,
} from "./style";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";



const Leftbar = () => {
  
  const [isCollapsed, setIsColapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box style={{ display: "flex", height: "100vh" }}>
      <Sidebar >
        <Menu>
          <MenuItem className="menu1">
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem> Dashboard </MenuItem>
          <MenuItem> Invoices </MenuItem>
          <MenuItem> Charts </MenuItem>
          <MenuItem> Wallets </MenuItem>
          <MenuItem> Transactions </MenuItem>
          <MenuItem> Settings </MenuItem>
          <MenuItem> Logout </MenuItem>
        </Menu>
      </Sidebar>
      {/* <h1>WELCOME TO DASHBOARD</h1> */}
    </Box>
  );
};


export default Leftbar;
