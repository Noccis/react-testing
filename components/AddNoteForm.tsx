import React, { useState } from "react";
import styles from "./AddNoteForm.module.css"; 

export default function AddNoteForm({ onAddNote }: { onAddNote: (note: { title: string; description: string }) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onAddNote({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.h2}>Lägg till:</h2>
      <div>
        <label className={`${styles.label} ${styles.flex}`}>
          Titel:
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className={`${styles.label} ${styles.flex}`}>
          Text:
          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <button className={styles.button}
      type="submit">Klar!</button>
    </form>
  );
}
