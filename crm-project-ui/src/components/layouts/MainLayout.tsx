import React from "react";

import { Box, Container, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet, Routes } from "react-router-dom";
import NavBar from "../common/NavBar";
import Sidebar from "../common/SideBar";
import { Padding } from "@mui/icons-material";
// import ProductMain from "../Products/ProductsMain";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ paddingY: 3 }}>
          {/* <Routes>
            <Route path="/" element={<ProductMain />} />
            <Route path="/home/:category" element={<ProductMain />} />
            <Route path="*" element={<ProductMain />} />
          </Routes> */}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
