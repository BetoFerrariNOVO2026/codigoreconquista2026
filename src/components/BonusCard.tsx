interface BonusCardProps {
  badge: string;
  icon: string;
  title: string;
  originalPrice: string;
  description: string;
}

const BonusCard = ({ badge, icon, title, originalPrice, description }: BonusCardProps) => {
  return (
    <div className="rounded-xl border-2 border-primary/20 bg-card p-5 flex flex-col gap-3">
      <div className="bg-primary/10 rounded-lg px-3 py-2 text-sm font-bold text-primary">
        ⚠️ DE {originalPrice} POR R$ 0,00 SE VOCÊ AGIR EM 15 MINUTOS
      </div>

      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
      </div>

      <div>
        <span className="text-muted-foreground line-through text-sm">{originalPrice}</span>
        <p className="text-2xl font-bold text-green-500">GRÁTIS</p>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

      <div className="flex items-center justify-between border-t border-border pt-3 mt-1">
        <span className="flex items-center gap-1 text-sm font-semibold text-primary">
          🔥 Bônus Exclusivo
        </span>
        <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          100% GRÁTIS
        </span>
      </div>
    </div>
  );
};

export default BonusCard;
