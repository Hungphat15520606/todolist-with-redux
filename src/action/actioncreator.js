export function addItem( newItem ){
    return { type : 'ADD_ITEM' , newItem }
}

export function removeItem(id){
    return { type : 'REMOVE_ITEM', id }
}

export function toggleStatus( id ){
    return { type : 'TOGGLE_STATUS' , id }
}

export function sortItem(){
    return { type : 'SORT_ITEM' }
}

export function updateItem(item){
    return { type : 'UPDATE_ITEM' , item }
}

export function searchItem( keyWords ){
    return { type : 'SEARCH_ITEM' , keyWords }
}

export function getFilterMode( filterMode ){
    return { type: 'SET_FILTER', filterMode }  
}

export function getFilterName( filterName ){
    return { type : 'FILTER_NAME', filterName }
}

export function showForm(){
    return { type : 'SHOULD_SHOW_FORM' }
}

export function refresh(){
    return { type : 'REFRESH' }
}
export function getItem(item){
    return { type : 'BTN_GET_ITEM',item } 
}
