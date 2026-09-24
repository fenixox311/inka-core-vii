import { whatsappHref } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Escribir por WhatsApp">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.29-.15-1.71-.85-1.98-.94-.27-.1-.46-.15-.66.14-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.5-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.42 0 1.42 1.04 2.8 1.19 3 .15.2 2.05 3.13 4.96 4.39.69.3 1.23.47 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34z"/>
        <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2zm0 18.13c-1.66 0-3.2-.46-4.53-1.25l-.32-.19-3.01.79.8-2.94-.21-.3a8.12 8.12 0 0 1-1.26-4.33c0-4.5 3.66-8.16 8.15-8.16 4.5 0 8.15 3.66 8.15 8.16 0 4.5-3.65 8.22-8.15 8.22z"/>
      </svg>
      <style>{`
        .wa-float { position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 50; width: 52px; height: 52px; border-radius: 50%; background: var(--c-oro); color: var(--c-noche); display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); transition: transform 0.15s ease; }
        .wa-float:hover { transform: scale(1.06); }
        @media (min-width: 900px) { .wa-float { display: none; } }
      `}</style>
    </a>
  );
}
