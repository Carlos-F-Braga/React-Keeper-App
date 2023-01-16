import React, { useState }from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes((currentNotes) => {
      return [...currentNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNotes((currentNotes) => {
      return currentNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
