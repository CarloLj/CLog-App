import React from 'react'
import '../App.css'
const Project = (props) => {
    return (
        <div className='projectCard'>
            <div style={{ maxWidth: 345, margin: 10}}>
                {props.name}
                {props.description}
                {props.created_at}
                {props.status}
            </div>
        </div>
    );
  };
  
  export default Project;