import { render, screen } from "@testing-library/react";
import AddNoteForm from "../components/AddNoteForm";

describe("AddNoteForm Rendering", () => {
  test("renders title input", () => {
    render(<AddNoteForm onAddNote={() => {}} />);
    const titleInput = screen.getByLabelText(/Titel:/i);
    expect(titleInput).toBeInTheDocument();
  });

  test("renders description textarea", () => {
    render(<AddNoteForm onAddNote={() => {}} />);
    const descriptionInput = screen.getByLabelText(/Text:/i);
    expect(descriptionInput).toBeInTheDocument();
  });
});
