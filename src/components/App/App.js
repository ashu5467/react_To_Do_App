import React, {useState} from 'react'
import List from '../Util/List'

const bodyContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'lightblue',
    padding: '10px',
}

const todoListContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    borderRadius: '10px',
    width: '600px',
    boxShadow: '5px 10px #808080',
}

function App() {
  return (
    <div style={bodyContainer}>
        <div style={todoListContainer}>
            <h1> My To-Do List</h1>

            {/* LIST */}
            <List/>
        </div>
    </div>
  )
}

export default App
