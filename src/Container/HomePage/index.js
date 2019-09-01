import { connect } from 'react-redux'
import { getPostsListAsync } from './actions'
import { bindActionCreators } from 'redux'
import HomePage from './HomePage'

const mapStateToProps = (state) => {
    return {
      postsList: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostsListAsync
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)