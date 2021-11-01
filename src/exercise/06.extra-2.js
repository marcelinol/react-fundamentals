// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/final/06.extra-2.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const usernameInputRef = React.useRef()

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={handleChange}
          id="usernameInput"
          type="text"
          ref={usernameInputRef}
        />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
