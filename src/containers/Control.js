
import {connect} from 'react-redux'
import Control from '../components/home/control/Control'
import * as actioncreator from '../action/actioncreator'

export default connect(null, actioncreator)(Control)
