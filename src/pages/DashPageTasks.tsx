import { useState } from "react";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

function DashPageTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Estudar React", done: false },
    { id: 2, title: "Criar componente de Login", done: true },
  ]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = (): void => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tarefas</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border px-2 py-1 rounded w-full text-gray-400"
          placeholder="Nova tarefa"
        />
        <button
          onClick={addTask}
          className="bg-blue-700 text-white px-4 py-1 rounded"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 text-gray-400 p-2 rounded"
          >
            <div>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <span className={task.done ? "line-through text-gray-500" : ""}>
                {task.title}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Apagar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashPageTasks;
