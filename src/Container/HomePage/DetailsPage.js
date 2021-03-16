import React, { useCallback, useState } from 'react';
import Header from 'Components/Header'
import PropTypes from 'prop-types';
import './HomePage.scss';
import { getDetailsListAsync} from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



const DetailsPage = (props) => {
    const [detailData, setDetailData] = useState(null);
    React.useEffect(() => {
        props.getDetailsListAsync(props.match.params.itemId).then((res) => setDetailData(JSON.parse(JSON.stringify(res.payload))));
    }, []);
    if(detailData){
        return (
            <React.Fragment>
                <div className="detail-wrapper">
                <div className="left--block">
                    <img src={detailData.sprites.front_default}/>
                </div>
                <div className="right--block">
                    <h1>Height : {detailData.height}</h1>
                </div>
            </div>
            </React.Fragment>
        );
    } else{
        return(
            'Data Not found'
        )
    }
    }
DetailsPage.propTypes = {
    getDetailsListAsync : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
      postsList: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getDetailsListAsync
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)


