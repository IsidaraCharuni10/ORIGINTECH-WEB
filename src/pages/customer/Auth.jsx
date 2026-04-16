import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login'); // login, register, forgot
  const { setUser } = useAppContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setUser({ name: 'John Doe', email: 'john@example.com', role: 'customer' });
      setLoading(false);
      navigate(redirect);
    }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate register
    setTimeout(() => {
      setUser({ name: 'New User', email: 'user@example.com', role: 'customer' });
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Password reset link sent to your email.');
      setActiveTab('login');
    }, 1000);
  };

  return (
    <div className="container" style={{ padding: '5rem 1rem', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ width: '100%', maxWidth: '450px', padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>OriginTech</h1>
          <p style={{ color: 'var(--text-muted)' }}>Welcome back to the future</p>
        </div>

        {activeTab !== 'forgot' && (
          <div className="flex" style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '2rem' }}>
            <button 
              style={{ flex: 1, padding: '0.75rem', fontWeight: activeTab === 'login' ? 600 : 400, color: activeTab === 'login' ? 'var(--primary-blue)' : 'var(--text-muted)', borderBottom: activeTab === 'login' ? '2px solid var(--primary-blue)' : '2px solid transparent' }}
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
            <button 
              style={{ flex: 1, padding: '0.75rem', fontWeight: activeTab === 'register' ? 600 : 400, color: activeTab === 'register' ? 'var(--primary-blue)' : 'var(--text-muted)', borderBottom: activeTab === 'register' ? '2px solid var(--primary-blue)' : '2px solid transparent' }}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>
        )}

        {activeTab === 'login' && (
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
              <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem' }}>Password</label>
                <button type="button" onClick={() => setActiveTab('forgot')} style={{ color: 'var(--primary-blue)', fontSize: '0.85rem' }}>Forgot password?</button>
              </div>
              <input type="password" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }} disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
            
            <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Don't have an account? <button type="button" onClick={() => setActiveTab('register')} style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>Sign up</button>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button type="button" onClick={() => navigate(redirect)} style={{ color: 'var(--text-muted)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                Continue as Guest
              </button>
            </div>
          </form>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleRegister}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name</label>
              <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
              <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Password</label>
              <input type="password" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Make it strong and unique</div>
            </div>
            <label className="flex items-center gap-2" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
              <input type="checkbox" required />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }} disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
            <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Already have an account? <button type="button" onClick={() => setActiveTab('login')} style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>Log In</button>
            </div>
          </form>
        )}

        {activeTab === 'forgot' && (
          <form onSubmit={handleForgot}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>Reset Password</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Enter your email address to receive a password reset link.
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
              <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)' }} />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginBottom: '1rem' }} disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
            <button type="button" style={{ width: '100%', padding: '0.75rem', color: 'var(--text-main)' }} onClick={() => setActiveTab('login')}>
              Back to Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
