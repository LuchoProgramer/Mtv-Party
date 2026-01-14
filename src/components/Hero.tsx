import React from 'react';

export const Hero = () => {
    return (
        <div className="@container">
            <div className="p-4 pb-0">
                <div
                    className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 relative overflow-hidden border border-white/10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJLyTu_FmtjAd5MjLgHXvmC_DQQFNsRYpn4q0rFTOkTVtUgKm9FFfWYcch_INyvY0HSGgvi-CmUZkN2EqKxzvBZ_u74Y5YuB4xnNXluXF41e5GxlIs1CdUyjoO5f1spU8V1O00zFTIh1r4554EyPYVAUnRTnl1zY9EwnHW9LmM3BGVWq8d-9p42zEzEUGvDLZJfoozIvgFCq657keo5eFGCvoqiuUIuM8CUA6rAhTWQknKQWDR4_ivZ2k3FgiQ7LAMoRswB-5YiMU")`
                    }}
                >
                    <div className="flex flex-col gap-4 text-center">
                        <div className="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-black uppercase tracking-widest mx-auto mb-2">
                            En Vivo: Final de Temporada
                        </div>
                        <h1 className="glitch-text text-white text-5xl font-black leading-none tracking-tighter italic @[480px]:text-7xl uppercase">
                            MTV: THE<br />FINAL<br />BROADCAST
                        </h1>
                        <div className="space-y-1">
                            <h2 className="text-primary text-base font-bold tracking-wide uppercase">
                                El cierre de una era por Propulsar Producciones
                            </h2>
                            <p className="text-white/70 text-lg font-medium">21 de febrero • 17:00 HRS</p>
                        </div>
                    </div>
                    <a
                        href="https://wa.me/593960300261?text=Hola,%20quiero%20reservar%20mi%20cupo%20VIP%20para%20MTV%20Party!%20%F0%9F%8E%AB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyan-glow flex min-w-[240px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-background-dark text-base font-black leading-normal tracking-widest hover:scale-105 transition-transform"
                    >
                        <span className="truncate">RESERVAR CUPO VIP</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
