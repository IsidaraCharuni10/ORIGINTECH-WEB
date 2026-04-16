import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Profile = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySms, setNotifySms] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Profile Settings</h1>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>Personal Information</h2>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name</label>
            <input type="text" defaultValue={user.name} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
            <input type="email" defaultValue={user.email} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone Number</label>
          <input type="tel" placeholder="+94 7X XXX XXXX" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
        </div>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }}>Save Changes</button>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>Notification Preferences</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={notifyEmail} onChange={() => setNotifyEmail(!notifyEmail)} style={{ width: '1.2rem', height: '1.2rem' }} />
            <div>
              <div style={{ fontWeight: 600 }}>Email Notifications</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Receive order updates and marketing emails.</div>
            </div>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={notifySms} onChange={() => setNotifySms(!notifySms)} style={{ width: '1.2rem', height: '1.2rem' }} />
            <div>
              <div style={{ fontWeight: 600 }}>SMS Notifications</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Receive delivery tracking updates via SMS.</div>
            </div>
          </label>
        </div>
      </div>

      <div className="card" style={{ border: '1px solid #EF4444' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#EF4444' }}>Danger Zone</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Once you delete your account, there is no going back. Please be certain.</p>
        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: 'transparent', color: '#EF4444', border: '1px solid #EF4444', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>Delete Account</button>
      </div>
    </div>
  );
};

export default Profile;
