import { AppBar, Toolbar, IconButton, Typography, Grid } from "@mui/material";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import { MuiDrawer } from "./Drawer";

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#12372A", color: "#FBFADA" }}>
      <Grid container justifyContent={"space-between"} sx={{ paddingX: 3 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo">
            <LocalCafeRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Family Event Center
          </Typography>
        </Toolbar>
        <MuiDrawer />
      </Grid>
    </AppBar>
  );
};
