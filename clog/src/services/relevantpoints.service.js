import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/relevantpoints";

const getRelevantPointsWhereId = (id) => {
  return axios.get(API_URL + "/" + id, { headers: authHeader()} );
};

const relevantPointsService = {
    getRelevantPointsWhereId,
};

export default relevantPointsService;