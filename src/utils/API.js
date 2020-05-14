import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
