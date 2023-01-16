import React, { useState } from "react";

function CreateArea(props) {
    const baseBody = {
      title: '',
      content: ''
    }

    const [note, setNote] = useState(baseBody)

    const handleChange = (event) => {
        const {name, value} = event.target

        setNote((currentNote) => {
            return {
                ...currentNote,
                [name]: value
            }
        })
    }

    const submitNote = (event) => {
        props.onAdd(note)
        event.preventDefault()
        setNote(baseBody)
    }

  return (
    <div>
      <form>
        <input name="title"  onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;