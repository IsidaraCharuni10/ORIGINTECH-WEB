import React, { useState } from 'react';
import { CheckCircle2, XCircle, Clock, Eye } from 'lucide-react';
import { formatPrice } from '../../data/mockData';
import { useAppContext } from '../../context/AppContext';

const MOCK_TRADEIN = [
  { id: 'TI-001', customer: 'John Doe',    device: 'Origin Pro Max 256GB',  condition: 'Flawless screen, Good battery', submitted: 'Apr 13, 2026', offered: 72000,  status: 'Pending' },
  { id: 'TI-002', customer: 'Alice Kim',   device: 'iPhone 14 128GB',       condition: 'Minor scratches, Good battery', submitted: 'Apr 12, 2026', offered: 48000,  status: 'Approved' },
  { id: 'TI-003', customer: 'Sarah Lin',   device: 'Samsung Galaxy S23 256GB', condition: 'Flawless, Flawless body',   submitted: 'Apr 10, 2026', offered: 55000,  status: 'Rejected' },
  { id: 'TI-004', customer: 'Dev Patel',   device: 'Origin Tablet Z 128GB', condition: 'Cracked screen, Poor battery', submitted: 'Apr 8, 2026', offered: 20000,  status: 'Pending' },
];

const STATUS_CFG = {
  Pending:  { bg: '#FEF3C7', text: '#92400E', dot: '#F59E0B' },
  Approved: { bg: '#D1FAE5', text: '#065F46', dot: '#10B981' },
  Rejected: { bg: '#FEE2E2', text: '#991B1B', dot: '#EF4444' },
};

const AdminTradeIn = () => {
  const { currency } = useAppContext();
  const [items, setItems] = useState(MOCK_TRADEIN);
  const [filter, setFilter] = useState('All');

  const updateStatus = (id, status) => setItems(prev => prev.map(t => t.id === id ? { ...t, status } : t));

  const filtered = filter === 'All' ? items : items.filter(t => t.status === filter);

  return (
    <div>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)' }}>Trade-In Management</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '2px' }}>Review and approve device trade-in submissions</p>
      </div>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '1.75rem' }}>
        {[
          { label: 'Pending Review', value: items.filter(t => t.status === 'Pending').length, color: '#F59E0B' },
          { label: 'Approved', value: items.filter(t => t.status === 'Approved').length, color: '#10B981' },
          { label: 'Rejected', value: items.filter(t => t.status === 'Rejected').length, color: '#EF4444' },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>{s.label}</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {['All', 'Pending', 'Approved', 'Rejected'].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: '0.4rem 0.9rem', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', background: filter === f ? 'var(--primary-blue)' : 'var(--bg-surface)', color: filter === f ? 'white' : 'var(--text-muted)', border: filter === f ? 'none' : '1px solid var(--border-color)' }}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filtered.map(item => {
          const cfg = STATUS_CFG[item.status];
          return (
            <div key={item.id} className="card" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 160px', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                  <code style={{ fontSize: '0.78rem', background: 'var(--bg-main)', padding: '2px 8px', borderRadius: '6px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{item.id}</code>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700, background: cfg.bg, color: cfg.text }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: cfg.dot }} />
                    {item.status}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '2px' }}>{item.device}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>By {item.customer} · {item.submitted}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '4px' }}>CONDITION</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>{item.condition}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-blue)', marginTop: '4px' }}>Offered: {formatPrice(item.offered, currency)}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {item.status === 'Pending' && (
                  <>
                    <button onClick={() => updateStatus(item.id, 'Approved')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '0.55rem', borderRadius: '8px', background: '#10B981', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>
                      <CheckCircle2 size={15} /> Approve
                    </button>
                    <button onClick={() => updateStatus(item.id, 'Rejected')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '0.55rem', borderRadius: '8px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#EF4444', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>
                      <XCircle size={15} /> Reject
                    </button>
                  </>
                )}
                {item.status !== 'Pending' && (
                  <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {item.status === 'Approved' ? '✓ Credit issued' : '✕ Declined'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTradeIn;
