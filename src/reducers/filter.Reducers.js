 export function filterReducer(state='TAT_cA',action){
    if(action.type==='SET_FILTER') return action.filterMode
    return state
}