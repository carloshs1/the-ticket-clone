import React from 'react'
import { Link } from 'react-router-dom'
import { createDate, createDayOfTheWeek } from '../utils/functions'
import { EventType } from '../utils/types'

const Events: React.FC = () => {
 const events: EventType[] = localStorage.getItem('events')
  ? JSON.parse(localStorage.getItem('events')!)
  : []
 return (
  <div className="w-full flex flex-col items-center max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
   <h1>UPCOMING EVENTS</h1>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2 items-center w-full md:p-5">
    {events?.map((event: EventType) => (
     <div
      key={event.id}
      className={`w-full max-w-xs col-span-1 aspect-[310/448] bg-gradient-to-tr from-orange-300 to-red-500`}
     >
      <Link to={`/event/${event.id}`}>
       <img
        src={event.flyer}
        alt="Event Flyer"
        className="aspect-square object-contain cursor-pointer"
       />
      </Link>
      <div className="w-full aspect-[310/138] bg-[#494b52] p-2">
       <div className="w-full aspect-[304/56] overflow-hidden">
        <Link to={`/event/${event.id}`} className="hover:text-white">
         <p className="text-white text-xl font-bold text-left title-clamp-2 overflow-hidden">
          {event.name}
         </p>
        </Link>
       </div>
       <div className="w-full aspect-[304/40]">
        <p className="text-left font-extrabold text-md text-[#ffa46b]">
         {createDate(event.date)}
        </p>
        <p className="text-left text-xs">{createDayOfTheWeek(event.date)}</p>
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Events
