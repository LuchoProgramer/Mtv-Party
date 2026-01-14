import React from 'react';

export const CTABar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background-dark/80 backdrop-blur-xl border-t border-white/10">
            <a
                href="https://wa.me/593960300261?text=Hola,%20quiero%20asegurar%20mi%20lugar%20en%20MTV%20Party!%20%F0%9F%8E%9F%EF%B8%8F"
                target="_blank"
                rel="noopener noreferrer"
                className="cyan-glow w-full h-12 bg-primary text-background-dark font-black uppercase tracking-widest text-sm rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
                <span className="material-symbols-outlined text-xl">confirmation_number</span>
                Asegura tu lugar
            </a>
        </div>
    );
};
