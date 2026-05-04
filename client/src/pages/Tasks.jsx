import { useEffect, useState } from "react";
import API from "../services/api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
    if (!title.trim()) return;
    const res = await API.post("/tasks", { title });
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const updateStatus = async (id) => {
    const res = await API.put(`/tasks/${id}`, { status: "done" });

    setTasks(
      tasks.map((t) => (t._id === id ? res.data : t))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
        />
        <button
          onClick={createTask}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((t) => (
          <div
            key={t._id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{t.title}</p>
              <p className="text-sm text-gray-500">{t.status}</p>
            </div>

            {t.status !== "done" && (
              <button
                onClick={() => updateStatus(t._id)}
                className="text-green-600 font-medium"
              >
                Mark Done
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}