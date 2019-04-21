import Search from '../components/home/search/Search'
import * as actioncreator from '../action/actioncreator'
import { connect } from 'react-redux';

export default connect(null, actioncreator)(Search)