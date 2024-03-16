import React from 'react'
import "./Note.css"
const Note = ({id,title,content,removeOne}) => {
    const remove=(()=>{
        removeOne(id)
        console.log(id)
    })
  return (
    <div>
        <div className="note">
                <h1>{title}</h1>
                <br /><br />
                <p>{content}</p>
                <button className='delete' onClick={remove}>Remove</button>
        </div>
    </div>
  )
}

export default Note
