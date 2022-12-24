import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/projectupdates";

const getProjectUpdatesWhereId = (id) => {
  return axios.get(API_URL + "/" + id, { headers: authHeader()} );
};

const postService = {
    getProjectUpdatesWhereId,
};

export default postService;