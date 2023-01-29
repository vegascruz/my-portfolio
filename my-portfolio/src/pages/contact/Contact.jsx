import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='text-center p-10'>
              <h1 className="text-6xl py-2 text-teal-600 font-medium dark:text-teal-400">Contact</h1>
              <h2 className="text-2xl py-2 text-center">Name: Vegas Cruz</h2>
              <h2 className="text-2xl py-2 text-center">Email: <a href="mailto:Vegascruz5@gmail.com">Vegascruz5@gmail.com</a></h2>
              <h2 className="text-2xl py-2 text-center">Phone Number: (608)633-4602</h2>
              <h2 className="text-2xl py-2 text-center">Mailing Address: 800a E Pearson St, Milwaukee, WI 53202</h2>
            </div>
  )
}

export default Contact