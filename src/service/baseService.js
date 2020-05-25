import axios from 'axios';
export const baseUrl="https://swapi.dev/api/";
const baseService=axios.create({
    baseURL:baseUrl
});
export default baseService;