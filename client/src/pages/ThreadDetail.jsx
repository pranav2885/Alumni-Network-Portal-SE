import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchThreads, likeThread, addComment } from "../reducers/threadSlice";

const ThreadDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.threads);
  const user = useSelector((state) => state.auth.user);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(fetchThreads());
  }, [dispatch]);

  const thread = items.find((t) => t._id === id);
  if (!thread) return <p className="p-6">Thread not found.</p>;

  const handleLike = () => {
    dispatch(likeThread({ id, userId: user._id }));
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    await dispatch(addComment({ id, content: comment, author: user._id }));
    setComment("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{thread.title}</h1>
      <p className="text-gray-600 mt-2">{thread.content}</p>
      <p className="text-sm text-gray-500 mt-1">
        Posted by {thread.author?.name} • {new Date(thread.createdAt).toLocaleString()}
      </p>

      <div className="mt-4">
        <button onClick={handleLike} className="text-blue-600 font-medium">
          👍 {thread.likes.length} Like{thread.likes.length !== 1 && "s"}
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <form onSubmit={handleComment} className="mb-4">
          <textarea
            className="w-full border p-2 rounded h-24"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="mt-2 bg-green-600 text-white px-4 py-1 rounded">
            Add Comment
          </button>
        </form>
        {thread.comments.map((c) => (
          <div key={c._id} className="border-t py-2">
            <p className="text-gray-800">{c.content}</p>
            <p className="text-sm text-gray-500">
              by {c.author?.name} • {new Date(c.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreadDetail;
