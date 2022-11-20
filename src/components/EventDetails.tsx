import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createDate, createDayOfTheWeek, createTime } from '../utils/functions'
import { EventType } from '../utils/types'
import { TicketIcon } from '@heroicons/react/24/solid'
import { v4 as uuid } from 'uuid'

const EventDetails: React.FC = () => {
 const navigate = useNavigate()
 const { id } = useParams()
 const events: EventType[] = localStorage.getItem('events')
  ? JSON.parse(localStorage.getItem('events')!)
  : []
 const event: EventType =
  events.filter((event: EventType) => event.id === id)[0] || {}
 const handleDelete = () => {
  const newEvents = events.filter(
   (currentEvent: EventType) => currentEvent.id !== event.id
  )
  localStorage.setItem('events', JSON.stringify(newEvents))
  navigate('/')
 }
 return (
  <div className="relative">
   <div className="px-3 py-5 mx-auto space-y-3 md:w-[748px] lg:w-[964px]">
    <h1 className="text-2xl text-white text-left md:text-3xl md:font-medium">
     {event.name}
    </h1>
    <p className="text-left text-sm md:text-xl">{`${createDayOfTheWeek(
     event.date
    )}, ${createDate(event.date, false)} ,${createTime(event.date)}`}</p>
    <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
     <div className="flex flex-col gap-5 md:max-w-[228px] lg:max-w-[300px] md:flex-col-reverse md:space-y-0">
      <div className="border-white border-2 shadow-md shadow-gray-900">
       <img src={event.flyer} alt="Flyer" className="w-full" />
      </div>
      <div className="bg-gray-50 pt-2 pb-5 px-5 space-y-2 shadow-md shadow-gray-900">
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
     <div className="w-full md:max-w-[476px] lg:max-w-[620px] space-y-5">
      <div className="bg-white p-5 shadow-md shadow-gray-900 md:h-min">
       {event.description?.split('\n').map((line) =>
        !line ? (
         <p key={uuid()} className="h-5" />
        ) : (
         <p key={uuid()} className="text-gray-500 text-left text-sm">
          {line}
         </p>
        )
       )}
      </div>
      <div className="flex justify-between md:justify-end md:space-x-3">
       <Link to={`/event/${id}/edit`} className="text-sm">
        <button className="font-semibold text-sm border border-gray-300 py-[8px] hover:py-[9px] px-[12px] hover:px-[13px] hover:border-none rounded-sm hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500 md:text-base">
         Edit your event
        </button>
       </Link>
       <button
        className="font-semibold text-sm border border-gray-300 py-[8px] hover:py-[9px] px-[12px] hover:px-[13px] hover:border-none rounded-sm hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500"
        onClick={handleDelete}
       >
        Delete your event
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="w-full h-full absolute top-0 left-0 bottom-0 overflow-hidden -z-10 blur-3xl opacity-70">
    <img src={event.flyer} alt="Background" className="w-full h-full" />
   </div>
  </div>
 )
}

export default EventDetails
