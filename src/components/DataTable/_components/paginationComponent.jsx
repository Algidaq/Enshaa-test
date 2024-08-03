const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from(Array(totalPages), (item, index) => index + 1);
    //${currentPage === page ?"bg-[#03C7F3]":"bg-[#E0E0E0]"}
    const handlePageChange = (page) => {
        onPageChange(page); // Call onPageChange prop to update currentPage
    };
    console.log("currentPage   =    " + currentPage)
    return (
        <div id="pag" className=" flex flex-row items-center justify-center gap-2 p-[10px]">
            {pages.map((page,i) => (
                <button key={i+1} onClick={() => handlePageChange(page)} className={`flex pages justify-center items-center rounded-[8px] w-[31px] h-[31px] text-sm px-5 py-2.5 text-center font-medium 
                ${currentPage === page ? "bg-[#03C7F3]" : "bg-[#E0E0E0]"}`}>
                    <p>{page}</p>
                </button>
            ))}
            <button className="text-[12px] text-[#9E9E9E]" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>

            <button className="text-[12px] text-[#9E9E9E]" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>

        </div>
    );
};
export default CustomPagination;