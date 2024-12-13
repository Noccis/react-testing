import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddNoteForm from "../components/AddNoteForm";

const mockOnAddNote = jest.fn();

describe("AddNoteForm Component", () => {
  test("fills in title and description and calls onAddNote with correct data", () => {
    render(<AddNoteForm onAddNote={mockOnAddNote} />);

    const titleInput = screen.getByLabelText(/Title:/i);
    const descriptionInput = screen.getByLabelText(/Description:/i);
    const submitButton = screen.getByText(/Klar!/i);

    fireEvent.change(titleInput, { target: { value: "Test Note" } });
    fireEvent.change(descriptionInput, { target: { value: "This is a test note description" } });

    fireEvent.click(submitButton);

    expect(mockOnAddNote).toHaveBeenCalledTimes(1);
    expect(mockOnAddNote).toHaveBeenCalledWith({
      title: "Test Note",
      description: "This is a test note description",
    });
  });
});
