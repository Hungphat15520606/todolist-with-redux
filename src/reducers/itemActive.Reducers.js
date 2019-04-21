export function itemActiveReducers(state=null,action){
    if (action.type==='BTN_GET_ITEM') return action.item
    return state;
}