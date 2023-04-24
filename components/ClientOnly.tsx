'use client';

import 'client-only';

function ClientOnly() {
  const isServer = typeof window === 'undefined';

  const renderInfo = `ClientOnly-Komponente gerendert auf ${
    isServer ? 'Server' : 'Client (Browser)'
  }`;

  console.log(renderInfo);
  return (
    <div>
      <strong style={{ color: 'red' }}>ClientOnly-Komponente</strong>
      <div>Bildschirmbreite: {window.innerWidth}</div>
    </div>
  );
}
export default ClientOnly;
