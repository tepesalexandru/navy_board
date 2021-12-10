import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircle from '@mui/icons-material/AddCircleRounded';

function App() {
  return (
    <div>
     
        <div> 
        <AppBar position="static" sx={{background: "#050A30"}}>
          <Toolbar>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
              }}
            >
              The Navy Board
            </Typography>
          </Toolbar>
        </AppBar>
        </div>  
              
      <div className="container">
          <div className="todo"><AppBar position="static" sx={{ background: "#7EC8E3" }}>
          <Toolbar>
          <Typography variant="h5"sx={{flexGrow: 1, textAlign:"center",color:"#000C66"}}>
              TODO
            </Typography>
          </Toolbar>
        </AppBar> 
            <Stack spacing={2} direction="row" >      
               <Button variant="contained" endIcon={<AddCircle />}>Add a task</Button>     
            </Stack>
          </div>
          
          <div className="inprogress">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
          <Toolbar>
          <Typography variant="h5"sx={{flexGrow: 1, textAlign:"center",color:"#000C66"}}>
              IN PROGRESS
            </Typography>
          </Toolbar>            
        </AppBar>
          <Stack spacing={2} direction="row" >      
             <Button variant="contained" endIcon={<AddCircle />}>Add a task</Button>     
          </Stack>
          </div>

          <div className="inpreview">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>       
          <Toolbar>
          <Typography variant="h5"sx={{flexGrow: 1, textAlign:"center",color:"#000C66"}}>
             IN REVIEW
            </Typography>
          </Toolbar>
        </AppBar>
           <Stack spacing={2} direction="row" >      
             <Button variant="contained" endIcon={<AddCircle />}>Add a task</Button>     
           </Stack>
          </div>

          <div className="done">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
          <Toolbar>
          <Typography variant="h5" sx={{flexGrow: 1, textAlign:"center",color:"#000C66"}}>
              DONE
            </Typography>
          </Toolbar>
        </AppBar>
          <Stack spacing={2} direction="row" >      
            <Button variant="contained" endIcon={<AddCircle />}>Add a task</Button>     
          </Stack>
          </div>
      </div>
     
    </div>
  );
}

export default App;