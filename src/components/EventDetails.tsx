import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { createDate, createDayOfTheWeek, createTime } from '../utils/functions'
import { EventType } from '../utils/types'
import { TicketIcon } from '@heroicons/react/24/solid'

const EventDetails: React.FC = () => {
 const { id } = useParams()
 const event: EventType = localStorage.getItem('events')
  ? JSON.parse(localStorage.getItem('events')!).filter(
     (event: EventType) => event.id === id
    )[0]
  : {}
 return (
  <div className="px-3 py-5 space-y-3">
   <h1 className="text-2xl text-white text-left">{event.name}</h1>
   <p className="text-left text-sm">{`${createDayOfTheWeek(
    event.date
   )}, ${createDate(event.date, false)} ,${createTime(event.date)}`}</p>
   <div className="space-y-5">
    <div className="space-y-5">
     <div className="border-white border-2">
      <img src={event.flyer} alt="Flyer" />
     </div>
     <div className="bg-gray-50 pt-2 pb-5 px-5 space-y-2">
      <div className="flex space-x-1">
       <TicketIcon className="h-6 w-6 text-gray-600" />
       <p className="text-gray-600">
        GET <span className="font-bold">TICKETS</span>
       </p>
      </div>
      <div className="h-14 inset-shadow rounded bg-gray-200 flex justify-between p-2">
       <div className="flex flex-col justify-between">
        <p className="text-left font-bold text-sm text-gray-600">GENERAL</p>
        <p className="text-left text-xs text-gray-600">
         MXN$380 <span className="text-[7.7px]">{'(gastos incl.)'}</span>{' '}
        </p>
       </div>
       <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block px-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
       </select>
      </div>
     </div>
    </div>
    <div className="bg-white">
     <p className="text-gray-500 text-left text-sm p-5">{event.description}</p>
    </div>
    <div className="flex justify-between">
     <Link to={`/event/${id}/edit`} className="text-sm">
      <button className="text-sm border border-gray-300 py-[8px] hover:py-[9px] px-[12px] hover:px-[13px] hover:border-none rounded-sm hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500">
       Edit your event
      </button>
     </Link>
     <button className="text-sm border border-gray-300 py-[8px] hover:py-[9px] px-[12px] hover:px-[13px] hover:border-none rounded-sm hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500">
      Delete your event
     </button>
    </div>
   </div>
  </div>
 )
}

export default EventDetails
