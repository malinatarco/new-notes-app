import React, {useState} from "react";

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event){
      var  {name, value} = event.target;

      setNote(prevValue => {
        return{
        ...prevValue,
        [name]:value
        }
      });

    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    return(
        <div>
        <form>
        <input
        onChange ={handleChange}
        name="title"
        value={note.title}
         placeholder="Title..."/>

    
        <textarea
        onChange ={handleChange}
        name="content"
        value={note.content}
        placeholder = "Content..."
        rows="3"
       />

       <button onClick={submitNote}>Add</button>
       </form>
        </div>
    );

}

export default CreateArea;