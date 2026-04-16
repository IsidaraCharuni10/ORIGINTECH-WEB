import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, Lock, User, CheckCircle2, LifeBuoy } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const AgentLogin = () => {
  const { setUser } = useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate support agent login
    setTimeout(() => {
      setUser({ 
        name: 'Agent Sarah', 
        email: 'sarah.support@origintech.com', 
        role: 'agent',
        level: 'Level 2 Support'
      });
      setLoading(false);
      navigate('/agent');
    }, 1200);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #064E3B 0%, #022C22 100%)',
      padding: '2rem'
    }}>
      <div className="card" style={{ 
        width: '100%', 
        maxWidth: '420px', 
        padding: '3rem', 
        backgroundColor: 'var(--bg-surface)',
        borderRadius: '24px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ 
            width: '56px', height: '56px', 
            borderRadius: '50%', 
            background: 'rgba(16, 185, 129, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
            border: '2px solid rgba(16, 185, 129, 0.2)'
          }}>
            <Headphones size={28} color="#10B981" />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>Agent Portal</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Sign in to start helping customers</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Agent Email</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                placeholder="agent@origintech.com"
                required
                style={{ 
                  width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', 
                  borderRadius: '12px', border: '1px solid var(--border-color)', 
                  background: 'var(--bg-main)', color: 'var(--text-main)',
                  outline: 'none'
                }} 
              />
              <User size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password" 
                placeholder="••••••••"
                required
                style={{ 
                  width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', 
                  borderRadius: '12px', border: '1px solid var(--border-color)', 
                  background: 'var(--bg-main)', color: 'var(--text-main)',
                  outline: 'none'
                }} 
              />
              <Lock size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              width: '100%', padding: '0.85rem', 
              backgroundColor: '#10B981', color: 'white', 
              borderRadius: '12px', fontWeight: 600, 
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'all 0.2s',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Connecting...' : 'Access Helpdesk'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.8rem', fontWeight: 500 }}>
            <CheckCircle2 size={14} /> Systems Online & Operational
          </div>
          <button 
            onClick={() => navigate('/')}
            style={{ 
              background: 'none', border: 'none', 
              color: 'var(--text-muted)', fontSize: '0.85rem', 
              cursor: 'pointer', textDecoration: 'underline' 
            }}
          >
            Back to Public Site
          </button>
        </div>

        {/* Support Badge */}
        <div style={{ 
          marginTop: '3rem', 
          padding: '1rem', 
          backgroundColor: 'var(--bg-soft)', 
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <LifeBuoy size={20} color="var(--text-muted)" />
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Need help accessing your agent account? Contact IT Support.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;
