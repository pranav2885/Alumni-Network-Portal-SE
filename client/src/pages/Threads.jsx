import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Threads = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({ title: "", content: "", tags: "" });
  const [showForm, setShowForm] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [selectedThread, setSelectedThread] = useState(null);

  const user = useSelector((state) => state.auth.userData);

  const fetchThreads = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/threads");
      setThreads(res.data);
    } catch (error) {
      console.error("Error fetching threads:", error);
      alert("Failed to fetch threads. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?._id) return alert("Please log in first");

    try {
      const res = await axios.post("http://localhost:5500/api/threads", {
        ...newThread,
        tags: newThread.tags.split(",").map((t) => t.trim()),
        author: user._id,
      });
      setThreads([res.data, ...threads]);
      setNewThread({ title: "", content: "", tags: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error posting a new thread:", error);
      alert("Failed to post the thread. Please try again.");
    }
  };

  const handleCommentSubmit = async (threadId) => {
    if (!newComment.trim()) return;
    try {
      await axios.post(`http://localhost:5500/api/threads/${threadId}/comments`, {
        content: newComment,
        author: user._id,
      });
      setNewComment("");
      fetchThreads();
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to post the comment. Please try again.");
    }
  };

  const handleLikeThread = async (threadId) => {
    try {
      await axios.post(`http://localhost:5500/api/threads/${threadId}/like`, {
        userId: user._id,
      });
      fetchThreads();
    } catch (error) {
      console.error("Error liking thread:", error);
      alert("Failed to like the thread. Please try again.");
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Threads</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          Post a Thread
        </button>
      </div>

      {user && showForm && (
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
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit Thread
          </button>
        </form>
      )}

      {threads.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {threads.map((thread) => (
            <div
              key={thread._id}
              className={`bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer ${
                thread.author?._id === user?._id ? "border-2 border-blue-500 bg-blue-50" : ""
              }`}
              onClick={() => setSelectedThread(thread)}
            >
              <h2 className="text-xl font-semibold">{thread.title}</h2>
              <p className="text-gray-700 line-clamp-3">{thread.content}</p>
              <div className="flex items-center mt-2 gap-2">
                {thread.author?.photoUrl && (
                  <img src={thread.author.photoUrl} alt="avatar" className="w-6 h-6 rounded-full" />
                )}
                <p className="text-sm text-gray-500">By {thread.author?.name || "Anonymous"}</p>
              </div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {thread.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeThread(thread._id);
                }}
              >
                Like ({thread.likes.length})
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No threads available.</p>
      )}

      {selectedThread && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
          <div className="bg-white max-w-2xl w-full mx-4 p-6 rounded-2xl shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedThread(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedThread.title}</h2>
            <p className="text-gray-800 mb-4">{selectedThread.content}</p>
            <div className="flex items-center gap-2 mb-2">
              {selectedThread.author?.photoUrl && (
                <img
                  src={selectedThread.author.photoUrl}
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
              )}
              <p className="text-sm text-gray-600">
                By {selectedThread.author?.name || "Anonymous"}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mb-4">
              {selectedThread.tags.map((tag, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  #{tag}
                </span>
              ))}
            </div>
            <button
              className="mb-4 bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={() => handleLikeThread(selectedThread._id)}
            >
              Like ({selectedThread.likes.length})
            </button>

            <h3 className="font-semibold mb-2">Comments:</h3>
            <div className="max-h-40 overflow-y-auto">
              {selectedThread.comments.length > 0 ? (
                selectedThread.comments.map((comment, i) => (
                  <div key={i} className="bg-gray-100 p-2 mb-2 rounded">
                    <p className="text-sm">{comment.content}</p>
                    <p className="text-xs text-gray-500">By {comment.author?.name || "Anonymous"}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm">No comments yet.</p>
              )}
            </div>
            {user && (
              <div className="mt-2">
                <textarea
                  placeholder="Write a comment..."
                  className="w-full mb-2 border p-2 rounded"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => handleCommentSubmit(selectedThread._id)}
                >
                  Post Comment
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Threads;
