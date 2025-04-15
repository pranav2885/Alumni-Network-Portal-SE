import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileEdit({ userId }) {
  const [profile, setProfile] = useState({ name: '', achievements: '', social: '' });

  useEffect(() => {
    axios.get(`/api/alumni/${userId}`).then(res => setProfile(res.data));
  }, [userId]);

  const handleUpdate = async () => {
    await axios.put(`/api/alumni/${userId}`, profile);
    alert('Profile updated!');
  };

  return (
    <div>
      <input value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
      <textarea value={profile.achievements} onChange={e => setProfile({ ...profile, achievements: e.target.value })} />
      <input value={profile.social} onChange={e => setProfile({ ...profile, social: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default ProfileEdit;
