import React, { useState } from 'react'
import "./CreateNote.css"
const CreateNote = ({add}) => {
    const namelist={
        title:"",
        content:""

    }
    const [note,setNote]=useState(namelist)

    const inputEvent=(e)=>{
        const {name,value}=e.target;
        setNote((pValue)=>{
                return{
                    ...pValue,
                    [name]:value
                }
        })
    }

    const submiited=(e)=>{
        setNote({
            title:"",
            content:""
    
        })
        e.preventDefault()
        add(note)
    }
  return (
    <div>
            <div className="createNote">
                    <form action="" onSubmit={submiited}>

                    <input type="text"  placeholder='TITLE 📖' name='title' value={note.title} onChange={inputEvent}/>
                    <textarea name="content" id="" cols="30" rows="10" placeholder='Write a Note' value={note.content} onChange={inputEvent} ></textarea>
                    <button className='addBtn' type='submit'>Add</button>
                    </form>
            </div>
    </div>
  )
}

export default CreateNote
