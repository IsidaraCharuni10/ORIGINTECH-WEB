import React from 'react';
import { Package, Truck, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Tracking = () => {
  // Mock tracking status where 3 out of 5 steps are complete
  const steps = [
    { name: 'Order Placed', time: 'Oct 25, 09:41 AM', done: true },
    { name: 'Confirmed', time: 'Oct 25, 10:15 AM', done: true },
    { name: 'Packed', time: 'Oct 26, 08:30 AM', done: true },
    { name: 'Dispatched', time: 'Oct 26, 04:45 PM', done: true },
    { name: 'Out for Delivery', time: 'Pending', done: false },
    { name: 'Delivered', time: 'Pending', done: false }
  ];

  const currentStep = 3; // Dispatched

  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Order Tracking</h1>
      
      <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.25rem' }}>ORD-99231</div>
            <div style={{ color: 'var(--text-muted)' }}>via FastCourier Express</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'var(--text-muted)' }}>Estimated Delivery</div>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary-blue)' }}>Oct 28, 2025</div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: '0.9rem', top: '0', bottom: '0', width: '2px', backgroundColor: 'var(--border-color)', zIndex: 0 }}></div>
          
          {steps.map((step, index) => (
            <div key={index} style={{ position: 'relative', zIndex: 1, marginBottom: index === steps.length - 1 ? 0 : '2rem', display: 'flex', gap: '1.5rem' }}>
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                backgroundColor: step.done ? 'var(--primary-blue)' : 'var(--bg-main)', 
                border: step.done ? 'none' : '2px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', position: 'absolute', left: '-1.8rem', top: '-4px'
              }}>
                {step.done ? <CheckCircle2 size={18} /> : index === currentStep + 1 ? <Truck size={16} style={{ color: 'var(--text-muted)' }}/> : <div style={{width: '8px', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '50%'}}></div>}
              </div>
              <div style={{ paddingTop: '2px' }}>
                <div style={{ fontWeight: 600, color: step.done || index === currentStep + 1 ? 'var(--text-main)' : 'var(--text-muted)', fontSize: '1.1rem' }}>{step.name}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Delivery Address</div>
          <p style={{ color: 'var(--text-secondary)' }}>John Doe<br/>123 Tech Lane<br/>Colombo, 00100</p>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Need Help?</div>
          <Link to="/support" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1rem', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-blue)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <MessageSquare size={18} style={{ color: 'var(--primary-blue)' }} /> Contact Support
          </Link>
          <Link to="/orders" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1rem', backgroundColor: 'var(--primary-blue)', border: 'none', borderRadius: 'var(--radius-md)', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            <Package size={18} /> View All Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
