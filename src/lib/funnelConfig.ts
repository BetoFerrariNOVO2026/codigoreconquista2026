export const DEFAULT_CHECKOUT_URL = "https://adsroi.com.br/checkout/sDGnMp?aff=[ID_AFILIADO]";

export const VSL_STORAGE_KEY = "vsl_video_url";
export const CHECKOUT_STORAGE_KEY = "checkout_url";

export const normalizeStoredText = (value: string | null | undefined) =>
  value?.trim().replace(/^[\"']+|[\"']+$/g, "") || "";

export const getStoredVideoUrl = () => {
  if (typeof window === "undefined") return "";
  return normalizeStoredText(localStorage.getItem(VSL_STORAGE_KEY));
};

export const getStoredCheckoutUrl = () => {
  if (typeof window === "undefined") return DEFAULT_CHECKOUT_URL;
  return normalizeStoredText(localStorage.getItem(CHECKOUT_STORAGE_KEY)) || DEFAULT_CHECKOUT_URL;
};

const getVimeoVideoId = (url: string) => {
  const normalizedUrl = normalizeStoredText(url);

  if (!normalizedUrl) return "";

  const playerMatch = normalizedUrl.match(/player\.vimeo\.com\/video\/(\d+)/);
  if (playerMatch) return playerMatch[1];

  const vimeoMatch = normalizedUrl.match(/vimeo\.com\/(?:.*\/)?(\d+)(?:$|[?&#/])/);
  if (vimeoMatch) return vimeoMatch[1];

  return normalizedUrl.match(/(\d{6,})/)?.[1] || "";
};

export const buildVimeoEmbedUrl = (url: string) => {
  const videoId = getVimeoVideoId(url);
  if (!videoId) return "";

  return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
};