import React, { Component } from 'react';


class Sort extends Component {    
    sortItem(){
        this.props.sortItem()
        this.props.refresh()
    }
    reverseItem=()=>{
        this.props.sortItem()
        this.props.danhSach.reverse()
        this.props.refresh()
    } 
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" 
                        type="button" id="dropdownMenu1" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="true">
                    Sắp Xếp  <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a href="##" role="button" onClick={()=>this.sortItem()}>
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                         Tên A-Z
                                    </span>
                                </a>
                    </li>
                    <li>
                        <a  href="##" role="button" onClick={this.reverseItem}>
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                         Tên Z-A
                                    </span>
                                </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a href="##" role="button"> Trạng Thái Kích Hoạt </a></li>
                    <li><a href="##" role="button"> Trạng Thái Ẩn </a></li>
                </ul>
            </div>
        </div>
    );}
}

export default Sort;