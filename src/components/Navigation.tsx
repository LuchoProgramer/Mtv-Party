import React from 'react';

export const Navigation = () => {
    return (
        <nav className="relative z-10 flex items-center bg-background-dark/80 backdrop-blur-md p-4 sticky top-0 border-b border-white/10">
            <h2 className="text-white text-sm font-black leading-tight tracking-[0.2em] flex-1 text-center italic">
                MTV: THE FINAL BROADCAST
            </h2>
            <div className="flex w-10 items-center justify-end">
                <button className="flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">share</span>
                </button>
            </div>
        </nav>
    );
};
