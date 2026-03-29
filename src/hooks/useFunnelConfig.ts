import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { DEFAULT_CHECKOUT_URL } from "@/lib/funnelConfig";

export type FunnelConfig = {
  vslUrl: string;
  checkoutUrl: string;
};

export const useFunnelConfig = () => {
  const [config, setConfig] = useState<FunnelConfig>({
    vslUrl: "",
    checkoutUrl: DEFAULT_CHECKOUT_URL,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      const { data, error } = await supabase
        .from("funnel_config")
        .select("vsl_url, checkout_url")
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        setConfig({
          vslUrl: data.vsl_url || "",
          checkoutUrl: data.checkout_url || DEFAULT_CHECKOUT_URL,
        });
      }
      setLoading(false);
    };

    fetchConfig();
  }, []);

  const saveConfig = async (newConfig: FunnelConfig) => {
    // Get existing row id
    const { data: existing } = await supabase
      .from("funnel_config")
      .select("id")
      .limit(1)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase
        .from("funnel_config")
        .update({
          vsl_url: newConfig.vslUrl,
          checkout_url: newConfig.checkoutUrl,
        })
        .eq("id", existing.id);

      if (!error) setConfig(newConfig);
      return !error;
    }
    return false;
  };

  return { config, loading, saveConfig };
};
