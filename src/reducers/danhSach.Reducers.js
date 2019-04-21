const defaultDS =[
    { id : 's1', Name : "Học lập trình reactjs", Status : true },
    { id: 's2', Name : "Luyện nói tiếng anh", Status : true },
    { id: 's3', Name: "Chơi guitar", Status : true }
]

export function danhSachReducer(state=defaultDS, action){
    if(action.type==='SORT_ITEM'){     
        const newItems= state.sort((a, b)=>{
            if (a.Name.toLowerCase() < b.Name.toLowerCase()) {return -1;}
            if (a.Name.toLowerCase() > b.Name.toLowerCase()) {return 1;}
            return 0;
        });
        return newItems;            
    }
    if (action.type==='REMOVE_ITEM'){
        const newWords=state.filter((item)=>item.id!==action.id)
        return newWords;
    }
    if(action.type==='TOGGLE_STATUS'){
        const newItems = state.map((item)=>{
            if (action.id!==item.id) return item
            return {...item, Status: !item.Status}      
        })
        return newItems
    }
    if(action.type==='ADD_ITEM'){
        const newItems = state.concat(action.newItem)
        return newItems;
    }
// mục đích thay đổi state(defaultDS) thành newItem(có phần từ đc update)
    if(action.type==='UPDATE_ITEM'){
        return action.item
    }
    return state;
}

