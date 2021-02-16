import { connect } from 'react-redux'
import { getRepoDetailsAsync, getAllIssuesAsync } from './actions'
import { bindActionCreators } from 'redux'
import HomePage from './HomePage'

const mapStateToProps = (state) => {
    return {
      postsList: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getRepoDetailsAsync,
        getAllIssuesAsync
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)