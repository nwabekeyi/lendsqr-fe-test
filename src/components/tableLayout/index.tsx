// components/table/Table.tsx
import React, { useState } from 'react';
import TableContent from './tableContent';
import Pagination from './pagination';
import './tableLayout.scss';

interface TableProps {
  columns: any;
  data: Array<{ [key: string]: any}>;
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="table-contain">
      <TableContent columns={columns} data={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Table;
