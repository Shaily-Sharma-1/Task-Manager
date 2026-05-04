import { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const createProject = async () => {
    if (!title.trim()) return;
    const res = await API.post("/projects", { title });
    setProjects([...projects, res.data]);
    setTitle("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          onClick={createProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Create
        </button>
      </div>

      <div className="grid gap-3">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-white p-4 rounded-lg shadow flex justify-between"
          >
            <span>{p.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}