import React, { useState, useEffect } from "react"
import RelevantPointService from "../services/relevantpoints.service";
import '../App.css'

const RelevantPoint = (props) => {
    const [relevantPoints, setRelevantPoints] = useState([]);
    useEffect(() => {
        RelevantPointService.getRelevantPointsWhereId(
          props.update_id
        ).then(
          (response) => {
            console.log(response.data)
            setRelevantPoints(response.data.data);
          },
          (error) => {
            console.log(error);
          }
        );
    }, [props.update_id]);
    return (
        <div>
            {!relevantPoints ? "No relevant points to show!" : 
            relevantPoints.map((updates, index) => {
                let statusBackground;
                if(updates.type.toString() === "update"){
                    statusBackground="#50EB72"
                }
                if(updates.type.toString() === "bugfix"){
                    statusBackground="#F04343"
                }
                if(updates.type.toString() === "performance"){
                    statusBackground="#3083E3"
                }
                return(
                <div> 
                    <div className='card-box' style={{ margin: 10 }}>
                        <div style={{"display": "flex" , "flex-direction": "row"}}>
                            <h4 style={{"padding-right": "10px"}}>{updates.name}</h4>
                            <div style={{"display":"inline","border-radius":"10px", "padding":"0px 5px 0px","background-color" : statusBackground, "color":"white", "font-size": 15, "font-weight": "normal"}}>{updates.type}</div>
                        </div>
                        <h4>{updates.description}</h4>
                    </div>
                    <hr style={{
                        "margin": 'auto',
                        "width":"85%",
                        "margin-left":0,
                        "border-top":"3px solid #EFF0F6"
                    }}></hr>
                </div>
                );
            })}
        </div>
    );
  };
  
  export default RelevantPoint;