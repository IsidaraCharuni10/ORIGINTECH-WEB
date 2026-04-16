import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Search, Info } from 'lucide-react';

const AuthenticityCheck = () => {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState(null); // 'success', 'warning'
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock logic: 1234 guarantees success, anything else warning for demo
      if (imei === '1234') {
         setResult('success');
      } else {
         setResult('warning');
      }
    }, 1500);
  };

  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Authenticity Verification</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Verify the authenticity of your OriginTech device and view its digital certificate.
        </p>
      </div>

      <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <form onSubmit={handleVerify} className="flex gap-4">
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Enter IMEI or Serial Number</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. 1234"
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', fontSize: '1.1rem', letterSpacing: '2px' }} 
            />
          </div>
          <button className="btn-primary" style={{ alignSelf: 'flex-end', padding: '1rem 2rem' }} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify Device'}
          </button>
        </form>
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <Info size={16} /> To test a successful verification in this prototype, enter "1234".
        </div>
      </div>

      {result === 'success' && (
        <div className="card" style={{ border: '2px solid #10B981', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', textAlign: 'center' }}>
          <ShieldCheck size={64} style={{ color: '#10B981', marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2rem', color: '#10B981', marginBottom: '1rem' }}>Verified Authentic</h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            This device has been verified against the official OriginTech database.
          </p>
          <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>Device:</span> <span>Origin Pro Max</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>IMEI/Serial:</span> <span style={{ fontFamily: 'monospace' }}>{imei}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>Auth Date:</span> <span>{new Date().toLocaleDateString()}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Authority:</span> <span>OriginTech Global</span></div>
          </div>
        </div>
      )}

      {result === 'warning' && (
        <div className="card" style={{ border: '2px solid #EF4444', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', textAlign: 'center' }}>
          <ShieldAlert size={64} style={{ color: '#EF4444', marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2rem', color: '#EF4444', marginBottom: '1rem' }}>Verification Failed</h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            We could not find this IMEI/Serial number in our official database. This device may be counterfeit or not properly registered.
          </p>
          <button className="btn-primary" style={{ backgroundColor: 'transparent', color: '#EF4444', border: '2px solid #EF4444' }}>Report Counterfeit</button>
        </div>
      )}
    </div>
  );
};

export default AuthenticityCheck;
