import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

function App() {
  return (
    <div>
      <div>
        <AppBar position="static" sx={{
          background: "#050A30"
        }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
              }}
            >
              The Navy Board
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default App;
