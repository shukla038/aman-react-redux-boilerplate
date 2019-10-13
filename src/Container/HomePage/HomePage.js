import React from 'react';
import Header from 'Components/Header'
import PropTypes from 'prop-types';
import './HomePage.scss';
import * as Data from 'Container/HomePage/data'

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getPostsListAsync()
    }
    handleCard = (obj, index, dummyArray) => {
        window.scroll(0,0)
        this.props.history.push(`/home?${obj.TrailerURL.split('=')[1]}`)
        for(var i=0; i < dummyArray.length; i++){
            document.getElementById(`card-${i}`).className= 'reset--styling'
        }
        document.getElementById(`card-${index}`).className= 'selected--box'
    }
    render() {
        const { history } = this.props
        var dummyArray = []
       for(var key in Data[0]){
            if (Data[0].hasOwnProperty(key)){
                dummyArray.push(Data[0][key])
        }
        }
        return (
            <React.Fragment>
                <Header history={history} />
                {window.location.search ?
                    <div className='traier--video'>
                        <iframe width={'50%'} height="345"
                            src={`https://www.youtube.com/embed/${window.location.search.split('?')[1]}?autoplay=1`}>
                        </iframe>
                    </div> : ''}
                <div className='flex-container'>
                    {dummyArray.map((obj, index) =>
                        (<div key={`card--wrapper--${index}`}
                            className='card-wrapper' onClick={() => this.handleCard(obj, index, dummyArray)}>
                            <img className={`class`} id={`card-${index}`}
                                src={`https://in.bmscdn.com/events/moviecard/${obj.EventImageCode}.jpg`} />
                        </div>)
                    )
                    }
                </div>
            </React.Fragment>
        );
    }
}
HomePage.propTypes = {
    getPostsListAsync : PropTypes.func.isRequired
}
export default HomePage;


