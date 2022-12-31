import React, { useState } from 'react'
import './time.css'

const Time = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    
    const [ctime, setCtime] = useState(time)
    const [cdate, setCdate] = useState(date)

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    const UpdateDate = () => {
        date = new Date().toLocaleDateString()
        setCdate(date)
    }

    setInterval(UpdateTime,1000)
    setInterval(UpdateDate,600000)

  return (
    <div>
        <div className='time' >
            {ctime}
        </div>
        <div className='date' >
            {cdate}
        </div>
    </div>
  )
}

export default Time