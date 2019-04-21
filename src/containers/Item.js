import { connect } from 'react-redux';
import * as actioncreator from '../action/actioncreator';
import Item from '../components/home/item/Item'

const mapStateToProps = state => ({
    refresh: state.refresh
})
export default connect(mapStateToProps,actioncreator)(Item);