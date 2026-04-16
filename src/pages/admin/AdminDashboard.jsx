import React from 'react';
import { Users, ShoppingCart, DollarSign, Package, TrendingUp } from 'lucide-react';
import { formatPrice } from '../../data/mockData';
import { useAppContext } from '../../context/AppContext';

const AdminDashboard = () => {
  const { currency } = useAppContext();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Overview</h1>
        <div style={{ padding: '0.5rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
          Last 30 Days
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Total Revenue</div>
            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 74, 198, 0.1)', color: 'var(--primary-blue)', borderRadius: 'var(--radius-md)' }}>
              <DollarSign size={20} />
            </div>
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{formatPrice(4500000, currency)}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10B981', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <TrendingUp size={14} /> +12.5% from last month
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Orders</div>
            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 74, 198, 0.1)', color: 'var(--primary-blue)', borderRadius: 'var(--radius-md)' }}>
              <ShoppingCart size={20} />
            </div>
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>1,245</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10B981', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <TrendingUp size={14} /> +5.2% from last month
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Active Users</div>
            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 74, 198, 0.1)', color: 'var(--primary-blue)', borderRadius: 'var(--radius-md)' }}>
              <Users size={20} />
            </div>
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>8,920</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#EF4444', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <TrendingUp size={14} style={{ transform: 'rotate(180deg)' }} /> -1.1% from last month
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Low Stock Items</div>
            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(0, 74, 198, 0.1)', color: 'var(--primary-blue)', borderRadius: 'var(--radius-md)' }}>
              <Package size={20} />
            </div>
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>24</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#F59E0B', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Needs attention
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Recent Orders</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem 0' }}>Order ID</th>
                <th style={{ padding: '1rem 0' }}>Customer</th>
                <th style={{ padding: '1rem 0' }}>Date</th>
                <th style={{ padding: '1rem 0' }}>Status</th>
                <th style={{ padding: '1rem 0', textAlign: 'right' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'ORD-98231', customer: 'Sarah L.', date: 'Oct 25', status: 'Processing', total: 120000 },
                { id: 'ORD-98230', customer: 'John M.', date: 'Oct 25', status: 'Shipped', total: 85000 },
                { id: 'ORD-98229', customer: 'Alice K.', date: 'Oct 24', status: 'Delivered', total: 250000 }
              ].map(o => (
                <tr key={o.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 600 }}>{o.id}</td>
                  <td style={{ padding: '1rem 0' }}>{o.customer}</td>
                  <td style={{ padding: '1rem 0' }}>{o.date}</td>
                  <td style={{ padding: '1rem 0' }}>
                    <span style={{ padding: '0.25rem 0.5rem', backgroundColor: o.status === 'Processing' ? '#FEF3C7' : o.status === 'Shipped' ? '#DBEAFE' : '#D1FAE5', color: o.status === 'Processing' ? '#92400E' : o.status === 'Shipped' ? '#1E40AF' : '#065F46', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600 }}>{o.status}</span>
                  </td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', fontWeight: 600 }}>{formatPrice(o.total, currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="card flex flex-col justify-center items-center" style={{ backgroundColor: 'var(--premium-navy)', color: 'var(--pure-white)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>AI Analytics Engine</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--slate-4)', marginBottom: '1.5rem' }}>Predictive stock ordering, automated promotions, and AI segmenting.</p>
          <div style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
             Coming in Stage 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
