import BonusCard from "./BonusCard";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";
import testimonial7 from "@/assets/testimonial-7.png";
import testimonial8 from "@/assets/testimonial-8.png";

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
  {
    icon: "🎁",
    title: "Comunidade Desenrolado",
    originalPrice: "R$ 997,00",
    description: "Um grupo fechado, só de homens que também estão usando o Código da Reconquista — compartilhando prints, frases e vitórias em tempo real.",
  },
  {
    icon: "🎥",
    title: "Lives Semanais Comigo, Mentoria Bruta.",
    originalPrice: "R$ 1.497,00",
    description: "Toda semana eu entro AO VIVO com você e com os outros caras pra destrinchar casos reais, responder dúvidas e entregar novas táticas direto da trincheira.",
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
          Além do protocolo, você receberá <strong className="text-foreground">7 bônus exclusivos</strong> totalmente grátis:
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
          {[testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Depoimento ${i + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Post-testimonial copy */}
      <div className="flex flex-col gap-3 text-foreground text-sm leading-relaxed mt-4">
        <p className="font-bold text-base text-center">E aqui está a melhor parte:</p>
        <p className="text-center">Esses caras estavam exatamente onde você está agora.</p>
        <p>➡️ Bloqueados no WhatsApp.</p>
        <p>➡️ Ignorados.</p>
        <p>➡️ Cheios de arrependimento, dúvidas e medo de nunca mais ter uma chance.</p>
        <p className="font-semibold">Mas decidiram agir.</p>
        <p>E quando aplicaram o protocolo, <strong>o jogo virou.</strong></p>
        <p>Hoje, são eles que recebem mensagem primeiro.</p>
        <p>São eles que fazem a ex sentir saudade de novo.</p>
        <p>São eles que escolheram se queriam voltar — ou se era tarde demais pra ela.</p>
        <p className="font-semibold">E tudo começou com uma única decisão:</p>
        <p>Desbloquear o poder de reprogramar o cérebro da ex com o <strong className="text-primary">Código da Reconquista.</strong></p>
        <p className="font-bold text-center">E você pode tomar essa mesma decisão apertando o botão abaixo:</p>
      </div>

      {/* CTA 1 */}
      <button
        onClick={() => window.open("#", "_blank")}
        className="w-full py-4 rounded-lg bg-cta text-cta-foreground font-bold text-lg uppercase tracking-wide hover:opacity-90 transition-opacity animate-pulse"
      >
        QUERO MEU PROTOCOLO AGORA!
      </button>

      {/* Second copy block */}
      <div className="flex flex-col gap-3 text-foreground text-sm leading-relaxed mt-4">
        <p>E olha… você não está aqui por acaso.</p>
        <p>Você está aqui porque sabe que sua ex não te enxerga mais como antes.</p>
        <p className="font-semibold">E agora você só tem duas opções:</p>
        <p>❌ Continuar mandando mensagens aleatórias, vendo ela correr pros braços de outro.</p>
        <p>✅ Ou aplicar mensagens cirúrgicas do protocolo, que fazem ela querer se comprometer de novo.</p>
        <p className="font-semibold">O <strong className="text-primary">Código da Reconquista</strong> te entrega exatamente:</p>
        <p>👉 O que dizer, quando dizer e como manter a mente dela viciada em você.</p>
        <p className="font-bold text-center">Clique no botão abaixo.</p>
        <p className="text-center">Desbloqueie seu acesso agora.</p>
        <p className="font-bold text-center">E assuma o seu lugar — no centro dos pensamentos dela.</p>
      </div>

      {/* CTA 2 */}
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
