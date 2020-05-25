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
