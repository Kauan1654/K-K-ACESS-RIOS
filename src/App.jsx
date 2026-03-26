export default function App() {

const whatsapp = "https://wa.me/5589981475656";

  const products = [
    {
      name: "Base Líquida Matte",
      price: "R$ 49,90",
      img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
    },
    {
      name: "Kit Pincéis Profissionais",
      price: "R$ 69,90",
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    {
      name: "Paleta de Sombras 24 Cores",
      price: "R$ 59,90",
      img: "https://images.unsplash.com/photo-1583241800698-4b8f3bff3b1f"
    },
    {
      name: "Batom Matte Longa Duração",
      price: "R$ 29,90",
      img: "https://images.unsplash.com/photo-1585386959984-a415522316e9"
    },
    {
      name: "Iluminador Facial Glow",
      price: "R$ 39,90",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050"
    },
    {
      name: "Removedor de Cravos Elétrico",
      price: "R$ 59,90",
      img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e"
    },
    {
      name: "Escova Secadora Profissional",
      price: "R$ 129,90",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
    },
    {
      name: "Massageador Facial",
      price: "R$ 49,90",
      img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273"
    },
    {
      name: "Aparador de Sobrancelha",
      price: "R$ 39,90",
      img: "https://images.unsplash.com/photo-1588776814546-ec7e9c5c0c62"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>K & K ACESSÓRIOS</h1>
      <p>Beleza, maquiagem e cuidados pessoais com preço especial 🔥</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 20
      }}>
        {products.map((p, i) => (
          <div key={i} style={{
            border: "1px solid #ddd",
            padding: 10,
            borderRadius: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}>
            <img src={p.img} style={{ width: "100%", borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p style={{ fontWeight: "bold" }}>{p.price}</p>

            <a
              href={`${whatsapp}?text=${encodeURIComponent(
                `Olá! Quero comprar: ${p.name} por ${p.price}`
              )}`}
              target="_blank"
            >
              <button style={{
                padding: 10,
                background: "#ff4d6d",
                color: "white",
                border: "none",
                borderRadius: 5,
                width: "100%",
                cursor: "pointer"
              }}>
                Comprar no WhatsApp
              </button>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}
