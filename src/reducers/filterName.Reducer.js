export function filterNameReducer(state="", action){
    if(action.type==='FILTER_NAME') return action.filterName
    return state
}