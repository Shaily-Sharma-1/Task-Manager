import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const completed = tasks.filter((t) => t.status === "done").length;
  const overdue = tasks.filter(
    (t) => new Date(t.deadline) < new Date() && t.status !== "done"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <Link
            to="/projects"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Projects
          </Link>

          <Link
            to="/tasks"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Tasks
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Total Tasks</p>
          <p className="text-2xl font-bold">{tasks.length}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Completed</p>
          <p className="text-2xl font-bold text-green-500">{completed}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Overdue</p>
          <p className="text-2xl font-bold text-red-500">{overdue}</p>
        </div>
      </div>
    </div>
  );
}