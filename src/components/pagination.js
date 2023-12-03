import React from 'react';

const Pagination = ({ page, totalPages, handlePageChange }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(0)} disabled={page === 0}>
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>

        {[...Array(totalPages).keys()].map((pageNum) => (
          <li key={pageNum} className={`page-item ${page === pageNum ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(pageNum)}>
              {pageNum + 1}
            </button>
          </li>
        ))}

        <li className={`page-item ${page === totalPages - 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(totalPages - 1)} disabled={page === totalPages - 1}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
