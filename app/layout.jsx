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
      <body>
        <Header />
        <div className='h-px bg-green-400 w-full'></div>
        {children}
      </body>
    </html>
  )
}
