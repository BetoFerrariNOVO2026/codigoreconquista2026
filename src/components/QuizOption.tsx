interface QuizOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const QuizOption = ({ label, selected, onClick }: QuizOptionProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-200 text-left cursor-pointer
      ${selected 
        ? "border-primary bg-secondary" 
        : "border-quiz-option-border bg-quiz-option hover:bg-quiz-option-hover"
      }`}
  >
    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center
      ${selected ? "border-primary" : "border-quiz-option-border"}`}>
      {selected && <div className="w-3 h-3 rounded-full bg-primary" />}
    </div>
    <span className="text-foreground text-sm font-medium">{label}</span>
  </button>
);

export default QuizOption;
