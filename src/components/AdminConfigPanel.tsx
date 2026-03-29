import { useState } from "react";

const ADMIN_PASSWORD = "admin2026";
const ADMIN_UNLOCKED_KEY = "admin_unlocked";

type AdminConfigPanelProps = {
  checkoutUrl: string;
  onCheckoutUrlChange: (value: string) => void;
  onVideoUrlChange: (value: string) => void;
  videoUrl: string;
  videoValid: boolean;
  onSave: () => void;
  saving?: boolean;
};

const inputClassName =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary";

const AdminConfigPanel = ({
  checkoutUrl,
  onCheckoutUrlChange,
  onVideoUrlChange,
  videoUrl,
  videoValid,
  onSave,
  saving,
}: AdminConfigPanelProps) => {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(ADMIN_UNLOCKED_KEY) === "true"
  );
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState(false);

  if (!unlocked) {
    if (!showLogin) {
      return (
        <button
          onClick={() => setShowLogin(true)}
          className="self-end text-[10px] text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
        >
          ⚙️
        </button>
      );
    }

    return (
      <div className="w-full rounded-lg border border-border bg-card p-4 shadow-sm">
        <p className="text-sm font-semibold text-foreground mb-2">🔒 Acesso admin</p>
        <div className="flex gap-2">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Senha"
            className={inputClassName}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (password === ADMIN_PASSWORD) {
                  sessionStorage.setItem(ADMIN_UNLOCKED_KEY, "true");
                  setUnlocked(true);
                } else {
                  setError(true);
                }
              }
            }}
          />
          <button
            onClick={() => {
              if (password === ADMIN_PASSWORD) {
                sessionStorage.setItem(ADMIN_UNLOCKED_KEY, "true");
                setUnlocked(true);
              } else {
                setError(true);
              }
            }}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shrink-0"
          >
            Entrar
          </button>
        </div>
        {error && <p className="text-xs text-destructive mt-1">Senha incorreta.</p>}
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg border border-border bg-card text-left shadow-sm">
      <div className="px-4 py-3 text-sm font-semibold text-foreground flex items-center justify-between">
        <span>⚙️ Admin: VSL e checkout</span>
        <button
          onClick={() => {
            sessionStorage.removeItem(ADMIN_UNLOCKED_KEY);
            setUnlocked(false);
            setPassword("");
            setShowLogin(false);
          }}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Sair
        </button>
      </div>

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

        <button
          onClick={onSave}
          disabled={saving}
          className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {saving ? "Salvando..." : "💾 Salvar configurações"}
        </button>

        <p className="text-xs text-muted-foreground">
          Salva no navegador. Clique em Salvar para aplicar.
        </p>
      </div>
    </div>
  );
};

export default AdminConfigPanel;