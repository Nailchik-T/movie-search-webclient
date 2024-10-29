import { AppBar, Box, Button, Toolbar, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";
import { ROUTER_PATHS } from "../../../app/router/paths.ts";

export const ThinkMoreLogo = styled.div`
  margin-top: -6px;
  margin-left: 48%;
  transform: translateX(-50%);

  @media (max-width: 600px) {
    margin-left: 0;
    transform: none;
  }
`;

export const LogoText = styled.span`
  font-size: 2rem;
  color: #222429;
  margin-bottom: 0;
  cursor: pointer;
`;

export const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      style={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: 60,
          left: 0,
          pl: 3,
          pr: 3,
        }}
      >
        <ThinkMoreLogo>
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            <LogoText>flickseek.</LogoText>
          </NavLink>
        </ThinkMoreLogo>

        <Box sx={{ flexGrow: 1 }} />

        <NavLink to={ROUTER_PATHS.FAVORITES}>
          <Button variant={"contained"}>favorites</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
