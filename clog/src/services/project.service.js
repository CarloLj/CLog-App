import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/projects";

const getIntelligentProjects = (body) => {
  let params = "?"
  console.log(body)
  for (let i = 0; i < body.length ; i++) {
    console.log(body[i])
    params += "&" + body[i]
  }
  console.log(params)
  return axios.get(API_URL + "/intelligent" + params, { headers: authHeader()} );
};

const postService = {
  getIntelligentProjects,
};

export default postService;