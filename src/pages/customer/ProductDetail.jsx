import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Heart, ShoppingBag, Truck, RefreshCw } from 'lucide-react';
import { mockProducts, formatPrice } from '../../data/mockData';
import { useAppContext } from '../../context/AppContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currency, cart, setCart, user } = useAppContext();
  
  const product = mockProducts.find(p => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [selectedStorage, setSelectedStorage] = useState(product?.storage?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  if (!product) return <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>Product not found</div>;

  const handleAddToCart = () => {
    const item = {
      ...product,
      cartId: `${product.id}-${selectedColor}-${selectedStorage}-${Date.now()}`,
      selectedColor,
      selectedStorage,
      quantity
    };
    setCart([...cart, item]);
    // Optional: add a toast here
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      {/* Breadcrumbs */}
      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <Link to="/">Home</Link> / <Link to={`/browse?category=${product.category.toLowerCase()}`}>{product.category}</Link> / <span style={{ color: 'var(--text-main)' }}>{product.name}</span>
      </div>

      <div className="flex gap-6" style={{ flexWrap: 'wrap', marginBottom: '4rem' }}>
        {/* Gallery */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', marginBottom: '1rem', border: '1px solid var(--border-color)' }}>
            <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-md)', border: i === 1 ? '2px solid var(--primary-blue)' : '1px solid var(--border-color)', cursor: 'pointer', padding: '0.5rem' }}>
                <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div style={{ flex: '1 1 400px' }}>
          {product.badges.map(b => (
             <span key={b} style={{ display: 'inline-block', backgroundColor: 'var(--primary-blue)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1rem', marginRight: '0.5rem' }}>
               {b}
             </span>
          ))}
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>{product.name}</h1>
          <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <div className="flex items-center" style={{ color: '#F59E0B' }}>
              <Star size={16} fill="currentColor" />
              <span style={{ marginLeft: '0.25rem', color: 'var(--text-main)', fontWeight: 600 }}>{product.rating}</span>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>({product.reviews} reviews)</span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: 'var(--primary-blue)', fontWeight: 500 }}>{product.brand}</span>
          </div>

          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '2rem' }}>
            {formatPrice(product.price, currency)}
            {product.originalPrice && (
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.25rem', marginLeft: '1rem', fontWeight: 400 }}>
                {formatPrice(product.originalPrice, currency)}
              </span>
            )}
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-md)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={24} style={{ color: 'var(--primary-blue)' }} />
            <div>
              <div style={{ fontWeight: 600 }}>Authenticity Verified</div>
              <Link to="/authenticity" style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', textDecoration: 'underline' }}>View digital certificate</Link>
            </div>
          </div>

          {/* Variants */}
          {product.colors?.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Color: <span style={{ color: 'var(--text-muted)' }}>{selectedColor}</span></div>
              <div className="flex gap-2">
                {product.colors.map(c => (
                  <button 
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    style={{ 
                      padding: '0.5rem 1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: selectedColor === c ? '2px solid var(--primary-blue)' : '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-main)',
                      fontWeight: selectedColor === c ? 600 : 400
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.storage?.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Storage: <span style={{ color: 'var(--text-muted)' }}>{selectedStorage}</span></div>
              <div className="flex gap-2">
                {product.storage.map(s => (
                  <button 
                    key={s}
                    onClick={() => setSelectedStorage(s)}
                    style={{ 
                      padding: '0.5rem 1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: selectedStorage === s ? '2px solid var(--primary-blue)' : '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-main)',
                      fontWeight: selectedStorage === s ? 600 : 400
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4" style={{ marginBottom: '2rem' }}>
            <div className="flex items-center" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }}
              >-</button>
              <span style={{ padding: '0.75rem 1rem', fontWeight: 600, backgroundColor: 'var(--bg-soft)', minWidth: '3rem', textAlign: 'center' }}>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }}
              >+</button>
            </div>
            
            <button className="btn-primary flex justify-center items-center gap-2" style={{ flex: 1 }} onClick={handleAddToCart}>
              <ShoppingBag size={18} /> Add to Cart
            </button>
            
            <button className="btn-primary flex justify-center items-center gap-2" style={{ flex: 1, backgroundColor: 'var(--premium-navy)' }} onClick={handleBuyNow}>
              Buy Now
            </button>
            
            <button 
               onClick={() => !user ? navigate('/login') : alert('Added to wishlist!')}
               style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }}>
              <Heart size={24} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <div className="flex items-center gap-3">
              <Truck size={24} style={{ color: 'var(--slate-3)' }} />
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ fontWeight: 600 }}>Free Delivery</div>
                <div style={{ color: 'var(--text-muted)' }}>1-2 business days</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw size={24} style={{ color: 'var(--slate-3)' }} />
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ fontWeight: 600 }}>Free Returns</div>
                <div style={{ color: 'var(--text-muted)' }}>Within 14 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
        <div className="flex gap-6" style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          {['specs', 'reviews', 'qa'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '1rem 0',
                borderBottom: activeTab === tab ? '2px solid var(--primary-blue)' : '2px solid transparent',
                color: activeTab === tab ? 'var(--primary-blue)' : 'var(--text-muted)',
                fontWeight: activeTab === tab ? 600 : 400,
                textTransform: 'capitalize',
                fontSize: '1.1rem'
              }}
            >
              {tab === 'qa' ? 'Q&A' : tab}
            </button>
          ))}
        </div>
        
        <div style={{ minHeight: '200px' }}>
          {activeTab === 'specs' && (
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '800px' }}>
              <div>
                 <h3>Technical Specifications</h3>
                 <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <li>Display: 6.7" OLED</li>
                   <li>Processor: Origin Chip M2</li>
                   <li>Camera: 108MP Main, 12MP Ultra-wide</li>
                   <li>Battery: 5000mAh</li>
                 </ul>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)' }}>
                 <h4 style={{ marginBottom: '1rem' }}>Trade-In Available</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Save up to {formatPrice(50000, currency)} when you trade in your old device.</p>
                 <Link to="/trade-in" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View Deals</Link>
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
               <div className="flex items-center gap-4" style={{ marginBottom: '2rem' }}>
                 <div style={{ fontSize: '3rem', fontWeight: 700 }}>{product.rating}</div>
                 <div>
                   <div className="flex" style={{ color: '#F59E0B', marginBottom: '0.25rem' }}><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
                   <div style={{ color: 'var(--text-muted)' }}>Based on {product.reviews} reviews</div>
                 </div>
               </div>
               {/* Review cards placeholder */}
               <div className="card" style={{ marginBottom: '1rem' }}>
                 <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
                   <div style={{ fontWeight: 600 }}>Excellent product!</div>
                   <div className="flex" style={{ color: '#F59E0B' }}><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                 </div>
                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>The build quality is amazing and the camera is top notch.</p>
                 <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1rem' }}>- Sarah L. on Oct 24, 2025</div>
               </div>
            </div>
          )}
          {activeTab === 'qa' && (
            <div>No questions yet. Be the first to ask!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
