const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between bg-gray-300 rounded-lg px-20">
        <a href="/" className="font-bold">
          Componentes
        </a>
        <ul className="flex gap-12">
          <a className="hover:scale-105 transition" href="/">
            Home
          </a>
          <a className="hover:scale-105 transition" href="/produtos">
            Produtos
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
