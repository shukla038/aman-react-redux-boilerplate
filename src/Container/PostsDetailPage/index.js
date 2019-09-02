import { connect } from 'react-redux'
import { getPostsListAsync, getCommentsListAsync, deletePostAsync, editCommentAsync } from './actions'
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
        deletePostAsync,
        editCommentAsync
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetailPage)