import Particles from "@/components/Particles";
import HeroBadge from "@/components/HeroBadge";
import WhatsAppButton from "@/components/WhatsAppButton";
import productsBanner from "@/assets/products-banner.png";
import logoEleva from "@/assets/logo-eleva.png";

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
      {/* Logo */}
      <img src={logoEleva} alt="Eleva Saúde" className="mb-8 h-24 w-auto object-contain" />

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

      {/* Products Banner */}
      <div className="mt-12 w-full max-w-2xl">
        <div className="box-glow-blue overflow-hidden rounded-2xl border border-border">
          <img
            src={productsBanner}
            alt="Produtos Tirzepatida"
            className="h-auto w-full object-cover"
          />
        </div>
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
