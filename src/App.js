import "./App.css";
import { Feed } from "./components/Feed";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Stack } from "@mui/material";

function App() {
  return (
    <div className="body">
      <Stack>
        <Navbar />
        <Feed />
        <Footer />
      </Stack>
    </div>
  );
}

export default App;
