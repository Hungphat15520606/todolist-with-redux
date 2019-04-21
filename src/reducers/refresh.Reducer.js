export function refreshReducer(state=false,action){
    if(action.type==='REFRESH') return !state;
    return state
}