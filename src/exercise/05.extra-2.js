// Styling
// http://localhost:3000/isolated/exercise/05.extra-1.js

import * as React from 'react'
import '../box-styles.css'

function Box({size, style, ...children}) {
  return (
    <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}} {...children} />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
