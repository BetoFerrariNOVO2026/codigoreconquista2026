import { Check } from "lucide-react";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-quiz-check-bg border border-quiz-check-border">
    <div className="w-5 h-5 rounded bg-cta flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-cta-foreground" />
    </div>
    <span className="text-foreground text-sm">{text}</span>
  </div>
);

export default CheckItem;
