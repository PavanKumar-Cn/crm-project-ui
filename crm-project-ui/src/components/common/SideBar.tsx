import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import { styled } from "@mui/material/styles";
import { Divider, IconButton, List, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { useEffect } from "react";
// import { CATEGORIES } from "../../constants/enpoints";
// import { CategoryTemplate } from "../../templates/templates";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Sidebar = ({
  toggleDrawer,
  open,
}: {
  toggleDrawer: any;
  open: boolean;
}) => {
  const [listOpen, setListOpen] = React.useState(true);

  const handleClick = () => {
    setListOpen(!listOpen);
  };

  //   const [category, setCategory] = useState("");
  //   let navigate = useNavigate();
  //   const [categories, setCategories] = useState<CategoryTemplate[]>([]);
  useEffect(() => {}, []);

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton
          onClick={() => {
            toggleDrawer();
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {/* <ListItemButton component={Link} to="/admin">
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItemButton> */}
        {/* <ListItemButton component={Link} to="/supervisor">
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Supervisor" />
        </ListItemButton> */}

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Supervisor" />
          {listOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/supervisor/dashboard">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Issues" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* <ListItemButton>
          <ListItemIcon>
            <ManageHistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Transaction Manager" />
        </ListItemButton> */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
