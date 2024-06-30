// src/components/table/Pagination.tsx

import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Dropdown from '../../dropDown/dropDown';
import './pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      let startPage = Math.max(currentPage - 2, 2);
      let endPage = Math.min(currentPage + 2, totalPages - 1);

      if (startPage > 2) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span>Showing </span>
        <Dropdown
          options={[
            { value: 10, label: '10' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
            { value: 200, label: '200' }
          ]}
          value={itemsPerPage}
          onSelect={(selected: string | number) => onItemsPerPageChange(Number(selected))}
        />
        <span className="total-item"> out of {totalItems}</span>
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} className="pagination-button" disabled={currentPage === 1}>
          <IoIosArrowBack />
        </button>
        {getPageNumbers().map((pageNumber, index) =>
          pageNumber === '...' ? (
            <span key={index} className="ellipsis">
              {pageNumber}
            </span>
          ) : (
            <button
              key={index}
              className={pageNumber === currentPage ? 'active' : 'numbers'}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </button>
          )
        )}
        <button className="pagination-button" onClick={handleNextPage} disabled={currentPage === totalPages}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
