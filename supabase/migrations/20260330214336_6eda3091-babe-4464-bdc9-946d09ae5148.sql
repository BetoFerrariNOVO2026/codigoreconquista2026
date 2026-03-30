
CREATE TABLE public.funnel_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  step integer NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.funnel_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert funnel events"
  ON public.funnel_events FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can read funnel events"
  ON public.funnel_events FOR SELECT
  TO public
  USING (true);

CREATE INDEX idx_funnel_events_step ON public.funnel_events (step);
CREATE INDEX idx_funnel_events_session ON public.funnel_events (session_id);
