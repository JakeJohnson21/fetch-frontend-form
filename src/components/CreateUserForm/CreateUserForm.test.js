import { render, screen } from "@testing-library/react";
import CreateUserForm from "./CreateUserForm";

const firstNameInput = screen.getByPlaceholderText("First name");

describe("Input and select elements of form are required to be submitted", () => {
  test("first name has a value", () => {
    expect(firstNameInput("")).toBe(false);
    expect(firstNameInput(1)).toBe(false);
    expect(firstNameInput("Aj")).toBe(true);
    expect(firstNameInput("Mary Anne")).toBe(true);
  });
});
