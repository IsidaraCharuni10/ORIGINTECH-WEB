import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { formatPrice } from '../../data/mockData';
import { useAppContext } from '../../context/AppContext';

const Cart = () => {
  const { cart, setCart, currency, user } = useAppContext();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tradeInCredit = 0; // Mock later
  const total = subtotal - discount - tradeInCredit;

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item => item.cartId === cartId ? { ...item, quantity: newQuantity } : item));
  };

  const removeItem = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setDiscount(subtotal * 0.1);
      alert('10% discount applied!');
    } else {
      alert('Invalid coupon code');
    }
  };

  const handleCheckout = () => {
    if (!user) {
      navigate('/login?redirect=/checkout');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="container" style={{ padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Your Cart</h1>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 0', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Your cart is empty</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/browse" className="btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className="flex gap-6" style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Cart Items */}
          <div style={{ flex: '1 1 600px' }}>
            <div className="card" style={{ padding: '0' }}>
              {cart.map((item, index) => (
                <div key={item.cartId} className="flex gap-4" style={{ padding: '1.5rem', borderBottom: index < cart.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'contain', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-md)', padding: '0.5rem' }} />
                  
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className="flex justify-between">
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          {item.selectedColor && <span>Color: {item.selectedColor} | </span>}
                          {item.selectedStorage && <span>Storage: {item.selectedStorage}</span>}
                        </div>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>
                        {formatPrice(item.price * item.quantity, currency)}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden', width: 'fit-content' }}>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-surface)' }}>-</button>
                        <span style={{ padding: '0.25rem 0.75rem', fontWeight: 600, backgroundColor: 'var(--bg-soft)' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-surface)' }}>+</button>
                      </div>
                      <button onClick={() => removeItem(item.cartId)} style={{ color: '#EF4444', display: 'flex', items: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div style={{ flex: '0 0 350px' }}>
            <div className="card">
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Order Summary</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                  <span>{formatPrice(subtotal, currency)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between" style={{ color: '#10B981' }}>
                    <span>Discount</span>
                    <span>-{formatPrice(discount, currency)}</span>
                  </div>
                )}
                {tradeInCredit > 0 && (
                  <div className="flex justify-between" style={{ color: '#10B981' }}>
                    <span>Trade-In Credit</span>
                    <span>-{formatPrice(tradeInCredit, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Delivery Estimate</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '2rem' }}>
                <span>Total</span>
                <span>{formatPrice(total, currency)}</span>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Promo Code (SAVE10)" 
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                    style={{ flex: 1, padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)' }}
                  />
                  <button onClick={handleApplyCoupon} className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Apply</button>
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} onClick={handleCheckout}>
                Proceed to Checkout <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
