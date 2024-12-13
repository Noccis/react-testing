import { render, screen, fireEvent } from "@testing-library/react";
import AddNoteForm from "../components/AddNoteForm";

describe("AddNoteForm Validation", () => {
  test("does not submit when fields are empty", () => {
    const mockOnAddNote = jest.fn();
    render(<AddNoteForm onAddNote={mockOnAddNote} />);

    const submitButton = screen.getByText(/Klar!/i);
    fireEvent.click(submitButton);

    expect(mockOnAddNote).not.toHaveBeenCalled();
  });
});
