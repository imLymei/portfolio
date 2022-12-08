import './globals.css'
import Header from './Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body id='home' className='bg-[#f8f8f8]'>
        <Header />
        {children}
      </body>
    </html>
  )
}
