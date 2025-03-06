import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("displays the heading", () => {
    render(<App />);

    const heading = screen.getByText(/todos/i);
    expect(heading).toBeInTheDocument();
  });

  it("displays the input", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    expect(input).toBeInTheDocument();
  });

  it("renders initial todo items", () => {
    render(<App />);

    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(2);
    expect(screen.getByText(/First task/i)).toBeInTheDocument();
    expect(screen.getByText(/Second task/i)).toBeInTheDocument();
  });

  it("toggles the todo item completion", () => {
    render(<App />);
    const firstTodoButton = screen.getAllByRole("button")[0];
    expect(firstTodoButton).toHaveClass("border-gray-400");

    fireEvent.click(firstTodoButton);

    expect(firstTodoButton).toHaveClass("border-green-500");
    expect(screen.getByText(/First task/i)).toHaveClass(
      "line-through text-gray-400"
    );
    fireEvent.click(firstTodoButton);
    expect(firstTodoButton).toHaveClass("border-gray-400");
    expect(screen.getByText(/First task/i)).not.toHaveClass(
      "line-through text-gray-400"
    );
  });

  it("adds a new task", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.keyDown(inputElement, { key: "Enter" });
  
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  it("filters tasks by active", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Active"));

    expect(screen.queryByText("First task")).toBeInTheDocument();
    expect(screen.queryByText("Second task")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button")[0]);
    fireEvent.click(screen.getByText("Active"));

    expect(screen.queryByText("First task")).not.toBeInTheDocument();
  });

  it("clears completed tasks", () => {
    render(<App />);
    expect(screen.queryByText("First task")).toBeInTheDocument();
    expect(screen.queryByText("Second task")).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole("button")[0]);
    fireEvent.click(screen.getByText("Clear completed"));


    const taskList = screen.queryAllByRole("listitem");
    expect(taskList.length).toBe(1);
    expect(screen.queryByText("First task")).not.toBeInTheDocument();
  });
});
