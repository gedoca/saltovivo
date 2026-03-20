import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import popupConfig from "@/config/popupConfig.json";

const PromoPopup = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!popupConfig.active) return;
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 animate-in fade-in duration-300"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-[90vw] max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
          style={{ backgroundImage: `url(${popupConfig.backgroundImage})` }}
        />

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 rounded-full bg-white/15 p-1.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/25 hover:text-white active:scale-95"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-5 px-8 py-12 text-center text-white">
          <h2 className="text-5xl font-black tracking-tight leading-none">
            {t(popupConfig.content.titleKey)}
          </h2>
          <p className="text-sm leading-relaxed text-white/90 max-w-xs">
            {t(popupConfig.content.subtitleKey)}
          </p>
          <a
            href={popupConfig.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-transform hover:scale-105 active:scale-[0.98]"
          >
            {t(popupConfig.content.buttonKey)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
