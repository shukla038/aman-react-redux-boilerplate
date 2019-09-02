import React from 'react';
import Header from 'Components/Header'
import PropTypes from 'prop-types';
import './PostsDetailPage.scss';

class PostDetailPage extends React.Component {
    state = {
        listSize: 10
    }
    componentDidMount() {
        const { match } = this.props;
        this.props.getPostsListAsync(match.params.id)
        this.props.getCommentsListAsync(match.params.id)
    }
    addMorehandler = () => {
        this.setState({ listSize: this.state.listSize + 10 })
    }
    hanldeDelete = () => {
        const { match } = this.props;
        const body = {
            id: match.params.id
        }
        this.props.deletePostAsync(match.params.id, body).then(response => {
            if (response.success) {
                this.props.history.push('/home')
            }
        }
        )
    }
    handleComment = (e) => {
        const { match } = this.props;
        const body = {
            body: e.target.value
        }
        this.props.editCommentAsync(match.params.id, body)
    }
    render() {
        const { postsList, history } = this.props
        const postsLists = postsList.filteredPostListData.postDetailData
        console.log('postsListpostsList', postsLists)
        return (
            <React.Fragment>
                <Header history={history} />
                <div className='w3-panel w3-card card-wrapper'>
                    <div className='font-weight-bold'>
                        Title :{postsLists.title}
                    </div>
                    <div>
                        {postsLists.body}
                    </div>
                    <button onClick={this.hanldeDelete}>Delete this post</button>
                </div>
                {/* comments section           */}
                Comments :

                <ul>
                    {
                        postsList.filteredPostListData && postsList.filteredPostListData.commentsData ?
                            postsList.filteredPostListData.commentsData.slice(0, this.state.listSize).map((dataObj, index) => {
                                return (
                                    <li className='w3-panel w3-card card-wrapper' onClick={() => history.push(`/posts/${dataObj.id}`)} key={`post--${index}`}>
                                        <div className='font-weight-bold'>Name : {dataObj.name}</div>
                                        <textarea rows='6' cols='50' name='comment' form='usrform' onChange={this.handleComment}>
                                            {dataObj.body}
                                        </textarea>
                                    </li>
                                )
                            }) : null
                    }
                </ul>
                <div className='more--button'>
                    <button onClick={this.addMorehandler}>Load More</button>
                </div>

            </React.Fragment>
        );
    }
}
PostDetailPage.propTypes = {
    getPostsListAsync : PropTypes.func.isRequired,
    getCommentsListAsync: PropTypes.func.isRequired,
}
export default PostDetailPage;