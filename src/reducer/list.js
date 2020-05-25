const INITIAL_STATE={
    people:[],
    movie:[],
    count:0
}
export const FETCH_PEOPLE="FETCH_PEOPLE";
export const FETCH_MOVIE="FETCH_MOVIE";

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'FETCH_PEOPLE':{
        return Object.assign({},state,{people:state.people.concat(action.payload.list),count:action.payload.count});
        }
        case 'FETCH_MOVIE':{
            return Object.assign({},state,{movie:action.payload.list,count:action.payload.count});
            }
                default:return state;
    }
   
}