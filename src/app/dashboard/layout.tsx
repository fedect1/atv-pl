import { Navbar } from '../../components';

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  );
}