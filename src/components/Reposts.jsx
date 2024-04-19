import React from 'react'
import { Report } from '@/data'
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import Link from 'next/link';

function RecentlyGeneratedRepost() {
  return (
    <div className='flex justify-center rounded-2xl my-2 bg-white mx-3 text-slate-900' >
        <div className='w-[100%] h-full'>

            <div className='flex justify-center mt-4 font-semibold text-xl'>
            <p>Recently Generated Reports</p>
            </div>
            
            <div className='flex justify-between items-center mt-6 py-2 bg-slate-200 w-full text-lg font-semibold'>
                <div className='flex ml-8 w-[85%]'>
                    <p className='w-[25%]'>Date</p>
                    <p className='w-[60%]'>Report Name</p>
                </div>
                <p className='mr-8 w-[15%]'>Downloads</p>
            </div>

            {
                Report.map((data , index)=>(
                    <div key={index} className='flex justify-between items-center mt-8 py-2 w-full text-sm '>
                        <div className='flex ml-8 w-[85%]'>
                            <div className='w-[25%]'>
                                <p className='text-sm'>{data.date}</p>
                                <p className='text-xs'>{data.time}</p>
                            </div>
                            <p className='w-[60%]'>{data.report}</p>
                        </div>
                        <div className='mr-8 w-[15%] text-slate-800 '>
                            <Link href={data.file_url}>
                                <BsFillFileEarmarkArrowDownFill size={23} color='grey' />
                            </Link>
                        </div>
                
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default RecentlyGeneratedRepost