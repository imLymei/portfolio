import Image from 'next/image'

export default function Home() {
{/*const navStatus = sessionStorage.getItem('navStatus');*/}

  return (
    <div className='bg-noise'>
      <div className='h-[100vh] bg-black/95 flex justify-center items-center'>
        <div className='text-5xl text-[#f8f8f8] font-bold'>What</div>
      </div>
      <div className='h-[100vh] bg-black/95 flex justify-center items-center'>
        <div className='text-5xl text-[#f8f8f8] font-bold'>Do</div>
      </div>
      <div className='h-[100vh] bg-black/95 flex justify-center items-center'>
        <div className='text-5xl text-[#f8f8f8] font-bold'>Whe</div>
      </div>
      <div className='h-[100vh] bg-black/95 flex justify-center items-center'>
        <div className='text-5xl text-[#f8f8f8] font-bold'>Want?</div>
      </div>
    </div>
  )
}
