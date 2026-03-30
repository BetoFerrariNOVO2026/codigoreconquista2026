import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const ADMIN_PASSWORD = "admin2026";
const STEP_LABELS = [
  "Página 1 — Landing",
  "Página 2 — Término",
  "Página 3 — Contato",
  "Página 4 — Incômodo",
  "Página 5 — Outro cara",
  "Página 6 — Tempo",
  "Página 7 — Assistir",
];

type StepData = { step: number; count: number };

const AdminFunnel = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState<StepData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    // Count distinct sessions per step
    const { data: rows } = await supabase
      .from("funnel_events")
      .select("step, session_id");

    if (rows) {
      const sessionsByStep: Record<number, Set<string>> = {};
      rows.forEach((r) => {
        if (!sessionsByStep[r.step]) sessionsByStep[r.step] = new Set();
        sessionsByStep[r.step].add(r.session_id);
      });

      const result: StepData[] = [];
      for (let i = 0; i < 7; i++) {
        result.push({ step: i, count: sessionsByStep[i]?.size || 0 });
      }
      setData(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (unlocked) fetchData();
  }, [unlocked]);

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-semibold text-foreground mb-3">🔒 Acesso admin — Funil</p>
          <div className="flex gap-2">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Senha"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter" && password === ADMIN_PASSWORD) setUnlocked(true);
                else if (e.key === "Enter") setError(true);
              }}
            />
            <button
              onClick={() => password === ADMIN_PASSWORD ? setUnlocked(true) : setError(true)}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shrink-0"
            >
              Entrar
            </button>
          </div>
          {error && <p className="text-xs text-destructive mt-1">Senha incorreta.</p>}
        </div>
      </div>
    );
  }

  const maxCount = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-foreground">📊 Funil — Visualização</h1>
          <button
            onClick={fetchData}
            disabled={loading}
            className="text-sm text-primary hover:underline disabled:opacity-50"
          >
            {loading ? "Atualizando..." : "🔄 Atualizar"}
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((d, i) => {
            const pct = maxCount > 0 ? (d.count / maxCount) * 100 : 0;
            const dropoff =
              i > 0 && data[i - 1].count > 0
                ? (((data[i - 1].count - d.count) / data[i - 1].count) * 100).toFixed(1)
                : null;

            return (
              <div key={d.step} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">
                    {STEP_LABELS[i] || `Página ${i + 1}`}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground">{d.count}</span>
                    {dropoff !== null && Number(dropoff) > 0 && (
                      <span className="text-xs text-destructive">-{dropoff}%</span>
                    )}
                  </div>
                </div>
                <div className="w-full h-6 rounded bg-muted overflow-hidden">
                  <div
                    className="h-full rounded bg-primary transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {data.length > 0 && data[0].count > 0 && (
          <div className="mt-6 p-4 rounded-lg border border-border bg-card">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Taxa de conclusão:</strong>{" "}
              {((data[6]?.count || 0) / data[0].count * 100).toFixed(1)}%
              ({data[6]?.count || 0} de {data[0].count} sessões)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminFunnel;
