import React from 'react';

export const VideoSection = () => {
    return (
        <section className="vhs-container w-full mt-4 relative">
            <div className="relative w-full aspect-[9/16] min-h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110"
                    style={{
                        backgroundImage: `url('/images/body-brownie.png')`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
                    <div
                        className="absolute inset-0 opacity-40 mix-blend-screen"
                        style={{
                            backgroundImage: `radial-gradient(circle at 30% 20%, #0df2f2 0%, transparent 40%), radial-gradient(circle at 70% 80%, #ff00ff 0%, transparent 40%)`
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 blur-sm"></div>
                    <div className="absolute top-1/4 left-0 w-full h-[2px] bg-primary/10 blur-md"></div>
                    <div className="absolute bottom-10 left-4 text-primary font-mono text-[10px] opacity-60">REC ● 02:24:59</div>
                    <div className="absolute top-10 right-4 text-white font-mono text-[10px] opacity-60 italic">PLAY ▷</div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center pb-20">
                    <div className="bg-black/40 backdrop-blur-sm p-4 border-y border-white/20 color-bleed">
                        <h3 className="glitch-text text-primary text-3xl font-black italic leading-none tracking-tighter uppercase mb-2">
                            ARTE VIVO & COMESTIBLE
                        </h3>
                        <p className="text-white text-xl font-bold tracking-[0.2em] uppercase">
                            LA EXPERIENCIA <span className="text-secondary">BODY BROWNIE</span>
                        </p>
                    </div>
                    <div className="mt-6 flex gap-4 overflow-hidden">
                        <div className="h-1 w-12 bg-primary"></div>
                        <div className="h-1 w-12 bg-secondary"></div>
                        <div className="h-1 w-12 bg-white"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
