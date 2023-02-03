import React from 'react'
import './resume.css'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import filePDF from './IT Resume.pdf'

const Resume = () => {
  return (
    <>
    <div className='text-center p-10'>
        <a href={filePDF} className="animate-pulse text-6xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-xl ml-8
     hover:from-pink-500 hover:to-yellow-500 active:from-red-700 active:to-orange-600" target="_blank">
      
      Click Me 
     
     </a>
    </div>
    <div className='items-center py-2 sm:w-5/5 md:w-4/5 lg:w-3/5'>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <Viewer fileUrl={filePDF} />;
    </Worker>
    </div>

</>
  )
}

export default Resume