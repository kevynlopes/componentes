import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Home from "./components/Home";

const App = () => {
  const { pathname } = window.location;
  let Component;

  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Header />
      <Component />
    </div>
  );
};

export default App;
