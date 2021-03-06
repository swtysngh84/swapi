const INITIAL_STATE={
    people:[],
    movie:[],
    currentView:{},
    count:0
}
export const FETCH_PEOPLE="FETCH_PEOPLE";
export const FETCH_MOVIE="FETCH_MOVIE";
export const CURRENT_VIEW="CURRENT_VIEW";

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'FETCH_PEOPLE':{
        return Object.assign({},state,{people:action.payload.list,count:action.payload.count});
        }
        case 'FETCH_MOVIE':{
            return Object.assign({},state,{movie:action.payload.list,count:action.payload.count});
            }
        case 'CURRENT_VIEW':{
                return Object.assign({},state,{currentView:action.payload});
        }
            
                default:return state;
    }
   
}