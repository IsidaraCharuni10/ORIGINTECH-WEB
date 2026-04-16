import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--premium-navy)', color: 'var(--pure-white)', padding: '4rem 1rem 2rem', marginTop: 'auto' }}>
      <div className="container grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>OriginTech</h3>
          <p style={{ color: 'var(--slate-4)', fontSize: '0.9rem' }}>
            Premium smart electronics e-commerce platform. Authenticity guaranteed.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Shop</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--slate-4)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/browse?category=phones">Phones</Link></li>
            <li><Link to="/browse?category=tablets">Tablets</Link></li>
            <li><Link to="/browse?category=accessories">Accessories</Link></li>
            <li><Link to="/trade-in">Trade-In Programme</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--slate-4)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/authenticity">Authenticity Check</Link></li>
            <li><Link to="/support">Contact Us</Link></li>
            <li><Link to="/tracking">Order Tracking</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Staff</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--slate-4)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
