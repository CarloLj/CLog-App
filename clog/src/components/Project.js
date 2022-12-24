import React from 'react'
import '../App.css'
import moment from 'moment'
import ProjectUpdate from '../components/ProjectUpdate'
import AddProjectUpdateButton from '../components/AddProjectUpdateButton'

const Project = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    let status_background = ''
    if(props.status){
        if(props.status.toString() === "active"){
            status_background="#7EC1FF"
        }
        if(props.status.toString() === "completed"){
            status_background="#50EB72"
        }
        if(props.status.toString() === "on_hold"){
            status_background="#DBFF00"
        }
        if(props.status.toString() === "cancelled"){
            status_background="#F04343"
        }
        if(props.status.toString() === "planned"){
            status_background="#595B4A"
        }
    }
    
    return (
        <div className='projectCard'>
            <div>
                <div style={{"height":'30px', "width":'100%', "border-radius": "20px 20px 0 0", "margin": 0, "text-align":'center', "font-size": 15, "color": "white", "background-color": status_background, "font-weight": "bold", "line-height": "30px"}}>{props.status.toString().toUpperCase()}</div>  
                <h4 style={{"text-align":'left', "padding-left": "10px", "padding-top": "10px", "font-size": 25}}>{props.name}</h4>
                <h4 style={{"text-align":'left', "padding-left": "10px", "padding-top": "10px", "font-size": 20, "font-weight": "normal"}}>{props.description}</h4>
                <hr style={{
                    "margin": "auto",
                    "margin-top": '10px',
                    "width":"85%",
                    "margin-left":0,
                    "border-top":"3px solid #EFF0F6"
                }}></hr>
                <div style={{"position":"absolute", "bottom": "0px", "height":'30px', "width":'100%', "border-radius": "0 0 20px 20px", "margin": 0, "text-align":'center', "font-size": 15, "color": "white", "background-color": status_background, "font-weight": "bold", "line-height": "30px"}}>{moment.utc(props.created_at).format('DD/MM/YYYY')}</div>  
            </div>
            <ProjectUpdate project_id={props.project_id}/>
            <AddProjectUpdateButton open={open} handleClose={handleClose} handleOpen={handleOpen}/>
        </div>
    );
  };
  
  export default Project;