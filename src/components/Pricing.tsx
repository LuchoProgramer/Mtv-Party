import React from 'react';

export const Pricing = () => {
    return (
        <React.Fragment>
            <div className="px-4 pb-3 pt-5 flex items-center gap-4">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                <h2 className="text-white text-xl font-black uppercase tracking-widest italic">Entradas</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
            </div>

            <div className="flex flex-col gap-6 px-4 py-6">
                <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-surface-dark p-6 relative overflow-hidden">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-white/60 text-xs font-black uppercase tracking-widest">Pase Básico</h1>
                        <p className="flex items-baseline gap-1 text-white">
                            <span className="text-white text-5xl font-black leading-tight tracking-tighter">$10</span>
                            <span className="text-white/40 text-sm font-bold uppercase italic">/persona</span>
                        </p>
                    </div>
                    <div className="space-y-3 my-2">
                        <div className="text-xs font-medium flex gap-3 text-white/80">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            Acceso General al evento
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white/80">
                            <span className="material-symbols-outlined text-primary text-sm">mic_external_on</span>
                            Micrófono abierto
                        </div>
                    </div>
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-white/10 text-white text-sm font-black uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-colors">
                        <span className="truncate">Comprar</span>
                    </button>
                </div>

                <div className="magenta-glow flex flex-col gap-4 rounded-xl border-2 border-secondary bg-[#1a0a1a] p-6 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 size-24 bg-secondary/20 rounded-full blur-2xl"></div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <h1 className="text-secondary text-xs font-black uppercase tracking-widest">Experiencia Completa</h1>
                            <span className="text-background-dark text-[10px] font-black leading-none tracking-widest rounded-full bg-primary px-3 py-1.5 uppercase">
                                Premium
                            </span>
                        </div>
                        <p className="flex items-baseline gap-1 text-white">
                            <span className="text-white text-5xl font-black leading-tight tracking-tighter">$25</span>
                            <span className="text-white/40 text-sm font-bold uppercase italic">/persona</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 my-2">
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">stars</span>
                            BodyBrownie Access
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">restaurant</span>
                            Choripán
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">casino</span>
                            Tabla de bingo
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">local_bar</span>
                            Barra libre
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">music_note</span>
                            Música
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">person_apron</span>
                            Modelos
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">graphic_eq</span>
                            DJ en Vivo
                        </div>
                        <div className="text-xs font-medium flex gap-3 text-white">
                            <span className="material-symbols-outlined text-secondary text-sm">checkroom</span>
                            Show Room & Desfiles
                        </div>
                    </div>
                    <button className="cyan-glow flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-primary text-background-dark text-sm font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
                        <span className="truncate">RESERVAR VIP</span>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};
