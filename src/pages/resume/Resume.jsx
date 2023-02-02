import React from 'react'
import './resume.css'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import filePDF from './IT Resume.pdf'

const Resume = () => {
  return (
    <>
    <div className='text-center p-10'>
        <h1 className="text-6xl py-2 text-teal-600 font-medium dark:text-teal-400">Resume
        </h1>
    </div>
    <a href={filePDF} className="text-4xl py-2 text-teal-600 ml-2"><u>My Resume</u> </a>
    <div className='items-center py-2 sm:w-5/5 md:w-4/5 lg:w-3/5'>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <Viewer fileUrl={filePDF} />;
    </Worker>
    </div>

</>
  )
}

export default Resume