import React from 'react';
import Header from 'Components/Header'
import './PostsDetailPage.scss';

class PostDetailPage extends React.Component {
    componentDidMount(){
        const { match }= this.props;
        this.props.getPostsListAsync(match.params.id)
        this.props.getCommentsListAsync(match.params.id)
    }
    render() {
        const { postsList, history } = this.props
        const postsLists = postsList.filteredPostListData.postDetailData
        console.log('postsListpostsList', postsLists)
        return (
            <React.Fragment>
                <Header history={history}/>
                <div className='w3-panel w3-card card-wrapper'>
                    <div className='font-weight-bold'>
                        {postsLists.title}
                    </div>
                    <div>
                        {postsLists.body}
                    </div>
                </div>
                {/* comments section           */}
                Comments :


            </React.Fragment>
        );
    }
}

export default PostDetailPage;