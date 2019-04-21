export function searchReducer(state="", action){
    if(action.type==='SEARCH_ITEM') return action.keyWords
    return state
}