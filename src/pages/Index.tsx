import Particles from "@/components/Particles";
import HeroBadge from "@/components/HeroBadge";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";

const products = [
  { name: "Tirzepatida", dose: "2.5mg", price: "R$ 149" },
  { name: "Tirzepatida", dose: "5mg", price: "R$ 249", highlight: true },
  { name: "Tirzepatida", dose: "7.5mg", price: "R$ 349" },
  { name: "Tirzepatida", dose: "10mg", price: "R$ 449" },
];

const Index = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Background gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, hsl(214 80% 20%) 0%, hsl(218 85% 8%) 70%)",
      }}
    />

    {/* Radial glow */}
    <div
      className="animate-pulse-glow absolute left-1/2 top-1/3 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(214 80% 50% / 0.25) 0%, transparent 70%)",
      }}
    />

    <Particles />

    {/* Content */}
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
      {/* Badge */}
      <HeroBadge />

      {/* Headline */}
      <h1 className="text-glow-white mt-6 text-center text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        OS MELHORES PREÇOS
        <br />
        <span className="text-glow text-primary">DO BRASIL</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground">
        Entre no grupo agora e receba ofertas exclusivas todos os dias
      </p>

      {/* Products */}
      <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.dose} {...p} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <WhatsAppButton />
        <p className="flex items-center gap-2 text-sm font-medium text-primary">
          <span>⚡</span> Vagas limitadas no grupo
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-muted-foreground">
        ⚠️ Compre apenas com administradores oficiais
      </footer>
    </div>
  </div>
);

export default Index;
