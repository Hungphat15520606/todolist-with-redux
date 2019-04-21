import React, { Component } from 'react'

 class Item extends Component {
  updateItem(item){
        this.props.getItem(item)
       // this.props.refresh()
     }
  render() {
      const {index, item, removeItem,toggleStatus}= this.props;
    return (  
        <tr key={item.id}>
            <td style={{textAlign:'center'}}>{index+1}</td>
            <td>{item.Name}</td>
            <td className="text-center">
                <span className={item.Status? "label label-success":"label label-danger"} onClick={()=>toggleStatus(item.id)}>
                            {item.Status? "Kích hoạt" : "Ẩn"}
                        </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={()=>this.updateItem(item)}>
                    <span className="fa fa-pencil mr-5"></span>  Sửa 
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={()=>removeItem(item.id)}>
                    <span className="fa fa-trash mr-5" ></span>  Xóa 
                </button>
            </td>
        </tr> 
    )
  }
}
export default Item;