import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CreateNote from "./components/createnote/CreateNote";
import Note from "./components/createnote/Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((pervData) => {
      return [...pervData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <div>
        <Header />
        <CreateNote passNote={addNote} />

        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}

        <Footer />
      </div>
    </>
  );
};

export default App;
