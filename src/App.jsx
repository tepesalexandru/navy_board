import React from "react";
import './App.css';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import {Grid,Paper} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>(
{
  grid: {
    width:'100%',
    margin:'0px'
  },
  paper:{
    padding: theme.spacing(2),
    textAlign:'center',
    color: theme.palette.text.secondary,
    background: theme.pallete.success.light
  }

})
);

function App() {
  const classes=useStyles();
  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar> 
            <Typography variant="h6" style={{
               flexGrow: 1
              }}
            >
             The Navy Board
            </Typography>
            
          </Toolbar>
        </AppBar>
      </div>
      
      <div>
      <Grid container spacing={2} className={classes.Grid}>
        <Grid item xs={12}>
          <Paper className={classes.Paper}>TODO</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.Paper}>In Progress</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.Paper}>In Review</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.Paper}>DONE</Paper>
        </Grid>
      </Grid>
      </div>
      
    </div>
  );
}

export default App;
