export default function countReducer(state=0,action){
    if(action.type==='INCRESE'){
       state=state+1;
    }
    if(action.type==='DECRESE' && state>0){
    state=state-1;
     }
    return state;
}