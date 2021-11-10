import React from 'react';
import '../style.css';

export default function Common({ children }) {
  return (
    <div>
      <header style={{ borderBottom: '1px solid #ccc', padding: '5px' }}>
        Header
      </header>
      <div style={{ padding: '5rem 0' }}>{children}</div>
      <footer style={{ borderTop: '1px solid #ccc', padding: '5px' }}>
        footer
      </footer>
    </div>
  );
}
