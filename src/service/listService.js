import baseService from './baseService';

export function getAllUser(params){
    return baseService.get('/people',{
        params: {
         ...params
         }});
}
export function getAllMovie(params){
    return baseService.get('/films',{
        params: {
            ...params
            }
    });
}

export function getSingleUser(id){
    return baseService.get(`/people/${id}`);
}
export function getSingleMovie(id){
    return baseService.get(`/films/${id}`);
}
