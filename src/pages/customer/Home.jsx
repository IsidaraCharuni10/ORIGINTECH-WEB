import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Smartphone, RefreshCw } from 'lucide-react';
import { mockProducts, formatPrice, translationStrings } from '../../data/mockData';
import { useAppContext } from '../../context/AppContext';

const Home = () => {
  const { currency, language } = useAppContext();
  const t = translationStrings[language] || translationStrings.EN;

  return (
    <div style={{ backgroundColor: 'var(--bg-main)' }}>
      {/* Hero Section */}
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #0A1128 0%, #163A62 100%)',
        color: 'var(--pure-white)',
        padding: '8rem 2rem',
        overflow: 'hidden'
      }}>
        
        {/* Real-time Blackscreen Removal Matrix */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <filter id="luma-key" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              2 2 2 0 -0.2
            " />
          </filter>
        </svg>

        {/* Floating & Glowing Animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatAndGlow {
            0% { transform: translateY(0px) scale(1.05); filter: url(#luma-key) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4)); opacity: 0.95; }
            50% { transform: translateY(-25px) scale(1.05); filter: url(#luma-key) drop-shadow(0 0 80px rgba(59, 130, 246, 0.9)) drop-shadow(0 35px 35px rgba(0, 0, 0, 0.4)); opacity: 1; }
            100% { transform: translateY(0px) scale(1.05); filter: url(#luma-key) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4)); opacity: 0.95; }
          }
          .floating-laptop {
            animation: floatAndGlow 6s ease-in-out infinite;
            transform-origin: center;
          }
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: center;
            position: relative;
          }
          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr;
              text-align: center;
            }
          }
        `}} />

        <div className="container hero-grid">
          <div style={{ paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '4.2rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              The Future of Tech.<br/> Right in Your Hands.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#CBD5E1', marginBottom: '3rem', maxWidth: '90%' }}>
              Discover the latest smartphones, premium laptops, and next-gen accessories with verified authenticity and unmatched trade-in deals.
            </p>
            <div className="flex gap-4">
              <Link to="/browse" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#F8FAFC', color: '#0F2A56' }}>
                {t.shopNow}
              </Link>
              <Link to="/pre-order" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                {t.preOrder}
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
             {/* True Transparent Real Photo AI MacBook using Luma Key */}
             <img 
               src="/images/macbook_real.png" 
               alt="Premium MacBook" 
               className="floating-laptop" 
               style={{ 
                 width: '125%', 
                 maxWidth: '850px', 
                 objectFit: 'contain', 
                 marginRight: '-10%',
                 WebkitUserDrag: 'none',
                 mixBlendMode: 'lighten'
               }} 
             />

          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ backgroundColor: 'var(--bg-surface)', padding: '2rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container flex justify-between items-center flex-wrap gap-4" style={{ color: 'var(--text-secondary)' }}>
          <div className="flex items-center gap-2">
            <ShieldCheck style={{ color: 'var(--primary-blue)' }} />
            <span>Authenticity Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw style={{ color: 'var(--primary-blue)' }} />
            <span>Highest Trade-In Values</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone style={{ color: 'var(--primary-blue)' }} />
            <span>12-Month Premium Warranty</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container" style={{ padding: '5rem 1rem' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem' }}>Featured Products</h2>
          <Link to="/browse" className="flex items-center gap-2" style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>
            View All <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {mockProducts.map(product => (
            <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ position: 'relative', padding: '1.5rem', backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem', textAlign: 'center', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {product.badges.length > 0 && (
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'var(--primary-blue)', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    {product.badges[0]}
                  </span>
                )}
                <img src={product.image} alt={product.name} style={{ width: '90%', height: '90%', objectFit: 'contain', mixBlendMode: 'multiply', transition: 'transform 0.4s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ flex: 1, padding: '0 1.5rem' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{product.brand}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                  {formatPrice(product.price, currency)}
                  {product.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.5rem', fontWeight: 400 }}>
                      {formatPrice(product.originalPrice, currency)}
                    </span>
                  )}
                </div>
              </div>
              <Link to={`/product/${product.id}`} className="btn-primary" style={{ textAlign: 'center', width: '100%', backgroundColor: 'var(--slate-2)' }}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* Trade In Promo Callout */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '5rem 1rem' }}>
        <div className="container flex items-center justify-between gap-4">
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Trade in. Upgrade.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px' }}>
              Get credit towards your next device when you trade in your eligible smartphone or tablet. The process is quick, easy, and secure.
            </p>
            <Link to="/trade-in" className="btn-primary">Get Your Valuation</Link>
          </div>
          <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '420px', position: 'relative' }}>
               {/* Decorative Glow */}
               <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)', zIndex: 0 }}></div>
               
               {/* Connecting Line */}
               <div style={{ position: 'absolute', top: '30px', bottom: '30px', left: '30px', width: '2px', background: 'linear-gradient(to bottom, #3B82F6, #22C55E, #F59E0B)', zIndex: 0, opacity: 0.4 }}></div>

               {/* Step 1 */}
               <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', transform: 'translateX(-10px)' }}>
                 <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#EFF6FF', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)', border: '2px solid white', flexShrink: 0 }}>
                   <Smartphone size={28} />
                 </div>
                 <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--pure-white)', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)', flex: 1, border: '1px solid rgba(0,0,0,0.02)' }}>
                   <h4 style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>1. Select Device</h4>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Choose your current model.</p>
                 </div>
               </div>

               {/* Step 2 */}
               <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', transform: 'translateX(20px)' }}>
                 <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#F0FDF4', color: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.3)', border: '2px solid white', flexShrink: 0 }}>
                   <ShieldCheck size={28} />
                 </div>
                 <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--pure-white)', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)', flex: 1, border: '1px solid rgba(0,0,0,0.02)' }}>
                   <h4 style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>2. Instant Valuation</h4>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Get a guaranteed price quote.</p>
                 </div>
               </div>

               {/* Step 3 */}
               <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '1.5rem', transform: 'translateX(-5px)' }}>
                 <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FFFBEB', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.3)', border: '2px solid white', flexShrink: 0 }}>
                   <RefreshCw size={28} />
                 </div>
                 <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--pure-white)', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)', flex: 1, border: '1px solid rgba(0,0,0,0.02)' }}>
                   <h4 style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>3. Upgrade & Get Paid</h4>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ship it free, get paid fast.</p>
                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="container" style={{ padding: '5rem 1rem' }}>
        <div style={{ display: 'flex', backgroundColor: '#1A1D24', borderRadius: '24px', overflow: 'hidden', color: 'white' }}>
          <div style={{ flex: 1, padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: '#3B82F6', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>Flash Sale Ending Soon</span>
            <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '2rem' }}>OriginBook Pro<br/>16"</h2>
            
            <div className="flex gap-4" style={{ marginBottom: '2.5rem' }}>
              {[{v: '08', l: 'HOURS'}, {v: '42', l: 'MINS'}, {v: '15', l: 'SECS'}].map((time, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', textAlign: 'center', minWidth: '70px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{time.v}</div>
                    <div style={{ fontSize: '0.6rem', color: '#94A3B8', marginTop: '0.25rem' }}>{time.l}</div>
                  </div>
                  {idx !== 2 && <span style={{ fontSize: '1.5rem', margin: '0 10px', color: '#64748B' }}>:</span>}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div>
                <div style={{ textDecoration: 'line-through', color: '#64748B', fontSize: '1rem' }}>{formatPrice(249900, currency)}</div>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>{formatPrice(189900, currency)}</div>
              </div>
              <Link to="/product/p4" className="btn-primary" style={{ padding: '1rem 2rem' }}>Claim This Offer</Link>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#E2E8F0', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ position: 'absolute', top: '2rem', right: '2rem', backgroundColor: '#2563EB', color: 'white', padding: '1rem', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', transform: 'rotate(15deg)' }}>
               -24%
             </div>
             <img src="/images/macbook_real.png" alt="OriginBook Pro" style={{ width: '90%', objectFit: 'contain', filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))', mixBlendMode: 'multiply' }} />
          </div>
        </div>
      </section>

      {/* Latest Arrivals */}
      <section style={{ backgroundColor: 'var(--bg-surface)', padding: '5rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Latest Arrivals</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { id: 'buds-3', name: 'SonicPods Gen 3', price: 10900, img: '/images/phone.png', badge: 'NEW' },
              { id: 'display-4k', name: 'VisionDisplay 4K', price: 59900, img: '/images/vision.png', badge: 'IN STOCK' },
              { id: 'keyboard', name: 'KeyPro Wireless', price: 14900, img: '/images/tablet.png', badge: 'EXCLUSIVE' },
              { id: 'drone', name: 'SkyView Drone X1', price: 89900, img: '/images/laptop.png', badge: 'NEW ARRIVAL' }
            ].map(p => (
              <div key={p.id} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', padding: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={p.img} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '1px' }}>{p.badge}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', flex: 1 }}>{p.name}</h3>
                <div className="flex justify-between items-center">
                  <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{formatPrice(p.price, currency)}</div>
                  <Link to={`/product/${p.id}`} style={{ color: 'var(--primary-blue)', fontSize: '0.9rem', fontWeight: 500 }}>View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container" style={{ padding: '5rem 1rem' }}>
        <div style={{ backgroundColor: '#E2E8F0', borderRadius: '32px', padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '60%', height: '200%', background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, transparent 70%)', transform: 'rotate(-20deg)', pointerEvents: 'none' }}></div>
           <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1E293B' }}>Stay ahead of the curve.</h2>
             <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
               Join our inner circle to receive exclusive early access to product launches, weekly curated tech deals, and member-only events.
             </p>
             <div className="flex gap-2" style={{ maxWidth: '400px', margin: '0 auto', marginBottom: '1rem' }}>
               <input type="email" placeholder="Enter email to receive latest drops" style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: 'var(--radius-xl)', border: 'none', outline: 'none' }} />
               <button className="btn-primary" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-xl)' }}>Subscribe Now</button>
             </div>
             <div style={{ fontSize: '0.8rem', color: '#64748B' }}>By subscribing you agree to our Privacy Policy and Terms of Service.</div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
