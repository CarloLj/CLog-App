import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/projects";

const getAllPosts = () => {
  return axios.get(API_URL + "/" , { headers: authHeader() });
};

const getIntelligentPosts = () => {
  return axios.get(API_URL + "/intelligent?", { headers: authHeader()} );
};

const postService = {
  getAllPosts,
  getIntelligentPosts,
};

export default postService;