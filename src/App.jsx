import React, { useState } from 'react'
import "./App.css"
import Header from './SGOOGLE/Header'
import Footer from './SGOOGLE/Footer'
import CreateNote from './SGOOGLE/CreateNote'
import Note from './SGOOGLE/Note'
const App = () => {
  const[noteList,setNoteList]=useState([])

  const add=(note)=>{
    setNoteList((pVlaue)=>{
        return [...pVlaue,note]
    })
  }

  const removeOne=(id)=>{
    setNoteList((pValue)=>{
      let updateNoteLIst=pValue.filter((value,index)=>{
          return index!==id
      })
      return updateNoteLIst
    })
  }

  return (
    <div>
      <Header/>
      <CreateNote add={add}/>

        <div className="noteData">
            
      {noteList.map((value,index)=>{
        return <Note 
        key={index} 
        id={index}
        title={value.title}
        content={value.content}
        removeOne={removeOne}


        />
      })}
        </div>
      <Footer/>
    </div>
  )
}

export default App
