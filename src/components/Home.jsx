import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen items-center flex flex-col justify-between'>
        <div className='grid max-w-[1240px] mt-36 md:mt-64'>
            <div className='flex flex-col justify-center w-full px-4 sm:mt-8'>
                <h1 className='mb-12 text-5xl md:text-6xl lg:text-7xl text-center'>Content</h1>
                <p className='mb-8 text-xl text-center'>This will be content.</p>
            </div>
            <div className='text-center'>
                :3
            </div>
        </div>
    </div>
  )
}

export default Home;