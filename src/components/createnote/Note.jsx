import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="container-fluid note-container">
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-3 note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <Button onClick={deleteNote}>
              <DeleteOutlineIcon />
            </Button>
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Note;
