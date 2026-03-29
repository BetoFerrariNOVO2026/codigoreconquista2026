-- Single-row config table for funnel settings
CREATE TABLE public.funnel_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  vsl_url TEXT NOT NULL DEFAULT '',
  checkout_url TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.funnel_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read funnel config"
  ON public.funnel_config FOR SELECT
  USING (true);

CREATE POLICY "Anyone can update funnel config"
  ON public.funnel_config FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can insert funnel config"
  ON public.funnel_config FOR INSERT
  WITH CHECK (true);

INSERT INTO public.funnel_config (vsl_url, checkout_url)
VALUES ('', 'https://adsroi.com.br/checkout/sDGnMp?aff=[ID_AFILIADO]');
