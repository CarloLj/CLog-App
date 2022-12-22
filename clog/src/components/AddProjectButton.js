import { useNavigate  } from "react-router-dom"
import React, {useState} from 'react'
import './newProject.css'
import axios from "axios"
import { Input } from '@mui/material';

const API_URL = "http://localhost:3000/api/projects";

const AddProjectButton = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate ();
    /*  ---  MODAL FORM --- */
    
    //project register fields
    const [project,setProject] = useState({
        "creator_id": user.user_id,
        "name": '',
        "created_at": new Date().toJSON(),
        "description": '',
        "status": '',
    });

    const { name, description, created_at, status} = project;

    //copies project data and changes the target of the onchange
    const onChange = e => {
        // Actualizamos para los diferentes tipos de datos recopilados
        setProject({...project, [e.target.name]:e.target.value}); 
        console.log(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(project);
        if(name === '' || description === '' || created_at === '' || status === ''){
           console.log('Missing project info');
        }
        else{
            try {
                addToDB(project);
                close();
                resetForm();
                window.location.reload(false);
                console.log('Project added successfully');
            } catch (error) {
                console.log(error.response.data);
            }
            
        }
    }
    
    /*  ---  MODAL ACTIONS --- */
    let modal = document.querySelectorAll(".modal")[0];
    let modalContainer = document.querySelectorAll(".modal-container")[0];

    const open = e => {
        e.preventDefault();
        modalContainer.style.opacity = "1";
        modalContainer.style.visibility ="visible";
        modal.classList.toggle("modal-close");
    }
    const close = () => {
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalContainer.style.opacity = "0";
            modalContainer.style.visibility = "hidden";
        }, 600)//vamos a darle 1s para ejecutar la función
    }
    
    window.addEventListener("click", function(e){
        if(e.target === modalContainer){
            close();
        }
    })

    const resetForm = () => {
        setProject({...project, 
            "name"  : '',
            "description"  : '',
            "status": '',
        });
    }

    const addToDB = async (project) => {
        console.log(JSON.stringify(project));
        try {
            console.log(project)
            const config = {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(API_URL+'/',project,config);
        } catch (error) {
            alert.error("Could not add project");
        }
    }

    return(
        <section>
            <a href="/home" className='addPatientButton' onClick={open}>.</a>
            <div className = "modal-container">
                <div className = "modal modal-close">
                    <a className = "close" onClick={close}>X</a>
                    <div className = "modal-text">
                        <h2 className='header'>Add new project</h2>
                        <form id = "formulario" onSubmit={onSubmit}>
                            <div className='grid-2'>
                                <div>
                                    <Input placeholder='Name' type='text' name = 'name' value={name} onChange = {onChange} required/>
                                </div>
                                <div>
                                    <Input placeholder='Description' type='text' name = 'description' value={description} onChange = {onChange} required/>
                                </div>
                                <div>
                                    <select placeholder='Status' id="status" name='status' onChange = {onChange}>
                                        <option disabled selected>Status</option>
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                        <option value="on_hold">On Hold</option>
                                    </select >
                                </div>  
                            </div>
                            <input type="submit" value = "Add Project" formTarget='_blank'/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AddProjectButton