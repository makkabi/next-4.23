'use client';

//import Server from './Server';

type Props = {
  children?: React.ReactNode;
  component?: React.ReactNode;
};

function Client({ children, component }: Props) {
  const isServer = typeof window === 'undefined';

  const renderInfo = `Client-Komponente gerendert auf ${
    isServer ? 'Server' : 'Client (Browser)'
  }`;

  console.log(renderInfo);
  return (
    <div>
      <strong style={{ color: 'orange' }}>Client-Komponente</strong>
      {/* Server-Komponenten, die in Client-Komponenten importiert werden,
	  werden automatisch selbst zu Client-Komponenten, d.h. ihr Code
	  wird an den Browser ausgeliefert und dort auch ausgeführt. */}
      {/* <Server /> */}
      <div>{children}</div>
      {component}
    </div>
  );
}
export default Client;
