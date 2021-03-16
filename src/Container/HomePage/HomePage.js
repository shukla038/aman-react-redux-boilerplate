import React from 'react';
import Header from 'Components/Header'
import PropTypes from 'prop-types';
import './HomePage.scss';
import * as Data from 'Container/HomePage/data';
import styled from 'styled-components';
import Pagination from './Pagination';

const CardWrapper = styled.figure`
    background: #F2F2F2;
    float: left;
    display: block;
    position: relative;
    border-radius: 5px;
    width: 100%;
    padding-top: 100%;
    cursor: pointer;
`

export const PokeDexCard = ({detailsLink, pokeImage, name, id, ...props}) => {
    return(
        <CardWrapper
        onClick={()=> window.open(`/details/${id}`)}
        >
            <a>
                <h1>{name}</h1>
                <img src={pokeImage} />
            </a>
        </CardWrapper>
    )
}
const HomePage = (props) => {
    const [pokeDexData, setPokeDexData] = React.useState([]);
    const [pageOffset, setPageOffset] = React.useState(1);
    const [pageItemsLimit, setPageItemsLimit] = React.useState(10);

    React.useEffect(() => {
        props.getPostsListAsync(props.match.params.pageId, pageItemsLimit).then((res) => setPokeDexData( res.payload))
      }, []);

    const paginate = pageNumber => props.history.push(pageNumber);

    if(pokeDexData.results && pokeDexData.results.length){
            return (
                <React.Fragment>   
                    <div className="list" id="list">
                        <ul className="results">
                        {pokeDexData.results.map((item, index)=>
                            <li key={index} className="result-items">
                            <PokeDexCard
                            id={item.url.split("/")[6]}   
                            name={item.name}
                            />
                            </li>
                        )
                        }
                        </ul> 
                    </div>
                    <Pagination
                        postsPerPage={pageItemsLimit}
                        totalPosts={pokeDexData.count}
                        paginate={paginate}
                    />
                </React.Fragment>
            );
        }
        return(
            <div>Data Not Found</div>
        ) 
}
HomePage.propTypes = {
    getPostsListAsync : PropTypes.func.isRequired
}
export default HomePage;


