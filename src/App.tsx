import { useState } from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className="flex flex-col w-full h-screen"
        style={{
          backgroundImage: 'url("/img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="flex flex-row items-center justify-between w-full h-20 bg-opacity-50 text-white pt-6 pl-6 pr-6"
        >
          <h1
            className="font-mono text-3xl">
            Sequoia
          </h1>
          <button
            className={"flex flex-col gap-y-2 cursor-pointer rounded-2xl bg-opacity backdrop-blur-sm p-4 shadow-white" + (toggle ? " animate-active" : " animate-reverse")}
            onClick={() => setToggle(!toggle)}
          >
            <span className="bg-white w-[1.2rem] h-[0.2rem] rounded-sm"></span>
            <span className="bg-white w-[1.2rem] h-[0.2rem] rounded-sm"></span>
          </button>
        </div>
        <div className="flex flex-row w-full justify-end items-center pr-6">
          {toggle && <div 
            className="flex flex-col items-center justify-center w-1/5 bg-opacity backdrop-blur-sm shadow-white rounded-xl overflow-hidden"
          >
            <a 
              className="w-full text-white flex flex-row items-center justify-between cursor-pointer hover-bg-opacity py-4 px-8"
            >
              <span className="font-mono text-xl">About us</span>
              <svg className="before-rotate" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"/></svg>
            </a>
            <a 
              className="w-full text-white flex flex-row items-center justify-between cursor-pointer hover-bg-opacity py-4 px-8"
            >
              <span className="font-mono text-xl">Work</span>
              <svg className="before-rotate" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"/></svg>
            </a>
            <a 
              className="w-full text-white flex flex-row items-center justify-between cursor-pointer hover-bg-opacity py-4 px-8"
            >
              <span className="font-mono text-xl">Services</span>
              <svg className="before-rotate" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"/></svg>
            </a>
            <a 
              className="w-full text-white flex flex-row items-center justify-between cursor-pointer hover-bg-opacity py-4 px-8"
            >
              <span className="font-mono text-xl">Contact</span>
              <svg className="before-rotate" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"/></svg>
            </a>
          </div>}
        </div>
      </div>
    </>
  )
}

export default App
