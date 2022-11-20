import React, { FormEvent, useRef, useState } from 'react'
import { isInThePast } from '../utils/functions'
import { PhotoIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { EventType } from '../utils/types'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

const AddOrEditEvent: React.FC = () => {
 const navigate = useNavigate()
 const { id } = useParams()
 const flyerPickerRef = useRef<HTMLInputElement | null>(null)
 const events: EventType[] = localStorage.getItem('events')
  ? JSON.parse(localStorage.getItem('events')!)
  : []
 const event: EventType | null =
  events && id
   ? events.filter((currentEvent: EventType) => currentEvent.id === id)[0]
   : null
 const [name, setName] = useState<string>(event ? event.name! : '')
 const [description, setDescription] = useState<string>(
  event ? event.description! : ''
 )
 const [flyer, setFlyer] = useState<string | ArrayBuffer | null>(
  event ? event.flyer! : null
 )
 const [date, setDate] = useState<string>(event ? event.date! : '')

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (!name || !date || isInThePast(new Date(date))) return
  const newEvent: EventType = {
   name,
   date,
   description,
   flyer: flyer as string,
   id: event ? event.id : uuid(),
  }
  const updatedEvents: EventType[] = event
   ? events.map((currentEvent: EventType) =>
      currentEvent.id === event.id ? newEvent : currentEvent
     )
   : [...events, newEvent]
  setName('')
  setDescription('')
  setFlyer(null)
  flyerPickerRef.current!.value = ''
  setDate('')
  localStorage.setItem('events', JSON.stringify(updatedEvents))
  navigate(`/event/${newEvent.id}`)
 }

 const addFlyerToEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
  const reader = new FileReader()
  if (e.target.files![0]) {
   reader.readAsDataURL(e.target.files![0])
  }
  reader.onload = (readerEvent) => {
   setFlyer(readerEvent.target?.result!)
  }
 }

 return (
  <div className="w-full max-w-5xl mx-auto">
   <h1 className="py-5 text-4xl md:text-5xl">
    {event ? 'Edit your' : 'Add a new'}{' '}
    <span className="text-orange-400">event</span>
   </h1>
   <div className="w-full flex flex-col justify-end items-center md:flex-row md:items-start">
    <div
     className={`relative border rounded w-full max-w-xs m-5 ${
      flyer
       ? 'h-auto ring-2 ring-green-600 border-green-600'
       : 'aspect-[300/375] border-gray-300'
     } flex flex-col justify-center space-y-3 bg-[#3b3b3b]`}
    >
     {flyer ? (
      <>
       <img src={flyer as string} alt="Flyer" className="rounded" />
       <div
        onClick={() => flyerPickerRef.current?.click()}
        className="absolute bottom-2 left-2 mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500 background-animate"
       >
        <PencilIcon className="h-6 w-6 text-gray-100" />
       </div>
       <div
        onClick={() => {
         setFlyer(null)
         flyerPickerRef.current!.value = ''
        }}
        className="absolute bottom-2 right-2 mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500 background-animate"
       >
        <TrashIcon className="h-6 w-6 text-gray-100" />
       </div>
      </>
     ) : (
      <>
       <p>Start with a cool flyer!</p>
       <div
        onClick={() => flyerPickerRef.current?.click()}
        className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 cursor-pointer bg-gradient-to-r from-orange-300 to-red-500 background-animate"
       >
        <PhotoIcon className="h-6 w-6 text-gray-100" />
       </div>
      </>
     )}
    </div>
    <form
     className="flex flex-col w-full lg:max-w-xl p-5 space-y-10"
     onSubmit={handleSubmit}
    >
     <input
      required
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="What's the name of the event?"
      className={`w-full rounded border border-gray-300 focus:outline-none focus:ring-2 ${
       name
        ? 'focus:ring-green-600 ring-2 ring-green-600 outline-none border-green-600'
        : 'focus:ring-blue-600'
      } focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed`}
     />
     <input
      required
      type="datetime-local"
      min={'2022/12/01'}
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className={`w-full rounded border border-gray-300 focus:outline-none focus:ring-2 ${
       date
        ? isInThePast(new Date(date))
          ? 'focus:ring-red-600 ring-2 ring-red-600 outline-none border-red-600'
          : 'focus:ring-green-600 ring-2 ring-green-600 outline-none border-green-600'
        : 'focus:ring-blue-600'
      } focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed`}
     />
     <input
      ref={flyerPickerRef}
      type="file"
      hidden
      onChange={addFlyerToEvent}
     />
     <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
      className={`rounded min-h-[218px] max-h-fit border border-gray-300 focus:outline-none focus:ring-2 ${
       description
        ? 'focus:ring-green-600 ring-2 ring-green-600 outline-none border-green-600'
        : 'focus:ring-blue-600'
      } focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed`}
     />
     {isInThePast(new Date(date)) && (
      <p className="text-red-500">Past dates are not allowed</p>
     )}
     {name && date && flyer && !isInThePast(new Date(date)) ? (
      <button
       type="submit"
       disabled={!name || !date || !flyer || isInThePast(new Date(date))}
       className="w-fit ml-auto border border-gray-300 py-[8px] hover:py-[9px] px-[12px] hover:px-[13px] hover:border-none rounded-sm hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500"
      >
       {event ? 'Update Event' : 'Add Event'}
      </button>
     ) : (
      <p className="text-red-300">
       Name, Date and Flyer are required to continue
      </p>
     )}
    </form>
   </div>
  </div>
 )
}

export default AddOrEditEvent
