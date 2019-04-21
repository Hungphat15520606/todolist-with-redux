export function shouldShowFormReducer(state=false, action){
    if(action.type==='SHOULD_SHOW_FORM') return !state;
    if(action.type==='BTN_GET_ITEM') return state=true
    //console.log(state)
    return state;
}