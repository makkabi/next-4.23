export const metadata = {
  description: 'Unser tolles Team',
};

type Props = {
  children: React.ReactNode;
};
export default function layout({ children }: Props) {
  return (
    <div>
      <div style={{ fontSize: '3rem' }}>🧑‍🤝‍🧑👫</div>
      {children}
      <div>
        <strong>Wir suchen Verstärkung!</strong>
      </div>
    </div>
  );
}
