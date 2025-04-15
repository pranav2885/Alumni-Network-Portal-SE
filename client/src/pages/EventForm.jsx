import { useState } from 'react';
import axios from 'axios';

function EventForm() {
  const [event, setEvent] = useState({ title: '', date: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/events/create', event);
    alert('Event created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setEvent({ ...event, title: e.target.value })} />
      <input type="date" onChange={e => setEvent({ ...event, date: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setEvent({ ...event, description: e.target.value })} />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
