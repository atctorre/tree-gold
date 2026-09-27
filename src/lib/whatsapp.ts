export const WHATSAPP_NUMBER = "573016004940";
export const PHONE_DISPLAY = "301-600-4940";
export const PHONE_TEL = "+573016004940";
export const INSTAGRAM_HANDLE = "joyeria.treegold18k";
export const INSTAGRAM_URL = "https://instagram.com/joyeria.treegold18k";
export const SITE_NAME = "Joyería Tree Gold";
export const SITE_URL = "https://joyeriatreegold.com";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  home: "Hola Tree Gold, vi su página web y quiero consultar una pieza",
  floating: "Hola Tree Gold, vengo de la página web. Quiero asesoría en joyería 18k.",
  advisor: "Hola Tree Gold, quiero hablar con un asesor sobre joyería en oro 18k.",
  shipping: "Hola Tree Gold, quiero preguntar por envío a mi ciudad.",
  product: (name: string) =>
    `Hola Tree Gold, me interesa: ${name} (oro 18k). ¿Me confirman disponibilidad, talla/peso y precio? Vi la ficha en la web.`,
  similar: (name: string) =>
    `Hola Tree Gold, la pieza "${name}" no está disponible. ¿Me muestran alternativas similares en oro 18k?`,
} as const;
