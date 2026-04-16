import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Truck, Package, Download } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Confirmation = () => {
  const { setCart } = useAppContext();
  
  // Clear cart upon mount (if not already handled)
  useEffect(() => {
    setCart([]);
  }, []);

  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center', maxWidth: '600px' }}>
      <CheckCircle size={64} style={{ color: '#10B981', margin: '0 auto 1.5rem' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Order Confirmed!</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Thank you for shopping with OriginTech. We've sent a confirmation email to your provided address.
      </p>
      
      <div className="card" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>Order Details</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Order Number:</span>
          <span style={{ fontWeight: 600 }}>{orderNumber}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Date:</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Estimated Delivery:</span>
          <span>{new Date(Date.now() + 86400000 * 2).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex gap-4" style={{ justifyContent: 'center' }}>
        <Link to="/tracking" className="btn-primary flex items-center gap-2">
          <Truck size={18} /> Track Order
        </Link>
        <button 
          onClick={() => {
            const content = `OriginTech — Order Receipt\n================================\nOrder No:  ${orderNumber}\nDate:      ${new Date().toLocaleDateString()}\nEst. Delivery: ${new Date(Date.now() + 86400000 * 2).toLocaleDateString()}\n\nThank you for shopping with OriginTech!\nFor support visit: origintech.lk/support\n`;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = `${orderNumber}-receipt.txt`;
            a.click(); URL.revokeObjectURL(url);
          }}
          className="btn-primary flex items-center gap-2" style={{ backgroundColor: 'var(--slate-2)' }}>
          <Download size={18} /> Receipt
        </button>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <Link to="/browse" style={{ color: 'var(--primary-blue)', textDecoration: 'underline' }}>Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Confirmation;
