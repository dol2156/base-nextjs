import Nav_1 from '@/components/layout/Nav_1';
import '@/scss/dashboard.scss';

export default function Layout({ children }) {
  return (
    <div id="PageDashboard" className={`RRR flex flex-row gap-[0] h-[--vh-100] overflow-hidden`}>
      <div className={`Fc overflow-auto`}>
        <Nav_1 />
      </div>
      <div className={`Fc flex-1`}>{children}</div>
    </div>
  );
}
