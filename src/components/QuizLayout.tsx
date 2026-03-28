import logo from "@/assets/logo.png";

interface QuizLayoutProps {
  step: number;
  totalSteps: number;
  children: React.ReactNode;
}

const QuizLayout = ({ step, totalSteps, children }: QuizLayoutProps) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-6">
      <img src={logo} alt="Logo" width={60} height={60} className="mb-4" />
      <div className="w-full max-w-lg h-2 rounded-full bg-quiz-progress-track mb-8">
        <div
          className="h-full rounded-full bg-quiz-progress-fill transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="w-full max-w-lg flex-1">{children}</div>
    </div>
  );
};

export default QuizLayout;
