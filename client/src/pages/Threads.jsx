import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Threads = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const user = useSelector((state) => state.auth.userData);

  const fetchThreads = async () => {
    try {
      const res = await axios.get("/api/threads");
      // Ensure res.data is an array before setting it to the state
      setThreads(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching threads:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?._id) return alert("Please log in first");
    try {
      const res = await axios.post("/api/threads", {
        ...newThread,
        tags: newThread.tags.split(",").map((t) => t.trim()),
        author: user._id,
      });
      // Ensure the new thread is correctly added to the state
      setThreads([res.data, ...threads]);
      setNewThread({ title: "", content: "", tags: "" });
    } catch (error) {
      console.error("Error posting a new thread:", error);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Threads</h1>

      {user ? (
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="Title"
            className="w-full mb-2 border p-2 rounded"
            value={newThread.title}
            onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
          />
          <textarea
            placeholder="Content"
            className="w-full mb-2 border p-2 rounded"
            value={newThread.content}
            onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="w-full mb-2 border p-2 rounded"
            value={newThread.tags}
            onChange={(e) => setNewThread({ ...newThread, tags: e.target.value })}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Post Thread
          </button>
        </form>
      ) : (
        <p className="text-center text-sm mb-6 text-gray-700">
          Please log in to post a thread.
        </p>
      )}

      {threads.length > 0 ? (
        threads.map((thread) => (
          <div key={thread._id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold">{thread.title}</h2>
            <p className="text-gray-700">{thread.content}</p>
            <div className="flex items-center mt-2 gap-2">
              {thread.author?.photoUrl && (
                <img
                  src={thread.author.photoUrl}
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
              )}
              <p className="text-sm text-gray-500">
                By {thread.author?.name || "Anonymous"}
              </p>
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {thread.tags.map((tag, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  #{tag}
                </span>
              ))}
            </div>
            {thread.comments.length > 0 && (
              <div className="mt-4 border-t pt-2">
                <h4 className="font-semibold text-sm mb-1">Comments:</h4>
                {thread.comments.map((c, i) => (
                  <div key={i} className="text-sm text-gray-600 mb-1">
                    <strong>{c.author?.name || "User"}:</strong> {c.content}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No threads available.</p>
      )}
    </div>
  );
};

export default Threads;
