import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import AddProjectButton from "./AddProjectButton";
import Project from "./Project";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const paginationJump = 3;

  useEffect(() => {
    PostService.getAllPosts(currentPage, paginationJump).then(
      (response) => {
        console.log(response.data)
        setPosts(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
    <div className='view-wrapper'>   
      <div className='central-bubble-view'>
        {!posts ? "loading..." : 
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
      <input value={currentPage} onChange={() => setCurrentPage()}/>
    </div>  
  );
};

export default Home;