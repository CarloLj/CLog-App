import React, { useState, useEffect } from "react";
import PostService from "../services/project.service";
import AddProjectButton from "./AddProjectButton";
import Project from "./Project";
import { Button, Stack } from '@mui/material';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [nameFilter, setNameFilter] = useState("");
  const [descriptionFilter, setDescriptionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [creatorFilter, setCreatorFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");


  const [projectsSize, setProjectsSize] = useState(0);
  const paginationJump = 4;

  function addPage(){
    setCurrentPage(currentPage + 1)
  };

  function previousPage(){
    if(currentPage>0){
      setCurrentPage(currentPage - 1)
    }
  };
            
  useEffect(() => {
    const filterArr = [];
    if(creatorFilter !== ''){
      filterArr.push("creator_name="+creatorFilter.toString())
    }
    if(descriptionFilter !== ''){
      filterArr.push("description="+descriptionFilter.toString())
    }
    if(nameFilter !== ''){
      filterArr.push("name="+nameFilter.toString())
    }
    if(statusFilter !== ''){
      filterArr.push("status="+statusFilter.toString())
    }
    if(dateFilter !== ''){
      filterArr.push("created_at="+dateFilter.toString())
    }
    if(currentPage >= 0){
      filterArr.push("current_page="+currentPage)
    }
    if(paginationJump >= 1){
      filterArr.push("pagination_jump="+paginationJump)
    }
    filterArr.push("order_arrange=DESC","project_field=created_at")
    PostService.getIntelligentProjects(
      filterArr
    ).then(
      (response) => {
        setPosts(response.data.data.results);
        setProjectsSize(response.data.data.filtered_projects_size)
      },
      (error) => {
        console.log(error);
      }
    );
  }, [currentPage, creatorFilter, descriptionFilter, nameFilter, statusFilter, dateFilter]);

  return (
    <div>
    <div 
      style={{
        "display": "flex", 
        "justify-content": "center",
        "margin": "5px",
      }}>
        <Stack direction="row" spacing={2} flexDirection="center">
          <input style={{"text-align": 'center'}} value={nameFilter} title={"Name filter"} onChange={(event) => setNameFilter(event.target.value)} placeholder="Filter by name..."/>
          <input style={{"text-align": 'center'}} value={descriptionFilter} title={"Description filter"} onChange={(event) => setDescriptionFilter(event.target.value)} placeholder="Filter by description..."/>
          <input style={{"text-align": 'center'}} value={statusFilter} title={"Status filter"} onChange={(event) => setStatusFilter(event.target.value)} placeholder="Filter by status..."/>
          <input style={{"text-align": 'center'}} value={creatorFilter} title={"Creator filter"} onChange={(event) => setCreatorFilter(event.target.value)} placeholder="Filter by creator..."/>
          <input type="date" value={dateFilter} onChange={() => setDateFilter()} />
        </Stack>
    </div> 
    <div className='view-wrapper'>   
      <div className='central'>
        {!posts ? "No projects to show!" : 
          posts.map((project, index) => {
            return(
              <Project
                key={index}
                creator_id={project.creator_id} 
                project_id={project.project_id} 
                status={project.status} 
                name={project.name} 
                description={project.description}
              />
            );
          })}
        </div>
        <AddProjectButton/>
      </div>
      <div 
      style={{
        "display": "flex", 
        "justify-content": "center",
        "margin": "5px",
      }}>
        <Stack direction="row" spacing={2} flexDirection="center">
          <Button disabled={currentPage<=0} onClick={() => previousPage()} variant="outlined">
            -
          </Button>
          <input style={{"text-align": 'center'}} value={(currentPage+1).toString()+"/"+Math.ceil(projectsSize/paginationJump).toString()} disabled={true} title={"CurrentPage"}/> 
          <Button disabled={(projectsSize <= paginationJump*(currentPage+1) && (projectsSize <= paginationJump*(currentPage+2)))} onClick={() => addPage()} variant="outlined">
            +
          </Button>
        </Stack>
      </div> 
    </div> 
  );
};

//((currentPage+2)*paginationJump > projectsSize)
export default Home;