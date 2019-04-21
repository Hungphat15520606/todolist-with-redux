import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
             refresh: this.props.refresh,
             txtName:'',
             status:0        
        }
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const {txtName, status}= this.state;
        const newItem={
            id: Math.random() + "",
            Name : txtName,
            Status: status==1?true:false
        }
        this.props.addItem(newItem)
        this.setState({txtName:''})
    }

    updateItem=(event)=>{
        event.preventDefault();    
        const {txtName, status}= this.state;     
        const newItems = this.props.danhSach.map((item)=>{
                    if (this.props.itemActive.id!==item.id) return item ;            
                    if(item)  item={...item, Name: txtName, Status: status==1?true:false}                  
                    return item ;
                })    
        this.props.updateItem(newItems)
       // console.log(this.state.refresh)
    }

  render() {
      const {update,showForm}=this.props
    return (     
            <div className="panel panel-warning" style={{backgroundColor:'rgba(215, 250, 216, 0.76)'}}>
            <div className="panel-heading">
                <h3 className="panel-title"> {update? "Sửa công việc":"Thêm Công Việc"} 
                    <span type="button" className="fa fa-times-circle" style={{float:"right"}}
                        onClick={()=>this.props.showForm()}>
                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <form >
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control"  value={this.state.txtName} onChange={evt => this.setState({txtName:  evt.target.value})}/>
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" value={this.state.status}
                        onChange={evt => this.setState({ status: evt.target.value})}
                        >
                        <option value={1}> Kích Hoạt</option>
                        <option value={0}> Ẩn </option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button  className="btn btn-warning" onClick={update? this.updateItem:this.onSubmit} > {update?"Lưu lại":"Thêm"} </button>&nbsp;
                        <button className="btn btn-danger" onClick={()=>showForm()}>{update?"Xong":"Hủy Bỏ "} </button>
                    </div>
                </form>             
            </div>
        </div>        
     );
  }
}
export default Form;