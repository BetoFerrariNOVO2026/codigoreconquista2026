import { useState, useRef, useEffect } from "react";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import CheckItem from "@/components/CheckItem";
import whatsappChat from "@/assets/whatsapp-chat.png";
import { AlertCircle } from "lucide-react";

const TOTAL_STEPS = 8;

const quizData = [
  {
    question: null, // landing page
  },
  {
    question: "Quando foi o término entre vocês?",
    options: [
      "Faz menos de 1 semana.",
      "Entre 1 e 4 semanas.",
      "Entre 1 e 3 meses.",
      "Mais de 3 meses.",
    ],
  },
  {
    question: "Vocês ainda têm algum tipo de contato hoje em dia?",
    options: [
      "Sim, conversamos de vez em quando.",
      "Ela fala comigo, mas é fria e distante.",
      "Só responde por educação.",
      "Não, ela me bloqueou em tudo.",
    ],
  },
  {
    question: "O que mais dói em você desde o Término?",
    options: [
      "Solidão forte.",
      "Culpa e remorso.",
      "Ansiedade e medo do futuro.",
      "Imaginar que ela já tá ficando com outro cara.",
    ],
  },
  {
    question: "Se ela realmente se apaixonar por outro cara, o que aconteceria com você?",
    options: [
      "Eu perderia completamente o chão.",
      "Ficaria mal, mas tentaria seguir em frente.",
      "Tentaria reconquistar de qualquer jeito.",
      "Fingiria que não ligo, mas morreria por dentro.",
    ],
  },
  {
    question: "Quanto tempo você acha que ainda tem antes dela te esquecer de vez?",
    options: [
      "Poucos dias — sinto que já estou sendo substituído.",
      "Algumas semanas — ainda dá pra agir.",
      "Uns meses — acho que ela ainda sente algo.",
      "Não sei, mas tenho medo de descobrir.",
    ],
  },
  {
    question: "Se existisse um vídeo curto de 60 segundos mostrando o passo a passo exato para fazer sua ex voltar nas próximas 48 horas, você se comprometeria a assistir esse vídeo até o final?",
    options: [
      "Sim, quero assistir agora.",
      "Sim, quero assistir e aplicar hoje.",
      "Sim, mas quero entender cada detalhe.",
    ],
  },
];

const loadingSteps = [
  "Gerando a mensagem exata que fura qualquer bloqueio e desperta saudade mesmo no silêncio",
  "Criando o gatilho oculto que faz ela duvidar da decisão de te deixar",
  "Gerando o plano de reaproximação que usa a culpa dela como força ao seu favor",
  "Criando o roteiro emocional que transforma frieza em curiosidade e curiosidade em desejo",
  "Gerando o texto perfeito pra reverter o desprezo e fazê-la procurar sua resposta",
  "Criando o efeito dominó que destrói o novo relacionamento e traz o foco de volta pra você",
  "Gerando a sequência proibida de mensagens que reabre a conversa sem parecer carência",
  "Criando a virada psicológica que muda completamente a forma como ela te enxerga",
  "Gerando Protocolo Personalizado!",
];

const Index = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [videoSource, setVideoSource] = useState<"upload" | "vimeo" | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loadingItems, setLoadingItems] = useState<number[]>([]);
  const [loadingProgresses, setLoadingProgresses] = useState<number[]>(new Array(loadingSteps.length).fill(0));

  const handleSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [step]: optionIndex });
    setTimeout(() => setStep((s) => s + 1), 400);
  };

  // Sequential loading animation on final page
  useEffect(() => {
    if (step !== TOTAL_STEPS - 1) return;

    setLoadingItems([]);
    setLoadingProgresses(new Array(loadingSteps.length).fill(0));

    let currentIndex = 0;

    const startNext = () => {
      if (currentIndex >= loadingSteps.length) return;

      const idx = currentIndex;
      setLoadingItems((prev) => [...prev, idx]);

      const interval = setInterval(() => {
        setLoadingProgresses((prev) => {
          const newP = [...prev];
          newP[idx] = Math.min(newP[idx] + 2, 100);

          // When this bar reaches ~70%, start the next one
          if (newP[idx] >= 70 && idx === currentIndex) {
            currentIndex++;
            startNext();
          }

          if (newP[idx] >= 100) {
            clearInterval(interval);
          }

          return newP;
        });
      }, 60);
    };

    startNext();
  }, [step]);

  // Page 1 - Landing
  if (step === 0) {
    return (
      <QuizLayout step={1} totalSteps={TOTAL_STEPS}>
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-xl font-bold text-foreground leading-tight">
            <AlertCircle className="inline w-5 h-5 text-primary mr-1 -mt-1" />
            Descubra como fazer sua ex sentir sua falta{" "}
            <strong>em 60 segundos</strong>
          </h1>

          <div className="border-4 border-cta rounded-lg overflow-hidden">
            <img src={whatsappChat} alt="Conversa WhatsApp" width={768} height={512} className="w-full" />
          </div>

          <p className="text-foreground font-semibold text-base leading-snug">
            Use essa <strong>mensagem psicológica</strong> e ela vai te procurar.
            Não importa se você traiu ela, se ela te bloqueou ou se ela está com
            outro cara agora.
          </p>

          <p className="text-muted-foreground text-sm">
            Clique aqui para fazer o teste e{" "}
            <strong className="text-foreground">desbloquear essa mensagem</strong> 👆
          </p>

          <button
            onClick={() => setStep(1)}
            className="w-full py-4 rounded-lg bg-cta text-cta-foreground font-bold text-lg uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            QUERO RECONQUISTAR MINHA EX!
          </button>

          <div className="flex flex-col gap-3 w-full">
            <CheckItem text="Além dessa mensagem você receberá um protocolo personalizado de reconquista." />
            <CheckItem text="Descobrirá qual é o erro que faz 93% dos homens perder a ex pra sempre e como evitá-lo." />
            <CheckItem text="E também descobrirá o atalho sujo para trazê-la de volta já nas próximas 48 horas." />
          </div>
        </div>
      </QuizLayout>
    );
  }

  // Page 8 - Video/VSL page
  if (step === TOTAL_STEPS - 1) {
    return (
      <QuizLayout step={TOTAL_STEPS} totalSteps={TOTAL_STEPS}>
        <div className="flex flex-col items-center text-center gap-6">
          <p className="text-foreground text-base">
            Assista o vídeo abaixo enquanto criamos seu{" "}
            <strong>protocolo personalizado de reconquista</strong>.
          </p>

          {/* Video area - Story format (9:16) */}
          <div className="w-full max-w-[320px] mx-auto rounded-lg overflow-hidden bg-foreground/5 flex items-center justify-center" style={{ aspectRatio: "9/16" }}>
            {videoFile ? (
              <video src={videoFile} controls className="w-full h-full object-contain" />
            ) : videoUrl ? (
              <iframe
                src={videoUrl.replace("vimeo.com/", "player.vimeo.com/video/")}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="flex flex-col items-center gap-4 p-6">
                <p className="text-muted-foreground text-sm font-medium">Escolha como adicionar o vídeo/VSL:</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    📁 Upload do computador
                  </button>
                  <button
                    onClick={() => setVideoSource("vimeo")}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:opacity-90 transition-opacity"
                  >
                    🔗 Link do Vimeo
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setVideoFile(URL.createObjectURL(file));
                  }}
                />
                {videoSource === "vimeo" && (
                  <div className="flex gap-2 w-full mt-2">
                    <input
                      type="text"
                      placeholder="https://vimeo.com/..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                    />
                    <button
                      onClick={() => setVideoSource(null)}
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
                    >
                      OK
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sequential loading bars */}
          <div className="flex flex-col gap-4 w-full text-left">
            {loadingSteps.map((text, i) => {
              if (!loadingItems.includes(i)) return null;
              return (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">🔄</span>
                    <p className="text-sm text-foreground flex-1">
                      {text}
                    </p>
                    <span className="text-sm text-foreground font-medium whitespace-nowrap">
                      {loadingProgresses[i]}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-quiz-progress-track">
                    <div
                      className="h-full rounded-full bg-quiz-progress-fill transition-all duration-300"
                      style={{ width: `${loadingProgresses[i]}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </QuizLayout>
    );
  }

  // Quiz question pages (steps 1-6)
  const data = quizData[step];

  return (
    <QuizLayout step={step + 1} totalSteps={TOTAL_STEPS}>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-xl font-bold text-foreground text-center leading-tight">
          {data.question}
        </h2>
        <div className="flex flex-col gap-3 w-full">
          {data.options?.map((option, i) => (
            <QuizOption
              key={i}
              label={option}
              selected={answers[step] === i}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default Index;
