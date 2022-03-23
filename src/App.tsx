import React, { useState } from 'react'
import './css/App.css'
import { Image } from './Image'
import { Settings } from './Settings'
import { About } from './About'
import { Sidebar } from './Sidebar'
import { Text } from './Text'

function App() {
  const [mode, setMode] = useState('Image')
  let mainPage = <Image />
  function modeChange(text:string){
    setMode(text)
  }
  switch(mode) {
    case 'Image':
      mainPage = <Image />
      break
    case 'Text':
      mainPage = <Text />
      break
    case 'About':
      mainPage = <About />
      break
    case 'Settings':
      mainPage = <Settings />
      break
  }

  return (
    <div className="App">
      <div className="App-main">
        <div className='side'>
          <Sidebar change={modeChange} mode={mode}/>
        </div>
        <div className='main'>
          {mainPage}
        </div>
        
      </div>
    </div>
  )
}

export default App
