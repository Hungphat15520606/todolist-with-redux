import React, { Component } from 'react';
import Form from '../../containers/Form'
import Control from '../../containers/Control'
import List from '../../containers/List'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            updateItem:null,
        }
    }
  render() {
      const {shouldShowForm}= this.props;
    return (
        <div className="container" style={{ marginTop:80, backgroundColor:'#f3fff02e'}}>
            <div className="text-center" style={{ color:'#fff'}}>
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {shouldShowForm? <Form />:null}             
                </div>
                <div className={shouldShowForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button type="button" className="btn btn-primary" style={{marginBottom:10}}
                     onClick={()=>this.props.showForm()}>
                   
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                    <div className="row mt-15">
                        <Control/>
                    </div>
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <List/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App