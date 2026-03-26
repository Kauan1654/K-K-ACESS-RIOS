import { ShoppingBag } from "lucide-react";

export default function App() {
  const whatsapp = "https://wa.me/5589981475656";

  const products = [
    {
      name: "Base Líquida Matte",
      price: "R$ 49,90",
      oldPrice: "R$ 79,90",
      badge: "🔥 Mais vendido",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kit Pincéis Profissionais",
      price: "R$ 69,90",
      oldPrice: "R$ 99,90",
      badge: "⭐ Favorito",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Paleta de Sombras",
      price: "R$ 59,90",
      oldPrice: "R$ 89,90",
      badge: "💄 Novo",
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Batom Matte",
      price: "R$ 29,90",
      oldPrice: "R$ 49,90",
      badge: "🔥 Promoção",
      img: "https://images.unsplash.com/photo-1585386959984-a415522316e9?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* FAIXA */}
      <div style={{ background: "#ff4d6d", color: "white", textAlign: "center", padding: 10 }}>
        💄 FRETE GRÁTIS • PAGAMENTO VIA PIX • BELEZA COM DESCONTO
      </div>

      {/* HEADER */}
      <div style={{ padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#ff4d6d" }}>K & K ACESSÓRIOS</h1>
        <a href={whatsapp} target="_blank">
          <button style={{ background: "#ff4d6d", color: "white", padding: 10, border: "none", borderRadius: 5 }}>
            WhatsApp
          </button>
        </a>
      </div>

      {/* BANNER */}
      <div style={{
        background: "linear-gradient(to right, #ff4d6d, #ff758f)",
        color: "white",
        padding: 40,
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: 32 }}>Maquiagem e beleza com até 50% OFF 💄</h2>
        <p>Os produtos mais vendidos do momento</p>
      </div>

      {/* PRODUTOS */}
      <div style={{ padding: 20 }}>
        <h2>Produtos</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20
        }}>
          {products.map((p, i) => (
            <div key={i} style={{ border: "1px solid #eee", padding: 10, borderRadius: 10, position: "relative" }}>
              <img src={p.img} style={{ width: "100%", borderRadius: 10 }} />

              {/* BADGE */}
              <span style={{
                position: "absolute",
                top: 10,
                left: 10,
                background: "#ff4d6d",
                color: "white",
                padding: "4px 8px",
                borderRadius: 5,
                fontSize: 12
              }}>
                {p.badge}
              </span>

              <h3>{p.name}</h3>

              <p style={{ color: "#ff4d6d", fontWeight: "bold" }}>{p.price}</p>
              <p style={{ textDecoration: "line-through", color: "#999", fontSize: 14 }}>
                {p.oldPrice}
              </p>

              <a
                href={`${whatsapp}?text=${encodeURIComponent(`Olá! Quero comprar ${p.name} por ${p.price}`)}`}
                target="_blank"
              >
                <button style={{ width: "100%", padding: 10, background: "#ff4d6d", color: "white", border: "none", borderRadius: 5 }}>
                  Comprar
                </button>
              </a>

            </div>
          ))}
        </div>
      </div>

      {/* BOTÃO WHATSAPP FIXO */}
      <a href={whatsapp} target="_blank" style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#25D366",
        color: "white",
        padding: "12px 16px",
        borderRadius: 50,
        fontWeight: "bold",
        textDecoration: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}>
        WhatsApp
      </a>

    </div>
  );
}
