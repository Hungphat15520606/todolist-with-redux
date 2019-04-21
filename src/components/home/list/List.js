import React, { Component } from 'react'
import Item from '../../../containers/Item'

class List extends Component {
   constructor(props){
     super(props);
     this.state={refresh:this.props.refresh}
   }
  ongetFilter=()=>{
      const {keyWords}=this.props;
      const {filterMode, filterName}=this.props
      const newItems = this.props.danhSach.filter((item)=>{
      if(filterMode==="KICH_HOAT"&&item.Status) return false;
      if(filterMode==="AN"&&!item.Status) return false
      if(filterName) return  item.Name.toLowerCase().indexOf(filterName) !== -1; 
      if (keyWords) return  item.Name.toLowerCase().indexOf(keyWords) !== -1;
        return true   
      })
    return newItems
}
  render() {
    const {filterName,filterMode, getFilterName,getFilterMode} = this.props
    return (
      <div style={{backgroundColor:'rgba(215, 250, 216, 0.76)'}}> 
        <table className="table table-bordered table-hover" >
            <thead  > 
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody style={{ fontSize:16}}>
                <tr>
                    <td></td>
                    <td>
                        <input  type="text" className="form-control" 
                                value={filterName} 
                                onChange={evt=>getFilterName(evt.target.value)}/>
                    </td>
                    <td>
                        <select className="form-control" value={filterMode} onChange={evt =>getFilterMode(evt.target.value)}>
                            <option value="TAT_CA">Tất Cả</option>
                            <option value="KICH_HOAT">Ẩn</option>
                            <option value="AN">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
{/* ----------gọi hàm map để render các item trong mảng ----------   */}
            {this.ongetFilter().map((item, index)=><Item item={item} key={item.id} index={index}/>)}                                                   
            </tbody>
        </table>
      </div>
    )
  }
}

export default List;

