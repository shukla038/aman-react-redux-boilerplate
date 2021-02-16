import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import * as Data from 'Container/HomePage/data'

class HomePage extends React.Component {
    state = {
        currentPage: 1,
        issuesPerPage: 60,
        Issues:[],
        totalIssues: null
    }
    onPagechange = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
          }, () => {
            const { getRepoDetailsAsync , match} = this.props;
            getRepoDetailsAsync({
                repo : match.path.slice(1),
                issueType: 'open',
                perPage: this.state.issuesPerPage,
                page: this.state.currentPage
            }).then((response)=> {
                this.setState({ Issues : response.payload.items})
            })
          });
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.Issues !== this.state.Issues){
            this.setState({ Issues : this.state.Issues})   
        }
    }
    componentDidMount() {
        const { getRepoDetailsAsync, getAllIssuesAsync , match} = this.props;
        
        getRepoDetailsAsync({
            repo : match.path.slice(1),
            issueType: 'open',
            perPage: this.state.issuesPerPage,
            page: this.state.currentPage
        }).then((response)=> {
            this.setState({ Issues : response.payload.items})
        });

        getAllIssuesAsync().then(response => this.setState({totalIssues : response.payload.open_issues_count}));
    }
    
    render() {
        const { history } = this.props;
        const { Issues, currentPage, issuesPerPage } = this.state;
        const renderIssues = Issues.length && Issues.map((Issue, index) => {
          return <li onClick={()=> window.open(Issue.html_url)} key={index}>{Issue.title}</li>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.totalIssues / issuesPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.onPagechange}
              >
                {number}
              </li>
            );
          });
          console.log('renderIssues----',renderIssues)
        return (
            <React.Fragment>
            <ul className="issues--list">
              {renderIssues}
            </ul>
            <ul className="page-numbers">
              {renderPageNumbers}
            </ul>
            </React.Fragment>
        );
    }
}
HomePage.propTypes = {
    getRepoDetailsAsync : PropTypes.func.isRequired,
    getAllIssuesAsync : PropTypes.func.isRequired
}
export default HomePage;


