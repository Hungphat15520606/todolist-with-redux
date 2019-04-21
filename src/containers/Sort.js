
import Sort from '../components/home/sort/Sort'
import * as actioncreator from '../action/actioncreator'
import { connect } from 'react-redux';
const mapStateToProps = state => ({
    danhSach :state.danhSach
});
export default connect(mapStateToProps, actioncreator)(Sort)