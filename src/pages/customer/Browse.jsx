import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { mockProducts, formatPrice } from '../../data/mockData';
import { useAppContext } from '../../context/AppContext';

const CATEGORIES = [
  { key: 'all', label: 'All Products', emoji: '🛍️' },
  { key: 'phones', label: 'Phones', emoji: '📱' },
  { key: 'tablets', label: 'Tablets', emoji: '💻' },
  { key: 'accessories', label: 'Accessories', emoji: '🎧' },
];

const Browse = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const { currency } = useAppContext();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('featured');

  // Sync selectedCategory whenever the URL param changes
  useEffect(() => {
    setSelectedCategory(categoryParam || 'all');
  }, [categoryParam]);

  // Filter
  const filtered = mockProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Sort
  const filteredProducts = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured — keep original order
  });

  return (
    <div className="container" style={{ padding: '3rem 1rem' }}>
      {/* Header & Search */}
      <div className="flex justify-between items-center flex-wrap gap-4" style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>
          {CATEGORIES.find(c => c.key === selectedCategory)?.label || 'All Products'}
        </h1>
        <div style={{ position: 'relative', width: '300px' }}>
          <input 
            type="text" 
            placeholder="Search catalog..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>
      </div>


      <div className="flex gap-6" style={{ alignItems: 'flex-start' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', flexShrink: 0, backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.1rem' }}>
            <Filter size={18} /> Filters
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-muted)' }}>Category</h4>
            <div className="flex" style={{ flexDirection: 'column', gap: '0.5rem' }}>
              {CATEGORIES.map(cat => (
                <label key={cat.key} className="flex items-center gap-2" style={{ cursor: 'pointer' }}>
                  <input type="radio" name="cat" checked={selectedCategory === cat.key} onChange={() => setSelectedCategory(cat.key)} />
                  {cat.emoji} {cat.label}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-muted)' }}>Price Range</h4>
            <input type="range" style={{ width: '100%' }} />
            <div className="flex justify-between" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <span>Min</span>
              <span>Max</span>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-muted)' }}>Status</h4>
            <label className="flex items-center gap-2"><input type="checkbox" /> In Stock Only</label>
            <label className="flex items-center gap-2" style={{ marginTop: '0.5rem' }}><input type="checkbox" /> Verified Authentic Only</label>
          </div>
        </aside>

        {/* Product Grid */}
        <div style={{ flex: 1 }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Showing {filteredProducts.length} results</span>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', outline: 'none' }}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {filteredProducts.map(product => (
                <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '1rem', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-md)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>{product.brand}</div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '1rem' }}>
                      {formatPrice(product.price, currency)}
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`} className="btn-primary" style={{ textAlign: 'center', width: '100%', padding: '0.6rem' }}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
