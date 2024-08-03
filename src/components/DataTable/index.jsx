"use client"
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CustomPagination from "./_components/paginationComponent"

const customStyles = {
    header: {
        style: {
            zIndex: 1,
        }

    },
    rows: {
        style: {
            background: "#F7F6FE",
            width: "full",

        }
    },
    headCells: {
        style: {
            padding: '8px',
        },
    },
    cells: {
        style: {
            padding: '8px',
        },
    },
    pagination: {

        // Styling for the pagination component
        style: {
            marginTop: '10px',
            background: '#f0f0f0',
            color: '#333',
            padding: '10px',
            borderRadius: '5px',
        }

    },
    paginationButton: {
        // Styling for the pagination buttons
        style: {
            color: '#333',
            border: '#ccc',
            '&:hover': {
                background: '#ddd',
            },
        }

    },
    paginationActiveButton: {
        // Styling for the active pagination button
        style: {
            background: '#007bff',
            color: '#fff',
            borderColor: '#007bff',
            '&:hover': {
                background: '#0056b3',
                border: '#0056b3',
            }

        },
    },
    paginationPage: {
        // Styling for the pagination page numbers
        style: {
            color: '#333',
            border: '#ccc',
            '&:hover': {
                background: '#ddd',
            }

        },
    },
    paginationActivePage: {
        // Styling for the active pagination page number
        style: {
            background: '#007bff',
            color: '#fff',
            borderColor: '#007bff',
            '&:hover': {
                background: '#0056b3',
                borderColor: '#0056b3',
            },
        }

    },
};
function CustomDataTable({ columns, rows, havePagenation, pagesView }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(pagesView); // Number of items per page


    // Calculate total pages based on data length and items per page
    const totalPages = Math.ceil(rows.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    // Calculate the slice of data to display based on currentPage and itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = rows.slice(startIndex, endIndex);
    const conditionalRowStyles = [
        {
            when: (row) => row.id % 2 === 0,
            style: {
                background: '#FFFFFF', // Light gray for even rows
            },
        },
        {
            when: (row) => row.id % 2 !== 0,
            style: {
                background: '#F7F6FE', // White for odd rows
            },
        },
    ];

    return (
        <>
            <div className="container custom-data-table">
                {havePagenation ? <DataTable
                    className="data-table-container"
                    columns={columns}
                    data={slicedData}
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    pagination
                    paginationPerPage={itemsPerPage}
                    paginationComponent={({ currentPage }) => (
                        <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    )}
                /> : <DataTable
                    className="data-table-container"
                    columns={columns}
                    data={rows}
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                />}
            </div>

        </>
    );
}

export default CustomDataTable;