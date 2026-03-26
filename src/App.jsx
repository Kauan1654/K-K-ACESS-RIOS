import { ShoppingBag, Star, Truck, ShieldCheck, MessageCircle, Instagram, Heart, Search, Menu } from "lucide-react";

export default function KKAcessoriosStore() {
  const whatsapp = "https://wa.me/5589981475656";

  const products = [
    {
      name: "Base Líquida Matte",
      price: "R$ 49,90",
      oldPrice: "R$ 79,90",
      badge: "Mais vendido",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      description: "Cobertura uniforme e efeito matte duradouro.",
      cta: "Comprar agora"
    },
    {
      name: "Kit Pincéis Profissionais",
      price: "R$ 69,90",
      oldPrice: "R$ 99,90",
      badge: "Oferta",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      description: "Kit completo para make impecável no dia a dia.",
      cta: "Comprar agora"
    },
    {
      name: "Paleta de Sombras",
      price: "R$ 59,90",
      oldPrice: "R$ 89,90",
      badge: "Novo",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      description: "Cores intensas para looks leves ou marcantes.",
      cta: "Comprar agora"
    },
    {
      name: "Batom Matte",
      price: "R$ 29,90",
      oldPrice: "R$ 49,90",
      badge: "Top",
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80",
      description: "Alta fixação e acabamento elegante.",
      cta: "Comprar agora"
    },
    {
      name: "Iluminador Glow",
      price: "R$ 39,90",
      oldPrice: "R$ 59,90",
      badge: "Promo",
      image: "https://images.unsplash.com/photo-1631214540553-ff044a3cc2d9?auto=format&fit=crop&w=800&q=80",
      description: "Brilho bonito para destacar o rosto.",
      cta: "Comprar agora"
    },
    {
      name: "Escova Secadora",
      price: "R$ 129,90",
      oldPrice: "R$ 179,90",
      badge: "Favorito",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80",
      description: "Praticidade e beleza em poucos minutos.",
      cta: "Comprar agora"
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Entrega para todo o Brasil",
      description: "Enviamos para várias regiões com praticidade."
    },
    {
      icon: ShieldCheck,
      title: "Compra segura",
      description: "Atendimento rápido e pagamento via Pix."
    },
    {
      icon: Star,
      title: "Produtos em tendência",
      description: "Itens com alta procura e boa saída."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="bg-neutral-900 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">
        🔥 FRETE GRÁTIS • PAGAMENTO VIA PIX • ENTREGA PARA TODO BRASIL
      </div>

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-neutral-900 p-2 text-white shadow-lg">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight md:text-2xl">K & K ACESSÓRIOS</h1>
              <p className="text-xs text-neutral-500 md:text-sm">Beleza, maquiagem e acessórios em tendência</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a href="#inicio" className="transition hover:text-neutral-500">Início</a>
            <a href="#produtos" className="transition hover:text-neutral-500">Produtos</a>
            <a href="#ofertas" className="transition hover:text-neutral-500">Ofertas</a>
            <a href="#sobre" className="transition hover:text-neutral-500">Sobre</a>
            <a href="#contacto" className="transition hover:text-neutral-500">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="rounded-2xl border border-neutral-200 p-3 transition hover:bg-neutral-100">
              <Search size={18} />
            </button>
            <button className="rounded-2xl border border-neutral-200 p-3 transition hover:bg-neutral-100">
              <Heart size={18} />
            </button>
            <button className="rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]">
              Carrinho (0)
            </button>
            <button className="rounded-2xl border border-neutral-200 p-3 transition hover:bg-neutral-100 lg:hidden">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full bg-neutral-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Coleção em alta
          </span>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Maquiagem e beleza com até 50% OFF 🔥
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
            Produtos virais de beleza com entrega para todo Brasil 💄
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Comprar agora
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl bg-white p-4 shadow-md ring-1 ring-neutral-200">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-neutral-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
            alt="Produtos de beleza"
            className="h-72 w-full rounded-[2rem] object-cover shadow-2xl sm:h-full"
          />
          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-pink-600 p-6 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-pink-100">Oferta especial</p>
              <h3 className="mt-2 text-3xl font-black">Até 50% OFF</h3>
              <p className="mt-3 text-sm leading-6 text-pink-50">
                Maquiagem, pincéis, batons e produtos de beleza com preço promocional.
              </p>
              <a href="#produtos">
                <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-pink-600 transition hover:scale-[1.02]">
                  Ver promoções
                </button>
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
              alt="Maquiagem"
              className="h-48 w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="ofertas" className="mx-auto max-w-7xl px-6 pb-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-pink-600 to-rose-500 p-8 text-white shadow-2xl md:p-10">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">Destaque da semana</p>
              <h3 className="mt-2 text-3xl font-black md:text-4xl">Produtos de beleza para revenda com ótima margem</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-pink-50 md:text-base">
                Recebe no WhatsApp, fecha no Pix e revende com lucro.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a href="#produtos" className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-pink-600 transition hover:scale-[1.02]">
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Produtos em destaque</p>
            <h3 className="text-3xl font-black md:text-4xl">Os mais procurados da loja</h3>
          </div>
          <p className="max-w-xl text-neutral-600">
            Produtos de beleza e maquiagem com botão de compra pelo WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-neutral-900 shadow">
                  {product.badge}
                </span>
                <button className="absolute right-4 top-4 rounded-full bg-white/95 p-2 text-neutral-900 shadow transition hover:scale-105">
                  <Heart size={16} />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="ml-2 text-xs font-medium text-neutral-500">4.9 avaliações</span>
                </div>

                <h4 className="text-xl font-bold">{product.name}</h4>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{product.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-black">{product.price}</span>
                  <span className="text-sm text-neutral-400 line-through">{product.oldPrice}</span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`${whatsapp}?text=${encodeURIComponent(`Olá! Quero comprar ${product.name} por ${product.price}`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full rounded-2xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
                      Comprar
                    </button>
                  </a>
                  <button className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="bg-neutral-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Sobre a marca</p>
            <h3 className="mt-2 text-3xl font-black md:text-4xl">K & K ACESSÓRIOS</h3>
            <p className="mt-5 max-w-xl text-neutral-300 leading-7">
              Loja voltada para maquiagem, beleza e revenda com boa margem.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-bold">Sem estoque</h4>
              <p className="mt-2 text-sm text-neutral-300">Venda primeiro e compra depois no fornecedor.</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-bold">WhatsApp rápido</h4>
              <p className="mt-2 text-sm text-neutral-300">Cliente chama e fecha contigo direto.</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-bold">Pix</h4>
              <p className="mt-2 text-sm text-neutral-300">Recebe antes e depois faz o pedido.</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-bold">Fácil de editar</h4>
              <p className="mt-2 text-sm text-neutral-300">Podes trocar produtos e preços quando quiseres.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 K & K ACESSÓRIOS. Todos os direitos reservados.</p>
          <p>Loja online criada para venda sem estoque.</p>
        </div>
      </footer>
    </div>
  );
}
