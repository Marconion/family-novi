import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

export const InfoCard = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent={"space-around"}>
      <Card sx={{ maxWidth: 345, margin: "1.5rem", color: "#12372A" }}>
        <CardMedia
          sx={{ height: 250, color: "#12372A" }}
          image="/images/gallery-img/Family-1.jpg"
          title="family_img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Preview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            nemo repellat sequi modi repudiandae ex, cumque non impedit aperiam!
            Quos non dolor minus a exercitationem, ipsa corrupti architecto
            adipisci illum?
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" sx={{ color: "#12372A" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
