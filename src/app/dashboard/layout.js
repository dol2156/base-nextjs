import Footer_2 from '@/components/layout/Footer_2';

export default function Layout({ children }) {
  return (
    <div id="Page">
      {children}
      <Footer_2 />
    </div>
  );
}
