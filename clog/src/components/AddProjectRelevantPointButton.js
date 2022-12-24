import { useNavigate  } from "react-router-dom"
import React, {useState} from 'react'
import './newProject.css'
import axios from "axios"
import { Button, Modal, Box, Fade, Input, Backdrop } from '@mui/material';

const API_URL = "http://localhost:3000/api/relevantpoints";

const AddProjectRelevantPointButton = ( {handleOpen, open, handleClose} ) => {
    return(
        <div>
            <Box 
            m={1}
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-end"
            >
                <Button onClick={handleOpen}>+</Button>
            </Box>
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
                <h2>Add a new Relevant Point</h2>
                <form id = "formulario" onSubmit={()=>null}>
                    <div className='grid-2'>
                        <div>
                            <Input placeholder='Description' type='text' name = 'description' value={""} onChange = {() => null} required/>
                        </div>
                    </div>
                    <input type="submit" value = "Add Project update" formTarget='_blank'/>
                    </form>
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

  export default AddProjectRelevantPointButton;