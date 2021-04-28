import React, { useState } from "react";
import "./CreateNote.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {


const [expand, setExpand] = useState(false);


const expandIt = () => {
setExpand(true);
};

const expandOf = () => {
  setExpand(false);
  };
  


  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
      
    });
    // console.log(name);
  };

const addEvent = (event) => {
if (!note.title)
{
  alert("Please Input Title")
}else if (!note.content)
{
  alert("Please Input Note")
}else{
props.passNote(note);
alert("Successfully Create Note");
setNote ({ 
  title: "",
content: "",
});
};
};

  return (
    <>
      <div className="container" onDoubleClick={expandOf}>               

        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 main text-center">
            <form>
            {expand?
              <input
                type="text"
                name="title"
                value={note.title}
                placeholder="Title"
                autoComplete="off"
                onChange={inputEvent}
                required
              /> : null}
              <textarea
                rows=""
                column=""
                name="content"
                value={note.content}
                placeholder="Write a note..."
                onChange={inputEvent}
                required
                onClick={expandIt}
              ></textarea>
            </form>
          { expand?
            <Button onClick={addEvent}>
              <AddIcon />
            </Button>   : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
