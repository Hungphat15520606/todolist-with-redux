export function shouldUpdate(state=false, action){
    if(action.type==='SHOULD_SHOW_FORM') return state=false;
    if(action.type==='BTN_GET_ITEM') return state=true;
    return state;
}