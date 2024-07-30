import React from 'react'
import SideBar from '../HomePage/SideBar'
import DisplaySection from '../HomePage/DisplaySection'

function Home() {
  return (
    <div className="flex gap-2">
      <SideBar />
      <div className='flex justify-center w-full'>
        <DisplaySection />
      </div>
    </div>
  );
}

export default Home