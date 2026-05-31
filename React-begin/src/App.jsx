import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  let [length, setLength] = useState(5)
  let [isNumberA, setIsNumberA] = useState(false)
  let [ischaracterA, setIscharacterA] = useState(false)
  let [password, setPassword] = useState()
  const passwordRef = useRef(null)

  const passwordGeneretor = useCallback((fn) => {

    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx"

    if (isNumberA) str += '0123456789'
    if (ischaracterA) str += '!@#$%^&*|:;?.,~`'

    for (let index = 1; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, isNumberA, ischaracterA, setPassword])



  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)


  }, [password])


  useEffect(() => {
    passwordGeneretor()
  }, [length, isNumberA, ischaracterA, passwordGeneretor])



  return (
    <>


      <div className='h-full max-w-md mx-auto shadow-md font-serif  text-center  rounded-lg px-4 my-8 p-20   text-orange-500 bg-gray-400' >

        <div className='rounded-lg flex overflow-hidden mb-4'>
          <input

            type='text'
            value={password}
            className='outline-none w-full  py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}

          />
          <button onClick={copyPassword} className='outline-none bg-black  text-white px-3 py-0.5 shrink-0' >copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumberA}
              id="numberInput"
              onChange={() => {
                setIsNumberA((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={ischaracterA}
              id="characterInput"
              onChange={() => {
                setIscharacterA((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>



        </div>

      </div>

    </>
  )
  
}


export default App
