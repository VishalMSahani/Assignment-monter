'use client';
import React from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


function Paginator({totalPages,
                    onPageChangeNext,
                    currentPage,
                    onPageChangePrev,
                    visiblePageNumbers,
                    handleJumpToPage,
                    filterPage,
                    itemPerPage}) {

    const handelChangeItemPerPage = (e) =>{
        const newItem = parseInt(e.target.value)
        filterPage(newItem)
    }

  return (
    <div className='w-full h-[80px] text-slate-800 flex justify-center gap-6 items-center border-t-[1.5px]'>

        <div>
            {
                currentPage === 1 ? null : 
                <button className='flex items-center'
                        onClick={() => 
                        onPageChangePrev()}><GrFormPrevious/>Prev</button>
            }
        </div>

        <div className='flex flex-row gap-4'>
            {   
                visiblePageNumbers.map((pageNumber) => (
                    <div key={pageNumber}>
                        <button className={`px-4 py-2 rounded-md border-[2px]
                                ${pageNumber === currentPage ? 'bg-orange-600 text-white' : ''}`}
                                onClick={() => handleJumpToPage(pageNumber)}
                                disabled={pageNumber === currentPage}>
                        {pageNumber}
                        </button>
                    </div>
                ))
            }
        </div>

        <div>
            {
                currentPage === totalPages ? null : 
                <button className='flex items-center'
                        onClick={() => 
                        onPageChangeNext()}> Next <GrFormNext/></button>
            }
        </div>

        <div>
            <label htmlFor="itemsPerPage">Rows Per Page:</label>
                <select className='px-3  py-2 border rounded-md ml-2' 
                        id="itemsPerPage" 
                        value={itemPerPage}
                        onChange={handelChangeItemPerPage}>
                    {[6, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((value) => (
                        <option
                                key={value} value={value}>
                                {value}
                        </option>
                    ))}
                </select>

        </div>
   
    </div>
  )
}

export default Paginator