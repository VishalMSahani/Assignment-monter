import React from 'react'
import { Report } from '@/data'
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import Link from 'next/link';

function RecentlyGeneratedRepost() {

    
    const parseDate = (dateStr , timeStr) => {
        const [day, month , year] = dateStr.split('-').map(Number);
        const [time , period ] = timeStr.split(' ');
        const [hours, minutes] = time.split(':');

        const adjustHours = period === "AM" === "PM" ? hours+12 : hours

        return new Date(year, month - 1, day, adjustHours, minutes)
    };

    const shortedReport = [...Report].sort((b,a) => {
        
        const dateB = parseDate(b.date, b.time);
        const dateA = parseDate(a.date, a.time);

        return dateA - dateB

    });


  return (
    <div className='flex justify-center rounded-2xl my-2 bg-white mx-3 text-slate-900 max-sm:mx-0' >
        <div className='w-[100%] h-full'>

            <div className='flex justify-center mt-4 font-semibold text-xl'>
            <p>Recently Generated Reports</p>
            </div>
            
            <div className='flex justify-between items-center mt-6 py-2 bg-slate-200 w-full text-lg font-semibold'>
                <div className='flex ml-8 w-[85%] max-sm:ml-2 max-sm:gap-5'>
                    <p className='w-[25%]'>Date</p>
                    <p className='w-[60%]'>Report Name</p>
                </div>
                <p className='mr-8 w-[15%]'>Download</p>
            </div>

            {
                shortedReport.map((data , index)=>(
                    <div key={index} className='flex justify-between items-center mt-8 py-2 w-full text-sm '>
                        <div className='flex ml-8 w-[85%] max-sm:ml-2 max-sm:gap-5'>
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