import { Box } from "@mui/material";

export const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <Box sx={{ color: "#12372A" }}>
      <footer>
        <p>Copyright © {date}</p>
      </footer>
    </Box>
  );
};
