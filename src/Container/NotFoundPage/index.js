import { connect } from 'react-redux'
import { getRepoDetailsAsync } from './actions'
import { bindActionCreators } from 'redux'
import NotFoundPage from './NotFoundPage'

const mapStateToProps = (state) => {
    return {
      postsList: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getRepoDetailsAsync
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage)