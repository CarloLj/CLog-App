import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/projects";

const getAllPosts = () => {
  return axios.get(API_URL + "/" , { headers: authHeader() });
};

const getIntelligentPosts = (body) => {
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
  getAllPosts,
  getIntelligentPosts,
};

export default postService;