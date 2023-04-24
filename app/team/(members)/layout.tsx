import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};
export default function layout({ children }: Props) {
  return (
    <div>
      {children}
      <Link href="/team">Zurück zur Team-Seite</Link>
    </div>
  );
}
