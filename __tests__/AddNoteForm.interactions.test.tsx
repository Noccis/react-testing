import { render, screen, fireEvent } from "@testing-library/react";
import AddNoteForm from "../components/AddNoteForm";

describe("AddNoteForm Interactions", () => {
  test("fills in title and description and submits", () => {
    const mockOnAddNote = jest.fn();
    render(<AddNoteForm onAddNote={mockOnAddNote} />);

    const titleInput = screen.getByLabelText(/Title:/i);
    const descriptionInput = screen.getByLabelText(/Description:/i);
    const submitButton = screen.getByText(/Klar!/i);

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
    fireEvent.click(submitButton);

    expect(mockOnAddNote).toHaveBeenCalledWith({
      title: "Test Title",
      description: "Test Description",
    });
  });
});
