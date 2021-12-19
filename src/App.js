import Tasks from "./components/Tasks";
import PageLayout from "./components/PageLayout";

import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const addTask = (text) => setTasks([...tasks, { text: text, state: false }]);
  const clearTasks = () => setTasks([]);
  const clearDoneTasks = () => setTasks(tasks.filter((task) => !task.state));
  const checkTask = (id) =>
    setTasks(
      tasks.map((task, i) =>
        i === id ? { ...task, state: !task.state } : task
      )
    );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const TasksHeader = (
    <header className="d-flex justify-content-between align-items-center">
      <div className="fs-3">Your tasks</div>
      <div className="d-flex gap-2">
        <Button
          variant="outline-secondary"
          className="btn-sm"
          onClick={clearTasks}
        >
          Clear all
        </Button>
        <Button
          variant="outline-secondary"
          className="btn-sm"
          onClick={clearDoneTasks}
        >
          Clear completed
        </Button>
      </div>
    </header>
  );

  return (
    <div className="App">
      <PageLayout>
        {TasksHeader}
        <Tasks items={tasks} onAddTask={addTask} onCheckTask={checkTask} />
      </PageLayout>
    </div>
  );
}

export default App;
