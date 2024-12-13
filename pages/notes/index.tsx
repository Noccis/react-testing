import React, { useState } from "react";
import AddNoteForm from "../../components/AddNoteForm";
import ListNotes from "../../components/ListNotes";
import Header from "@/components/Header";
import styles from "@/pages/notes/NotePage.module.css";

export default function NotesPage() {
  const [notes, setNotes] = useState([
    { title: "First Note", description: "This is the first note" },
    { title: "Second Note", description: "This is the second note" },
  ]);

  const addNote = (newNote: { title: string; description: string }) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className={styles.flexColumn}>
      <Header />
      <h1>Notes Manager</h1>
      <div className={styles.flexRow}>
        <AddNoteForm onAddNote={addNote} />
        <ListNotes notes={notes} />
      </div>
    </div>
  );
}
