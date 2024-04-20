'use client';
import React from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


function Paginator({totalPages,
                    onPageChangeNext,
                    currentPage,
                    onPageChangePrev,
                    visiblePageNumbers,
                    handleJumpToPage }) {

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

        


       


        {/* {
            pageNumbers.map((page, index) => {
                <div key={index}>
                    <p className='text-white'>{currentPage}</p>
                    <p className='text-white'>{page}</p>
                <button 
                 key={page}
                        onClick={() => onPageChange(page)}
                        className={` bg-white px-4 py-2 ${currentPage === page ? 'bg-slate-600' : ' '}`} >
                            Next
                </button>
               
                </div>


            })
        } */}
    </div>
  )
}

export default Paginator