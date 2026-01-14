import React from 'react';

export const Features = () => {
    return (
        <div className="px-4 py-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2">graphic_eq</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/60">Live DJ Set</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2">shield_person</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/60">Seguridad</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2">photo_camera</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/60">Photo Zone</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2">payments</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/60">No Cash Only</span>
                </div>
            </div>
        </div>
    );
};
