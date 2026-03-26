export default function App() {
  const products = [
    {
      name: "Escova Secadora Profissional",
      price: "R$ 129,90",
      link: "https://shopee.com.br/",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
    },
    {
      name: "Removedor de Cravos Elétrico",
      price: "R$ 59,90",
      link: "https://shopee.com.br/",
      img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e"
    },
    {
      name: "Massageador Facial",
      price: "R$ 49,90",
      link: "https://shopee.com.br/",
      img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273"
    },
    {
      name: "Aparador de Sobrancelha",
      price: "R$ 39,90",
      link: "https://shopee.com.br/",
      img: "https://images.unsplash.com/photo-1588776814546-ec7e9c5c0c62"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>K & K ACESSÓRIOS</h1>
      <p>Beleza e cuidados pessoais com preço especial 🔥</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        {products.map((p, i) => (
          <div key={i} style={{ border: "1px solid #ddd", padding: 10, borderRadius: 10 }}>
            <img src={p.img} style={{ width: "100%", borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <a href={p.link} target="_blank">
              <button style={{ padding: 10, background: "black", color: "white", border: "none" }}>
                Comprar agora
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
