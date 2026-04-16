import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, CheckCircle2, BarChart2, LogOut, Headphones } from 'lucide-react';

const navItems = [
  { to: '/agent',        label: 'Support Queue',  icon: LayoutDashboard, end: true },
  { to: '/agent/ticket/TKT-99234', label: 'Open Ticket',  icon: MessageSquare },
];

const AgentLayout = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <style>{`
        .agent-nav-link { display:flex; align-items:center; gap:10px; padding:0.65rem 1rem; border-radius:10px; text-decoration:none; font-size:0.9rem; font-weight:500; color:rgba(255,255,255,0.65); transition:all 0.2s; }
        .agent-nav-link:hover { background:rgba(255,255,255,0.1); color:white; }
        .agent-nav-link.active { background:rgba(255,255,255,0.15); color:white; font-weight:700; }
      `}</style>

      {/* Sidebar */}
      <aside style={{
        width: '240px', flexShrink: 0,
        background: 'linear-gradient(180deg,#0A1128 0%,#10294A 100%)',
        display: 'flex', flexDirection: 'column',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, height: '100vh', overflowY: 'auto'
      }}>
        {/* Logo */}
        <div style={{ padding: '1.5rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg,#10B981,#059669)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Headphones size={18} color="white" />
            </div>
            <span style={{ color: 'white', fontWeight: 800, fontSize: '1rem' }}>Support</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase', paddingLeft: '2px' }}>Agent Portal</div>
        </div>

        {/* Online Status */}
        <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.8rem', fontWeight: 600, color: '#34D399' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
            Online · Available
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '1rem 0.75rem', flex: 1 }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(255,255,255,0.3)', padding: '0 0.5rem', marginBottom: '0.5rem' }}>Navigation</div>
          <NavLink to="/agent" end className={({ isActive }) => `agent-nav-link${isActive ? ' active' : ''}`}>
            <LayoutDashboard size={17} style={{ opacity: 0.7 }} /> Support Queue
          </NavLink>
          <NavLink to="/agent/ticket/TKT-99234" className={({ isActive }) => `agent-nav-link${isActive ? ' active' : ''}`}>
            <MessageSquare size={17} style={{ opacity: 0.7 }} /> Sample Ticket
          </NavLink>

          {/* Quick Stats */}
          <div style={{ marginTop: '1.5rem', padding: '0.75rem 0.5rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>My Stats Today</div>
            {[
              { label: 'Resolved', value: '28', color: '#10B981' },
              { label: 'Open', value: '12', color: '#F59E0B' },
              { label: 'Avg Response', value: '14m', color: '#60A5FA' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.35rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: s.color }}>{s.value}</span>
              </div>
            ))}
          </div>
        </nav>

        {/* User Footer */}
        <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg,#10B981,#059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>S</span>
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '0.85rem', fontWeight: 600 }}>Agent Sarah</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem' }}>Level 2 Support</div>
            </div>
          </div>
          <button onClick={() => navigate('/')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '0.55rem 0.75rem', borderRadius: '8px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.25)', color: '#FCA5A5', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600 }}>
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'auto' }}>
        {/* Top Bar */}
        <div style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            OriginTech &nbsp;/&nbsp; <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Agent Portal</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#10B981', fontWeight: 700 }}>
            <CheckCircle2 size={15} /> SLA Status: On Track
          </div>
        </div>
        <div style={{ padding: '2rem', flex: 1 }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AgentLayout;
