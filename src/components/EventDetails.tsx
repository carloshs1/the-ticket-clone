import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetails: React.FC = () => {
 const { id } = useParams()
 return <div>EventDetails {id}</div>
}

export default EventDetails
