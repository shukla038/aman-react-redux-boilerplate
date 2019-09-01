import React from 'react';
import Fuse from "fuse.js";
import Header from 'Components/Header'
import './HomePage.scss';

const fuseOptions = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 50,
    maxPatternLength: 12,
    minMatchCharLength: 3,
    keys: ['title', 'body']
  };
  
class HomePage extends React.Component {
    state = {
        query: '',
        postsLists:[]
      };
    componentDidMount(){
        this.props.getPostsListAsync()
    }
    onChange = (e) => {
        if(e){
        this.setState({ query: e.target.value });
        }
      }
    render() {
        const { postsList, history } = this.props
        const postsListsObj = postsList && postsList.postListData && postsList.postListData.postData
        const fuse = new Fuse(postsListsObj, fuseOptions);
        const data = this.state.query ? fuse.search(this.state.query) : postsListsObj;
        console.log('data', data)
        return (
            <React.Fragment>
                <Header history={history}/>
                <input placeholder={'Search ...'} onChange={this.onChange} />
                <ul>
                {
                  data.map((dataObj, index) => {
                        return (
                                <li className='w3-panel w3-card card-wrapper' onClick={ () => history.push(`/posts/${dataObj.id}`)} key={`post--${index}`}>
                                    <div className='font-weight-bold'>{dataObj.title}</div>
                                    <div>{dataObj.body}</div>
                                </li>
                        )
                    })
                }
                </ul>
            </React.Fragment>
        );
    }
}

export default HomePage;


