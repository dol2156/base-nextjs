import BottomRightUtil_1 from '@/components/layout/BottomRightUtil_1';

export default function Layout({ children }) {
  return (
    <>
      <div id="Page">{children}</div>
      <BottomRightUtil_1 />
    </>
  );
}
