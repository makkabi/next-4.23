// Kann in Dateien importiert werden, die garantiert (z.B. aus Sicherheitsgründen)
// nur auf dem Server ausgeführt werden darf. Wirft einen Fehler, wenn
// diese Komponente in eine Client-Komponente importiert wird.
import 'server-only';

export default function Server() {
  const isServer = typeof window === 'undefined';

  const renderInfo = `Server-Komponente gerendert auf ${
    isServer ? 'Server' : 'Client (Browser)'
  }`;

  console.log(renderInfo);

  return (
    <div>
      <strong style={{ color: 'blue' }}>Server-Komponente</strong>
    </div>
  );
}
