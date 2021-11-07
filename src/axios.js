import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//The axios create method allows you to ghave the base URL
// Already written For example if you write
//  instance.get('/anything')
// it will be written as (BASEURL/anything)
