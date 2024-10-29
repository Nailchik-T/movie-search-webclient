import { Box, CssBaseline, Toolbar, useTheme } from "@mui/material";
import { Navbar } from "../Navbar/Navbar.tsx";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Toaster />
      <Navbar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: theme.palette.background.default, p: 7 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
