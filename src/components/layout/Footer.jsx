import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--premium-navy)', color: 'var(--pure-white)', padding: '4rem 1rem 2rem', marginTop: 'auto' }}>
      <div className="container grid grid-cols-4 lg-grid-cols-2 md-grid-cols-1" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
        <div>
          <h3 style={{ marginBottom: '1.25rem', color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: 800 }}>OriginTech</h3>
          <p style={{ color: 'var(--slate-4)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Premium smart electronics e-commerce platform. Authenticity guaranteed through blockchain verification.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>Shop</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--slate-4)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/browse?category=phones">Phones</Link></li>
            <li><Link to="/browse?category=tablets">Tablets</Link></li>
            <li><Link to="/browse?category=accessories">Accessories</Link></li>
            <li><Link to="/trade-in">Trade-In Programme</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--slate-4)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/authenticity">Authenticity Check</Link></li>
            <li><Link to="/support">Contact Us</Link></li>
            <li><Link to="/tracking">Order Tracking</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>Staff</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--slate-4)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/admin/login">Admin Portal</Link></li>
            <li><Link to="/agent/login">Agent Portal</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ borderTop: '1px solid var(--slate-2)', paddingTop: '2rem', textAlign: 'center', color: 'var(--slate-4)', fontSize: '0.85rem' }}>
        <p>&copy; 2026 OriginTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
