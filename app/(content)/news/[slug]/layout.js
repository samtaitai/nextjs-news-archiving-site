export default function NewsDetailLayout({ children, modal }) {
  // children is [slug]/default.js
  return (
    <>
      {modal}
      {children}
    </>
  );
}
