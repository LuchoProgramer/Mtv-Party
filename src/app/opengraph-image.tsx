import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'MTV: LA ÚLTIMA TRANSMISIÓN - Propulsar Party';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    // We can load the font if needed, but for now we'll rely on system sans-serif with styling
    // Ideally, we would load Space Grotesk here, but to keep it simple and robust for Vercel/Edge:

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
                    position: 'relative',
                }}
            >
                {/* Background Overlay - simulating our generated image since we can't easily load local files in Edge functions without fetch */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'linear-gradient(45deg, rgba(13, 242, 242, 0.2) 0%, rgba(255, 0, 255, 0.2) 100%)',
                        zIndex: 1,
                    }}
                />

                {/* Scanlines Effect */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000000 3px)',
                        opacity: 0.3,
                        zIndex: 2,
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, textAlign: 'center' }}>
                    <div style={{
                        fontSize: 24,
                        color: '#fff',
                        background: '#ff00ff',
                        padding: '4px 12px',
                        fontFamily: 'sans-serif',
                        fontWeight: 900,
                        marginBottom: 20,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase'
                    }}>
                        En Vivo: Final de Temporada
                    </div>

                    <div style={{
                        display: 'flex',
                        fontSize: 80,
                        color: 'white',
                        fontFamily: 'sans-serif',
                        fontWeight: 900,
                        lineHeight: 0.9,
                        fontStyle: 'italic',
                        textShadow: '4px 0 #ff00ff, -4px 0 #0df2f2',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textTransform: 'uppercase'
                    }}>
                        <span>MTV: THE</span>
                        <span>FINAL</span>
                        <span>BROADCAST</span>
                    </div>

                    <div style={{
                        marginTop: 30,
                        fontSize: 32,
                        color: '#0df2f2',
                        fontFamily: 'sans-serif',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        21 de Febrero • 17:00 HRS
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
