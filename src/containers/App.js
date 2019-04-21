import { connect } from 'react-redux';
import App from '../components/app/App';
import * as actioncreator from '../action/actioncreator'

const mapStateToProps = state =>({
    shouldShowForm: state.shouldShowForm, 
    shouldUpdate: state.shouldUpdate, 
    danhSach:state.danhSach
})
export default connect(mapStateToProps,actioncreator)(App);