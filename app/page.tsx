import dynamic from 'next/dynamic';

import Client from '@/components/Client';
import Server from '@/components/Server';

/* dynamic ist die Next-Version von React.lazy, damit wird der JS-Code
für die Komponente erst dann geladen, wenn diese tatsächlich dargestellt wird,
was z.B. sinnvoll ist, wenn eine größere Komponente nur manchmal
nach einer User-Aktion angezeigt wird. Das allein verhindert aber NICHT, 
dass das HTML schon auf dem Server gerendert wird. Wenn man das verhindern
möchte, weil der Code nur im Browser funktioniert (z.B. auf window oder document
zugreift), muss man zusätzlich die ssr-Option (Server-Side-Rendering) auf false setzen. */
const ClientOnly = dynamic(() => import('@/components/ClientOnly'), {
  ssr: false,
});

export const metadata = {
  title: 'Willkommen!',
};

export default function Home() {
  return (
    <main>
      <h1>Next</h1>
      {/* Wenn man Server-Komponenten in Client-Komponenten darstellen möchte,
ohne dass diese selbst zu Client-Komponenten werden, muss man diese
entweder als children oder über props in die Client-Komponente
geben. */}
      <Client component={<Server />}>
        <Server />
      </Client>
      <ClientOnly />
    </main>
  );
}
