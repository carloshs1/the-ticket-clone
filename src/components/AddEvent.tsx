import React, { FormEvent, useRef, useState } from 'react'
import { isInThePast } from '../utils/functions'
import { PhotoIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

const AddEvent: React.FC = () => {
 const flyerPickerRef = useRef<HTMLInputElement | null>(null)
 const [events, setEvents] = useState(
  localStorage.getItem('events')
   ? JSON.parse(localStorage.getItem('events')!)
   : []
 )
 const [name, setName] = useState<string>('')
 const [description, setDescription] = useState<string>('')
 const [flyer, setFlyer] = useState<string | ArrayBuffer | null>(null)
 const [date, setDate] = useState<string>('')

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (!name || !date || isInThePast(new Date(date))) return
  const newEvent = { name, date, description, flyer }
  const updatedEvents = [...events, newEvent]
  setName('')
  setDescription('')
  setFlyer(null)
  flyerPickerRef.current!.value = ''
  setDate('')
  setEvents(updatedEvents)
  localStorage.setItem('events', JSON.stringify(updatedEvents))
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
  <div className="w-full flex flex-col md:flex-row justify-end items-center md:items-start max-w-5xl mx-auto">
   <div
    className={`relative border border-gray-300 rounded w-full max-w-xs m-5 ${
     flyer ? 'h-auto' : 'aspect-[300/375]'
    } flex flex-col justify-center space-y-3`}
   >
    {flyer ? (
     <>
      <img src={flyer as string} alt="" />
      <div
       onClick={() => flyerPickerRef.current?.click()}
       className="absolute bottom-2 left-2 mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500"
      >
       <PencilIcon className="h-6 w-6 text-gray-100" />
      </div>
      <div
       onClick={() => {
        setFlyer(null)
        flyerPickerRef.current!.value = ''
       }}
       className="absolute bottom-2 right-2 mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500"
      >
       <TrashIcon className="h-6 w-6 text-gray-100" />
      </div>
     </>
    ) : (
     <>
      <p>Upload your flyer</p>
      <div
       onClick={() => flyerPickerRef.current?.click()}
       className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500"
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
     placeholder="Name of the event"
     className="w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
    />
    <input
     required
     type="date"
     min={'2022/12/01'}
     value={date}
     onChange={(e) => setDate(e.target.value)}
     placeholder="Select a date for the event"
     className="w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
    />
    <input
     required
     ref={flyerPickerRef}
     type="file"
     hidden
     onChange={addFlyerToEvent}
    />
    <textarea
     value={description}
     onChange={(e) => setDescription(e.target.value)}
     placeholder="Description"
     className="rounded min-h-[50px] max-h-40 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
    />
    {isInThePast(new Date(date)) && (
     <p className="text-red-200">Past dates are not allowed</p>
    )}
    {name && date && flyer && !isInThePast(new Date(date)) && (
     <button
      type="submit"
      disabled={!name || !date || !flyer || isInThePast(new Date(date))}
      className="w-fit ml-auto border border-gray-300 py-[8px] hover:py-[9px] px-[12px] hover:px-[13px] hover:border-none rounded-sm hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500"
     >
      Add Event
     </button>
    )}
   </form>
  </div>
 )
}

export default AddEvent
