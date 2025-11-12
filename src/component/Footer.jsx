import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-gray-600 text-white shadow-inner pt-10 py-20'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mx-auto max-w-6xl'>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Smart things</h1>
                <p>20 Smart things with us</p>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>About</h1>
                <p>For people who interesting in smart things</p>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Contact</h1>
                <p>Email: thaiapp322@gmail.com</p>
                <p>Instragram: _srtjpd</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer