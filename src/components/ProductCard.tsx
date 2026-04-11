interface ProductCardProps {
  name: string;
  dose: string;
  price: string;
  highlight?: boolean;
}

const ProductCard = ({ name, dose, price, highlight }: ProductCardProps) => (
  <div
    className={`relative rounded-2xl border p-6 text-center transition-all duration-300 hover:scale-105 ${
      highlight
        ? "border-primary/50 bg-card box-glow-yellow"
        : "border-border bg-card/60 box-glow-blue"
    }`}
  >
    {highlight && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
        MAIS VENDIDO
      </div>
    )}
    <h3 className="mb-1 text-lg font-bold text-foreground">{name}</h3>
    <p className="mb-3 text-sm text-muted-foreground">{dose}</p>
    <p className="text-glow text-3xl font-extrabold text-primary">{price}</p>
  </div>
);

export default ProductCard;
