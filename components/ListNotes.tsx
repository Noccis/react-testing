import React from "react";
import styles from "./ListNotes.module.css";

export default function ListNotes({
  notes,
}: {
  notes: { title: string; description: string }[];
}) {
  return (
    <div className={styles.notesList}>
      <h2 className={styles.listTitle}>Kom ihåg lista:</h2>
      <ul className={styles.noteList}>
        {notes.map((note, index) => (
          <li key={index} className={styles.noteItem}>
            <h3 className={styles.noteTitle}>{note.title}</h3>
            <p className={styles.noteDescription}>{note.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
