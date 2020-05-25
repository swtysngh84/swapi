import * as service from '../service/listService';
export const getAllUserAction=(params)=>{
    return (dispatch,getState)=>{
        service.getAllUser(params)
        .then((response)=>{
            if(response.status===200){     
                debugger
                const person=[
                    ...getState().list.people,
                    ...response.data.results
                ]
               dispatch({
                   type:'FETCH_PEOPLE',
                   payload:{list:person,count:response.data.count}
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

        export const saveCurrentView=(params)=>{
            return (dispatch)=>{ 
                       dispatch({
                           type:'CURRENT_VIEW',
                           payload:params
                });
            }

}

export const getSingleUserAction=(params)=>{
    return (dispatch)=>{
        service.getSingleUser(params)
        .then((response)=>{
            debugger
            if(response.status===200){     
                dispatch({
                    type:'CURRENT_VIEW',
                    payload:response.data
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

    export const getSingleMovieAction=(params)=>{
        return (dispatch)=>{
            service.getSingleMovie(params)
            .then((response)=>{
                if(response.status===200){     
                    dispatch({
                        type:'CURRENT_VIEW',
                        payload:response.data
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