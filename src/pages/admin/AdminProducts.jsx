import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, Eye, ToggleLeft, ToggleRight, Filter } from 'lucide-react';
import { mockProducts, formatPrice } from '../../data/mockData';
import { useAppContext } from '../../context/AppContext';

const AdminProducts = () => {
  const { currency } = useAppContext();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [products, setProducts] = useState(mockProducts.map(p => ({ ...p, published: true })));
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = ['All', 'Phones', 'Tablets', 'Accessories', 'Laptops'];

  const filtered = products.filter(p => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const togglePublish = (id) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, published: !p.published } : p));
  };

  const deleteProduct = (id) => {
    if (window.confirm('Delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center" style={{ marginBottom: '1.75rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)' }}>Product Management</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '2px' }}>{products.length} total products</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '0.65rem 1.25rem' }}
        >
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 items-center" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
          <Search size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text" placeholder="Search products..."
            value={search} onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '0.65rem 1rem 0.65rem 2.4rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)} style={{ padding: '0.45rem 0.9rem', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600, border: 'none', cursor: 'pointer', background: category === c ? 'var(--primary-blue)' : 'var(--bg-surface)', color: category === c ? 'white' : 'var(--text-muted)', border: category === c ? 'none' : '1px solid var(--border-color)' }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--bg-soft)', borderBottom: '1px solid var(--border-color)' }}>
              {['Product', 'Category', 'Price', 'Stock', 'Status', 'Actions'].map(h => (
                <th key={h} style={{ padding: '0.85rem 1.25rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-soft)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <td style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', flexShrink: 0 }}>
                    <img src={p.image} alt={p.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>{p.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {p.id}</div>
                  </div>
                </td>
                <td style={{ padding: '1rem 1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>{p.category}</td>
                <td style={{ padding: '1rem 1.25rem', fontWeight: 700, fontSize: '0.9rem' }}>{formatPrice(p.price, currency)}</td>
                <td style={{ padding: '1rem 1.25rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, background: p.inStock ? '#D1FAE5' : '#FEE2E2', color: p.inStock ? '#065F46' : '#991B1B' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.inStock ? '#10B981' : '#EF4444' }} />
                    {p.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.25rem' }}>
                  <button onClick={() => togglePublish(p.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: p.published ? '#10B981' : 'var(--text-muted)' }}>
                    {p.published ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </button>
                </td>
                <td style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.4rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', cursor: 'pointer', color: 'var(--primary-blue)' }} title="Edit">
                      <Edit2 size={15} />
                    </button>
                    <button
                      onClick={() => deleteProduct(p.id)}
                      style={{ padding: '0.4rem', borderRadius: '8px', border: '1px solid #FECACA', background: '#FEF2F2', cursor: 'pointer', color: '#EF4444' }} title="Delete">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>No products found.</div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
          <div className="card" style={{ width: '500px', padding: '2rem', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Add New Product</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[['Product Name', 'text'], ['Price (LKR)', 'number'], ['Category', 'text'], ['Stock Quantity', 'number']].map(([label, type]) => (
                <div key={label}>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>{label}</label>
                  <input type={type} style={{ width: '100%', padding: '0.7rem 0.9rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-main)', color: 'var(--text-main)', outline: 'none' }} />
                </div>
              ))}
            </div>
            <div className="flex gap-3" style={{ marginTop: '1.5rem' }}>
              <button onClick={() => setShowAddModal(false)} style={{ flex: 1, padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'transparent', cursor: 'pointer', fontWeight: 600 }}>Cancel</button>
              <button onClick={() => setShowAddModal(false)} className="btn-primary" style={{ flex: 2, padding: '0.85rem' }}>Save Product</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
