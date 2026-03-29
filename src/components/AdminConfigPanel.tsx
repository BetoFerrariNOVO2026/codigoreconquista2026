type AdminConfigPanelProps = {
  checkoutUrl: string;
  onCheckoutUrlChange: (value: string) => void;
  onVideoUrlChange: (value: string) => void;
  videoUrl: string;
  videoValid: boolean;
};

const inputClassName =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary";

const AdminConfigPanel = ({
  checkoutUrl,
  onCheckoutUrlChange,
  onVideoUrlChange,
  videoUrl,
  videoValid,
}: AdminConfigPanelProps) => {
  return (
    <details className="w-full rounded-lg border border-border bg-card text-left shadow-sm">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground">
        ⚙️ Admin rápido: VSL e checkout
      </summary>

      <div className="flex flex-col gap-4 border-t border-border px-4 py-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            URL da VSL (Vimeo)
          </label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => onVideoUrlChange(e.target.value)}
            placeholder="https://vimeo.com/..."
            className={inputClassName}
          />
          {videoUrl && !videoValid && (
            <p className="text-xs text-destructive">
              Link inválido ou com formato incompleto. Cole a URL completa do Vimeo.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Link do checkout
          </label>
          <input
            type="text"
            value={checkoutUrl}
            onChange={(e) => onCheckoutUrlChange(e.target.value)}
            placeholder="https://adsroi.com.br/checkout/..."
            className={inputClassName}
          />
        </div>

        <p className="text-xs text-muted-foreground">
          Salva automaticamente neste navegador, sem precisar editar código.
        </p>
      </div>
    </details>
  );
};

export default AdminConfigPanel;