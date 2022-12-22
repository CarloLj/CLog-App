import { useNavigate  } from "react-router-dom"
import React, {useState} from 'react'
import './newProject.css'
import axios from "axios"
import { Button, Modal, Box, Fade, Typography, Backdrop } from '@mui/material';

const API_URL = "http://localhost:3000/api/projects";

const AddProjectUpdateButton = ( {handleOpen, open, handleClose} ) => {
    return(
        <div>
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                Add project Update
            </Typography>
            <Button onClick={handleOpen}>+</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                    Text in a modal
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
                </Fade>
            </Modal>
    </div>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

  export default AddProjectUpdateButton;