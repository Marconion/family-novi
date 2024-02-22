import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

export const MuiDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        onClick={() => {
          setIsExpanded(true);
        }}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer
        anchor="right"
        open={isExpanded}
        onClose={() => {
          setIsExpanded(false);
        }}>
        <Box
          p={2}
          width={"150px"}
          height={"100vh"}
          textAlign="center"
          sx={{ backgroundColor: "#FBFADA" }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: "#12372A", m: 2, marginBottom: 4 }}>
            MENI
          </Typography>
          <Stack flex justifyContent={"space-between"}>
            <Stack
              spacing={2}
              divider={<Divider orientation="horizontal" flexItem />}>
              <Button
                // gutterBottom
                color="primary"
                href="#"
                underline="hover">
                <Typography variant="h8">O nama</Typography>
              </Button>
              <Button
                // gutterBottom
                color="primary"
                href="#"
                underline="hover">
                <Typography variant="h8">Galerija</Typography>
              </Button>
              <Button
                // gutterBottom
                color="primary"
                href="#"
                underline="hover">
                <Typography variant="h8">Cenovnik</Typography>
              </Button>
              <Button
                // gutterBottom
                color="primary"
                href="#"
                underline="hover">
                <Typography variant="h8">Kontakt</Typography>
              </Button>
            </Stack>
            <Box>
              <img src="./images/Family logo gold.png" width={"150px"} />
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
