import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
        <div className='w-screen   h-screen duration-200  ' style={{backgroundColor : color }}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl'>
              <button  onClick={ ()=> setColor("red")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "red"}}> Red </button>
              <button  onClick={ ()=> setColor("green")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "green"}}>Green </button>
              <button  onClick={ ()=> setColor("blue")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "blue"}}>Blue  </button>
              <button  onClick={ ()=> setColor("yellow")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "yellow"}}>Yellow  </button>
              <button  onClick={ ()=> setColor("orange")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "orange"}}> Orange  </button>
              <button  onClick={ ()=> setColor("brown")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "brown "}}> Brown </button>
              <button  onClick={ ()=> setColor("purple")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "purple"}}> purple  </button>


              <button  onClick={ ()=> setColor("black")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "black"}}> Black  </button>
              <button  onClick={ ()=> setColor("pink")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "pink"}}> pink  </button>
              <button  onClick={ ()=> setColor("gray")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "gray"}}>Gray  </button>
              <button  onClick={ ()=> setColor("lavender")} className="outline-none px-4  rounded-full text-white shadow-sm" style={{backgroundColor : "lavender"}}> Lavender  </button>
              
               </div>

          </div>
        </div>
    </>
  )
}

export default App
