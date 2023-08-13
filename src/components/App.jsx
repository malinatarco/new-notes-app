import React, {useState} from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevValues => {
            return [...prevValues, newNote];
        });
        console.log(notes);
    }

    function deleteNote(id){
        setNotes(prevValues => {
            return prevValues.filter((noteItem, index) => {
            return id!==index})
        })
    }
    return(
        <div>
            <Header/>
            <CreateArea
                onAdd = {addNote}
            />
          {  notes.map((note, index) => (
            <Note
                key = {index}
                id = {index}
                title ={note.title}
                content = {note.content}
                onDelete= {deleteNote}
            />
          ))
          }
           
        </div>
    );
}

export default App;