import { ShoppingBag, Star, Truck, ShieldCheck, MessageCircle, Heart, Search, Menu } from "lucide-react";

export default function KKAcessoriosStore() {
  const whatsapp = "https://wa.me/5589981475656";

  const products = [
    {
      name: "Base Líquida Matte",
      price: "R$ 49,90",
      oldPrice: "R$ 79,90",
      badge: "Mais vendida",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
      description: "Cobertura bonita, efeito matte e acabamento elegante."
    },
    {
      name: "Kit Pincéis Profissionais",
      price: "R$ 69,90",
      oldPrice: "R$ 99,90",
      badge: "Favorito",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
      description: "Kit completo para make impecável no dia a dia."
    },
    {
      name: "Paleta de Sombras",
      price: "R$ 59,90",
      oldPrice: "R$ 89,90",
      badge: "Novo",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
      description: "Cores versáteis para looks leves e marcantes."
    },
    {
      name: "Batom Matte",
      price: "R$ 29,90",
      oldPrice: "R$ 49,90",
      badge: "Promoção",
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=900&q=80",
      description: "Longa duração, cor intensa e visual sofisticado."
    },
    {
      name: "Iluminador Glow",
      price: "R$ 39,90",
      oldPrice: "R$ 59,90",
      badge: "Brilho",
      image: "https://images.unsplash.com/photo-1631214540553-ff044a3cc2d9?auto=format&fit=crop&w=900&q=80",
      description: "Realça o rosto com brilho delicado e elegante."
    },
    {
      name: "Escova Secadora",
      price: "R$ 129,90",
      oldPrice: "R$ 179,90",
      badge: "Top",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
      description: "Praticidade e beleza em poucos minutos."
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Entrega para todo Brasil",
      description: "Atendimento rápido e envio com praticidade."
    },
    {
      icon: ShieldCheck,
      title: "Compra segura",
      description: "Pede pelo WhatsApp e paga com confiança."
    },
    {
      icon: Star,
      title: "Produtos em alta",
      description: "Itens femininos com maior procura e saída."
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50 text-zinc-900">
      <div className="bg-rose-500 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">
        ✨ FRETE GRÁTIS EM OFERTAS SELECIONADAS • PAGAMENTO VIA PIX • BELEZA COM ATÉ 50% OFF
      </div>

      <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-rose-500 p-2 text-white shadow-lg">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-rose-600 md:text-2xl">K & K ACESSÓRIOS</h1>
              <p className="text-xs text-zinc-500 md:text-sm">Loja feminina de beleza e maquiagem</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a href="#inicio" className="transition hover:text-rose-500">Início</a>
            <a href="#produtos" className="transition hover:text-rose-500">Produtos</a>
            <a href="#ofertas" className="transition hover:text-rose-500">Ofertas</a>
            <a href="#sobre" className="transition hover:text-rose-500">Sobre</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="rounded-2xl border border-rose-100 bg-white p-3 transition hover:bg-rose-50">
              <Search size={18} />
            </button>
            <button className="rounded-2xl border border-rose-100 bg-white p-3 transition hover:bg-rose-50">
              <Heart size={18} />
            </button>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
            >
              WhatsApp
            </a>
            <button className="rounded-2xl border border-rose-100 bg-white p-3 transition hover:bg-rose-50 lg:hidden">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
            Coleção feminina
          </span>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Beleza, delicadeza e estilo num só lugar 💄
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            Uma loja feminina com visual elegante, produtos em tendência e atendimento rápido pelo WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="rounded-2xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Ver produtos
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
            >
              Comprar no WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl bg-white p-4 shadow-md ring-1 ring-rose-100">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500 text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-zinc-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
            alt="Produtos femininos de beleza"
            className="h-72 w-full rounded-[2rem] object-cover shadow-2xl sm:h-full"
          />
          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-gradient-to-br from-rose-400 to-pink-500 p-6 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-rose-100">Oferta especial</p>
              <h3 className="mt-2 text-3xl font-black">Até 50% OFF</h3>
              <p className="mt-3 text-sm leading-6 text-rose-50">
                Produtos de maquiagem, pincéis e beleza com visual feminino e preço irresistível.
              </p>
              <a href="#produtos">
                <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-rose-500 transition hover:scale-[1.02]">
                  Ver promoções
                </button>
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
              alt="Maquiagem feminina"
              className="h-48 w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="ofertas" className="mx-auto max-w-7xl px-6 pb-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white shadow-2xl md:p-10">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">Destaque da semana</p>
              <h3 className="mt-2 text-3xl font-black md:text-4xl">Os queridinhos da loja feminina</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-rose-50 md:text-base">
                Escolhe os teus produtos favoritos e faz a compra directamente no WhatsApp.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a href="#produtos" className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-rose-500 transition hover:scale-[1.02]">
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">Produtos em destaque</p>
            <h3 className="text-3xl font-black md:text-4xl">Os mais amados da loja</h3>
          </div>
          <p className="max-w-xl text-zinc-600">
            Itens femininos com apresentação bonita, preço atractivo e compra rápida pelo WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-rose-100 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-rose-500 shadow">
                  {product.badge}
                </span>
                <button className="absolute right-4 top-4 rounded-full bg-white/95 p-2 text-rose-500 shadow transition hover:scale-105">
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
                  <span className="ml-2 text-xs font-medium text-zinc-500">4.9 avaliações</span>
                </div>

                <h4 className="text-xl font-bold">{product.name}</h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{product.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-black text-rose-500">{product.price}</span>
                  <span className="text-sm text-zinc-400 line-through">{product.oldPrice}</span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`${whatsapp}?text=${encodeURIComponent(`Olá! Quero comprar ${product.name} por ${product.price}`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
                      Comprar
                    </button>
                  </a>
                  <button className="rounded-2xl border border-rose-200 bg-white px-4 py-3 text-sm font-semibold text-rose-500 transition hover:bg-rose-50">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">Sobre a marca</p>
            <h3 className="mt-2 text-3xl font-black text-zinc-900 md:text-4xl">K & K ACESSÓRIOS</h3>
            <p className="mt-5 max-w-xl leading-7 text-zinc-600">
              Uma loja feminina criada para destacar beleza, maquiagem e produtos delicados com visual elegante e atendimento próximo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-rose-50 p-6">
              <h4 className="text-lg font-bold text-rose-500">Visual feminino</h4>
              <p className="mt-2 text-sm text-zinc-600">Cores suaves, elegância e cara de loja bonita.</p>
            </div>
            <div className="rounded-[2rem] bg-rose-50 p-6">
              <h4 className="text-lg font-bold text-rose-500">Venda rápida</h4>
              <p className="mt-2 text-sm text-zinc-600">Cliente vê, gosta e chama no WhatsApp.</p>
            </div>
            <div className="rounded-[2rem] bg-rose-50 p-6">
              <h4 className="text-lg font-bold text-rose-500">Produtos em alta</h4>
              <p className="mt-2 text-sm text-zinc-600">Itens com mais procura no nicho feminino.</p>
            </div>
            <div className="rounded-[2rem] bg-rose-50 p-6">
              <h4 className="text-lg font-bold text-rose-500">Fácil de editar</h4>
              <p className="mt-2 text-sm text-zinc-600">Troca fotos, preços e produtos quando quiseres.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-rose-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 K & K ACESSÓRIOS. Todos os direitos reservados.</p>
          <p>Loja feminina online criada para venda sem estoque.</p>
        </div>
      </footer>
    </div>
  );
}
