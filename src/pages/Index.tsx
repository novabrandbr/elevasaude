import Particles from "@/components/Particles";
import WhatsAppButton from "@/components/WhatsAppButton";
import productsBanner from "@/assets/products-banner.png";
import logoEleva from "@/assets/logo-eleva.png";

const Index = () => (
  <div className="relative h-[100dvh] overflow-hidden">
    {/* Background */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(214 80% 20%) 0%, hsl(218 85% 8%) 70%)",
      }}
    />
    <div
      className="animate-pulse-glow absolute left-1/2 top-1/4 z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(214 80% 50% / 0.2) 0%, transparent 70%)",
      }}
    />
    <Particles />

    {/* Content — full viewport, no scroll */}
    <div className="relative z-10 flex h-full flex-col items-center justify-between px-4 py-4 sm:py-6">
      {/* Top: Logo */}
      <img
        src={logoEleva}
        alt="Eleva Saúde"
        className="h-12 w-auto shrink-0 object-contain sm:h-16"
      />

      {/* Middle: Headline + Banner */}
      <div className="flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary sm:px-4 sm:text-sm">
          🔥 PROMOÇÃO DE TIRZEPATIDA 🔥
        </div>

        {/* Headline */}
        <h1 className="text-glow-white text-center text-2xl font-extrabold leading-none tracking-tight text-foreground sm:text-4xl md:text-5xl">
          OS MELHORES PREÇOS
          <br />
          <span className="text-glow text-primary">DO BRASIL</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-sm text-center text-xs text-muted-foreground sm:text-sm">
          Entre no grupo e receba ofertas exclusivas todos os dias
        </p>

        {/* Products Banner */}
        <div className="w-full max-w-md px-2">
          <div className="box-glow-blue overflow-hidden rounded-xl border border-border">
            <img
              src={productsBanner}
              alt="Produtos Tirzepatida"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom: CTA */}
      <div className="flex shrink-0 flex-col items-center gap-2 pb-2">
        <WhatsAppButton />
        <p className="flex items-center gap-1.5 text-xs font-medium text-primary">
          ⚡ Vagas limitadas no grupo
        </p>
        <p className="text-[10px] text-muted-foreground">
          ⚠️ Compre apenas com administradores oficiais
        </p>
      </div>
    </div>
  </div>
);

export default Index;
