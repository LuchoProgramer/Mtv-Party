import React from 'react';

export const CTABar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background-dark/80 backdrop-blur-xl border-t border-white/10">
            <button className="cyan-glow w-full h-12 bg-primary text-background-dark font-black uppercase tracking-widest text-sm rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <span className="material-symbols-outlined text-xl">confirmation_number</span>
                Asegura tu lugar
            </button>
        </div>
    );
};
