// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <div>
      <h1 className="text-5xl">Produtos</h1>
      <ul className="flex flex-col gap-4">
        {produtos.map((p) => (
          <div key={p.nome} className="border border-black">
            <h1 className="text-2xl font-bold">{p.nome}</h1>
            <li>{p.propriedades[0]}</li>
            <li>{p.propriedades[1]}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
