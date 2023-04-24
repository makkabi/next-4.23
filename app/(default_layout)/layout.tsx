type Props = {
  children: React.ReactNode;
};
export default function layout({ children }: Props) {
  return <main className="default-layout">{children}</main>;
}
