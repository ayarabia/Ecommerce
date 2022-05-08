export default function productReducer(state=[],action){
    if(action.type==='FETCH-DATA'){
       state= action.payload;
    }
    return state;
}