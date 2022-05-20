import React from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{get_first_line(note)}</h4>
      </div>
    </div>
  ));

  function get_first_line(note) {
    let count = 0;
    let first_line = "";
    while (note.body[count] != "\n" && count < note.body.length) {
      first_line += note.body[count];
      count++;
      console.log(note.body[count]);
    }
    return first_line;
  }

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
