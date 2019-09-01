import { connect } from 'react-redux'
import { getPostsListAsync, getCommentsListAsync } from './actions'
import { bindActionCreators } from 'redux'
import PostsDetailPage from './PostsDetailPage'

const mapStateToProps = (state) => {
    return {
      postsList: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostsListAsync,
        getCommentsListAsync,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetailPage)