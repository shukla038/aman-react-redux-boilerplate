import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{display:'flex'}} className='pagination'>
        {pageNumbers.map(number => (
          <li style={{
            marginLeft: '7px',
            marginRight: '7px'}}
            key={number} className='page-item'>
            <a onClick={() => paginate(number)} href={number} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;