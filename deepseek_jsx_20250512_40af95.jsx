export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">SimpleShop</a>
          <nav>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}