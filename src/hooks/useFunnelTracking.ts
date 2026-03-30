import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "funnel_session_id";

function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export const useFunnelTracking = (step: number) => {
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (tracked.current.has(step)) return;
    tracked.current.add(step);

    const sessionId = getSessionId();
    supabase
      .from("funnel_events")
      .insert({ session_id: sessionId, step })
      .then(() => {});
  }, [step]);
};
