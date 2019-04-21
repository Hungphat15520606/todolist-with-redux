import { connect } from 'react-redux';
import Form from '../components/home/form/Form'
import * as actioncreator from '../action/actioncreator'

const mapStateToProps= state=>({
    refresh: state.refresh,
    update: state.update, 
    itemActive:state.itemActive, 
    danhSach:state.danhSach
})
export default connect(mapStateToProps,actioncreator)(Form);