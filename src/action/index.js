import * as service from '../service/listService';
export const getAllUserAction=(params)=>{
    return (dispatch)=>{
        service.getAllUser(params)
        .then((response)=>{
            debugger
            if(response.status===200){     
               dispatch({
                   type:'FETCH_PEOPLE',
                   payload:{list:response.data.results,count:response.data.count}
             });
            }
            console.log(response)
          
        }).catch((error)=>{
           
            if(error.response){
                console.log(error.response)
            }
        })
    }
    }

    export const getAllMovieAction=(params)=>{
        return (dispatch)=>{
            service.getAllMovie(params)
            .then((response)=>{
                if(response.status===200){     
                   dispatch({
                       type:'FETCH_MOVIE',
                       payload:{list:response.data.results,count:response.data.count}
                 });
                }
                console.log(response)
              
            }).catch((error)=>{
                if(error.response){
                    console.log(error.response)
                }
            })
        }
        }