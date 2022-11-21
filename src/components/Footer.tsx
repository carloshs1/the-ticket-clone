import React from 'react'

const Footer: React.FC = () => {
 return (
  <div className="flex flex-col items-center p-2 space-y-5 sm:flex-row sm:justify-between">
   <div className="text-xs text-center space-y-1 sm:text-left">
    <p>Help</p>
    <p>Privacy Policy</p>
    <p>Refund Policy</p>
    <p>
     Use us for your <strong>Event Ticketing</strong>
    </p>
    <p>Get funding for your Event or Venue</p>
   </div>
   <div className="flex h-fit items-center gap-2">
    <div className="bg-white w-fit h-8 flex justify-center items-center rounded">
     <img
      src="http://www.clker.com/cliparts/l/c/S/3/X/q/pay-american-express.svg.hi.png"
      alt=""
      className="h-auto w-12 p-2 "
     />
    </div>
    <div className="bg-white w-fit h-8 flex justify-center items-center rounded">
     <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
      alt=""
      className="h-auto w-12 p-2 "
     />
    </div>
    <div className="bg-white w-fit h-8 flex justify-center items-center rounded">
     <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
      alt=""
      className="h-auto w-12 p-2 "
     />
    </div>
    <div className="bg-white w-fit h-8 flex justify-center items-center rounded">
     <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/1280px-Discover_Card_logo.svg.png"
      alt=""
      className="h-auto w-12 p-2 "
     />
    </div>
   </div>
  </div>
 )
}

export default Footer
