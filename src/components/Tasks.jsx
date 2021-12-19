import { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";

const Tasks = ({ items, onAddTask, onCheckTask }) => {
  const [input, setInput] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (input) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <main className="d-flex flex-column bg-dark rounded shadow mt-2 p-2">
      {/* Items */}
      {items.map((item, i) => (
        <div
          className="d-flex gap-2 mb-2 p-2 ps-2 fs-5"
          style={{ borderBottom: "2px solid #333" }}
          key={i}
        >
          <Form.Check checked={item.state} onChange={() => onCheckTask(i)} />
          {item.text}
        </div>
      ))}
      {/* Add Items */}
      <form className="d-flex" onSubmit={(e) => submit(e)}>
        <FormControl
          type="text"
          placeholder="New item"
          maxLength={30}
          className="bg-dark border-dark text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="outline-secondary" type="submit">
          Add
        </Button>
      </form>
    </main>
  );
};

export default Tasks;
