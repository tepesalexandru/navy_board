import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input, Stack } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircleRounded";
import {makeStyles} from '@mui/styles';
import InputLabel from "@mui/material/InputLabel";
import { MenuItem } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select"

const useStyles=makeStyles((theme)=> ({
  formControl:{
    margin:theme.spacing="2", 
    minWidth:200
  }
}))

export default function CreateTaskPopup() {
  const classes=useStyles()

  const [open, setOpen] = React.useState(false);

  const[value,setValue] =React.useState('');

  const HandleChange=(event)=>{
    setValue(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack spacing={2} direction="row" >
        <Button
          sx={{ background: "#050A30" }}
          variant="contained"
          endIcon={<AddCircle />}
          onClick={() => setOpen(true)}
        >
          Add a task
        </Button>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"       
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title" sx={{ background: "#000C66" }} color="white">{"New task"}</DialogTitle>
        <DialogContent  sx={{ background: "#000C66" }}>
          <Stack spacing={3}>
            <Input
            
              placeholder="Add a task name"
              sx={{
                width: "300px", color:"white"
              }}
            />
            <Input
            
              placeholder="Add a description..."
              sx={{
                width: "300px",color:"white"
              }}
            />
            <Input
            
              placeholder="Add User"
              sx={{
                width: "300px", color:"white"
              }}
            />
            <FormControl className={classes.formControl} sx={{ background: "white"  }}>
            <InputLabel background="black" sx={{ color: "black"  }}>Set Status</InputLabel>
            <Select labelId="select-demo" id='status-select'  value={value} onChange={HandleChange}>
              <MenuItem value={'TODO'}>TODO</MenuItem>
              <MenuItem value={'In Progress'}>In Progress</MenuItem>
              <MenuItem value={'In Review'}>In Review</MenuItem>
              <MenuItem value={'DONE'}>DONE</MenuItem>
              
            </Select>
          </FormControl>

            <DialogActions>           
        </DialogActions>
          </Stack>
        </DialogContent>        
        <DialogActions sx={{ background: "#000C66" }}>
          <Button onClick={handleClose} autoFocus sx={{ background: "#050A30" }} variant="contained" >
                Save 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
