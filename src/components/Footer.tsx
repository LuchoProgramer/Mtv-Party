import React from 'react';

export const Footer = () => {
    return (
        <footer className="px-6 py-12 text-center space-y-4 pb-28">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
                Propulsar Producciones © 2026
            </p>
            <div className="flex justify-center gap-6">
                <span className="material-symbols-outlined text-white/40 text-xl cursor-pointer hover:text-primary transition-colors">brand_awareness</span>
                <span className="material-symbols-outlined text-white/40 text-xl cursor-pointer hover:text-primary transition-colors">podcasts</span>
                <span className="material-symbols-outlined text-white/40 text-xl cursor-pointer hover:text-primary transition-colors">movie_edit</span>
            </div>
            <p className="text-[9px] text-white/20 uppercase leading-relaxed tracking-widest px-8">
                Este evento es una producción privada. Nos reservamos el derecho de admisión.
            </p>
        </footer>
    );
};
