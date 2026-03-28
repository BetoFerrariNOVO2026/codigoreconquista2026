import BonusCard from "./BonusCard";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const bonuses = [
  {
    icon: "💕",
    title: "Manual da Reativação das Emoções Ocultas",
    originalPrice: "R$ 197,00",
    description: "Use esses 5 gatilhos invisíveis para fazer a sua ex sentir todo aquele tesão do começo do relacionamento — mesmo que ela jure que te odeie.",
  },
  {
    icon: "⚔️",
    title: "O Dossiê do Rival Descartável",
    originalPrice: "R$ 297,00",
    description: "Se ela estiver ficando com outro cara, use essa técnica e transforme isso numa vantagem desleal para fazê-la esquecê-lo e voltar com você mais rápido.",
  },
  {
    icon: "✉️",
    title: "A Carta Proibida de Último Recurso",
    originalPrice: "R$ 997,00",
    description: "Envie essa mensagem para ela HOJE e veja ela desbloquear você nas redes sociais e parar de agir com frieza, implorando pela sua atenção.",
  },
  {
    icon: "🔥",
    title: "Código do Ciúme Instantâneo",
    originalPrice: "R$ 197,00",
    description: "Use essa frase na sua primeira conversa com ela e faça ela sentir um ciúme visceral de você — ao ponto dela lutar pela sua atenção e correr atrás de você.",
  },
  {
    icon: "✅",
    title: "Checklist Anti-Rejeição",
    originalPrice: "R$ 147,00",
    description: "Evite esses 7 erros da reconquista e aumente suas chances de voltar com ela ainda essa semana em 8x transformando cada um deles numa vantagem.",
  },
];

const SalesSection = () => {
  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in mt-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">
          🎁 Seu Protocolo está pronto!
        </h2>
        <p className="text-muted-foreground text-sm">
          Além do protocolo, você receberá <strong className="text-foreground">5 bônus exclusivos</strong> totalmente grátis:
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {bonuses.map((bonus, i) => (
          <BonusCard
            key={i}
            badge={`bonus-${i}`}
            icon={bonus.icon}
            title={bonus.title}
            originalPrice={bonus.originalPrice}
            description={bonus.description}
          />
        ))}
      </div>

      {/* Testimonials */}
      <div className="flex flex-col gap-3 mt-4">
        <h3 className="text-lg font-bold text-foreground text-center">
          💬 Veja o que estão dizendo:
        </h3>
        <div className="flex flex-col gap-3">
          {[testimonial1, testimonial2, testimonial3, testimonial4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Depoimento ${i + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => window.open("#", "_blank")}
        className="w-full py-4 rounded-lg bg-cta text-cta-foreground font-bold text-lg uppercase tracking-wide hover:opacity-90 transition-opacity animate-pulse"
      >
        QUERO MEU PROTOCOLO AGORA!
      </button>

      <p className="text-muted-foreground text-xs text-center">
        ⚡ Oferta por tempo limitado. Os bônus podem ser removidos a qualquer momento.
      </p>
    </div>
  );
};

export default SalesSection;
