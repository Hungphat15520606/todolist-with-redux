import { connect } from 'react-redux';
import * as actioncreator from '../action/actioncreator'
import List from '../components/home/list/List'

const mapStateToProps = state => ({
    refresh:state.refresh,
    danhSach :state.danhSach, 
    filterMode: state.filterMode, 
    filterName: state.filterName, 
    keyWords:state.keyWords
  });
  
export default connect(mapStateToProps,actioncreator)(List);