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

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
