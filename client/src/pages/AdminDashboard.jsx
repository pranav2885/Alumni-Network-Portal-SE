import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [alumni, setAlumni] = useState([]);
  const [events, setEvents] = useState([]);
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/alumni').then(res => setAlumni(res.data));
    axios.get('/api/events').then(res => setEvents(res.data));
    axios.get('/api/discussions').then(res => setDiscussions(res.data)); // If discussions route exists
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <section>
        <h2>📋 Alumni Records</h2>
        <ul>
          {alumni.map((a) => (
            <li key={a._id}>{a.name} - {a.email}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>📅 Events</h2>
        <ul>
          {events.map((e) => (
            <li key={e._id}>
              <strong>{e.title}</strong> — {new Date(e.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>💬 Discussions</h2>
        <ul>
          {discussions.map((d) => (
            <li key={d._id}>{d.topic} — {d.author}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;
