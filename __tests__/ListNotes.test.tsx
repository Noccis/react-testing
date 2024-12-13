import React from "react";
import { render, screen } from "@testing-library/react";
import ListNotes from "../components/ListNotes"; 

const mockNotes = [
  { title: "Note 1", description: "Description for note 1" },
  { title: "Note 2", description: "Description for note 2" },
];

describe("ListNotes Component", () => {
  test("renders the notes list with title and description", () => {
    render(<ListNotes notes={mockNotes} />);

    const listTitle = screen.getByText(/Kom ihåg lista:/i);
    expect(listTitle).toBeInTheDocument();

    mockNotes.forEach((note) => {
      const title = screen.getByText(note.title);
      const description = screen.getByText(note.description);

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  test("renders no notes message when the list is empty", () => {
    render(<ListNotes notes={[]} />);

    // Om listan är tom, kontrollera att inget anteckningselement visas
    const noNotesMessage = screen.queryByText(/Kom ihåg lista:/i);
    expect(noNotesMessage).toBeInTheDocument();

    const noteItems = screen.queryAllByRole("listitem");
    expect(noteItems).toHaveLength(0);
  });
});
