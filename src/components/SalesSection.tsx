import BonusCard from "./BonusCard";
import CountdownTimer from "./CountdownTimer";
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

const CTAButton = () => (
  <button
    onClick={() => window.open("https://adsroi.com.br/checkout/sDGnMp?aff=[ID_AFILIADO]", "_blank")}
    className="w-full py-4 rounded-lg bg-cta text-cta-foreground font-bold text-lg uppercase tracking-wide hover:opacity-90 transition-opacity animate-pulse"
  >
    Clique aqui para RECONQUISTAR sua ex!
  </button>
);

const SalesSection = () => {
  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in mt-6">
      {/* Protocolo Gerado header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-foreground mb-1">
          ✅ Protocolo Gerado!
        </h2>
        <p className="text-muted-foreground text-sm">
          Resgate agora... 👇
        </p>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* CTA 1 */}
      <CTAButton />

      {/* Guarantee section */}
      <div className="flex flex-col gap-3 text-foreground text-sm leading-relaxed">
        <p className="text-center font-semibold text-base">
          Ao garantir seu acesso ao <strong>CÓDIGO DA RECONQUISTA</strong> você recebe uma{" "}
          <strong>GARANTIA INQUEBRÁVEL</strong> de 90 dias{" "}
          <strong className="text-primary">+5 PRESENTES</strong>! ⬇️
        </p>

        <p>Eu sei exatamente o que está passando pela sua cabeça agora.</p>
        <p>"E se eu comprar e nada acontecer?"</p>
        <p>"E se ela não voltar?"</p>
        <p>"E se for só mais uma promessa vazia na internet?"</p>

        <p>
          E é por isso que eu decidi fazer algo que nenhum outro especialista em relacionamentos tem coragem de fazer: te dar{" "}
          <strong>uma garantia de 90 dias</strong>, sem pegadinhas e sem letra miúda.
        </p>

        <p className="font-semibold">Funciona assim:</p>
        <p>Você entra pro Código da Reconquista hoje…</p>
        <p>Aplica o que eu ensino, envia as mensagens, segue o protocolo passo a passo…</p>
        <p>
          E se em até 90 dias sua ex não voltar pra você, eu devolvo cada centavo do seu investimento.
        </p>
        <p className="font-semibold">Sem perguntas, sem burocracia, sem letras miúdas.</p>
        <p>Se não funcionar pra você, você não paga nada.</p>
        <p className="font-semibold">Simples assim.</p>

        <p>Eu faço isso porque sei o que eu entrego.</p>
        <p>E porque já vi esse mesmo método transformar homens destruídos:</p>
        <p>Em caras que reconquistaram o respeito, o desejo e o amor da mulher que mais amavam.</p>

        <p>Então, você não tá investindo em "mais um curso".</p>
        <p>Você está investindo em uma segunda chance de reescrever a história da sua vida amorosa.</p>
        <p className="font-semibold">E eu confio tanto nesse método que boto meu nome e minha reputação em jogo pra provar isso.</p>

        <p>Então, agora é contigo.</p>
        <p>Você pode continuar rolando a tela, fingindo que vai pensar mais um pouco…</p>
        <p>Ou pode clicar no botão abaixo…</p>
        <p className="font-semibold">E começar agora o processo que vai trazer a sua ex de volta pra sua vida.</p>

        <p className="font-semibold">A escolha é simples:</p>
        <p>💔 Ficar preso nos 12% e perder ela pra sempre.</p>
        <p>❤️ Ou agir agora e usar o mesmo protocolo que já reconectou mais de 30 mil casais.</p>

        <p className="text-center font-semibold">
          Clique aqui e garanta seu acesso ao <strong>Código da Reconquista</strong> com 90 dias de garantia 👇
        </p>
      </div>

      {/* CTA 2 */}
      <CTAButton />

      {/* Bonus intro */}
      <div className="text-center">
        <p className="text-foreground text-base font-semibold">
          E se você agir agora, eu vou te entregar{" "}
          <strong className="text-primary">+5 presentes especiais</strong>, olha só!
        </p>
      </div>

      {/* Bonus cards */}
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

      {/* CTA 3 */}
      <CTAButton />

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

      {/* CTA 4 */}
      <CTAButton />

      <p className="text-muted-foreground text-xs text-center">
        ⚡ Oferta por tempo limitado. Os bônus podem ser removidos a qualquer momento.
      </p>
    </div>
  );
};

export default SalesSection;
