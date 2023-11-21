import React from 'react'
import { Nav } from 'reactstrap';

const Pagination = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Nav>
      <ul className='pagination d-flex mx-auto'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={(e) => {
              e.preventDefault(); 
              paginate(number)
            }} 
            className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

export default Pagination;
