import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='h-[100vh] bg-[#f8f8f8] flex justify-center items-center'>
      <h1 className='text-5xl text-[#36f1cd] font-bold'>Cultured</h1>
    </div>
    <div className='h-[100vh] bg-black flex justify-center items-center'>
      <div className='text-5xl text-[#f8f8f8] font-bold'>Black</div>
    </div>
    <div className='h-[100vh] bg-[#037171] flex justify-center items-center'>
      <div className='text-5xl text-[#f8f8f8] font-bold'>Skolbeloff</div>
    </div>
    </>
  )
}
