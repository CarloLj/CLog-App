import React from 'react'
import '../App.css'

import AddProjectUpdateButton from '../components/AddProjectUpdateButton'

const Project = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='projectCard'>
            <div style={{ margin: 10 }}>
                <h4>{props.name}</h4>
                <h4>{props.description}</h4>
                <h4>{props.created_at}</h4>
                <h4>{props.status}</h4>  
            </div>
            <AddProjectUpdateButton open={open} handleClose={handleClose} handleOpen={handleOpen}/>
        </div>
    );
  };
  
  export default Project;