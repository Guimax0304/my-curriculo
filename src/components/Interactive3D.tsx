'use client';

import { useEffect, useMemo, useState } from 'react';
import { SplineScene } from './SplineScene';

const SPLINE_URL = process.env.NEXT_PUBLIC_SPLINE_URL ?? '';

export default function Interactive3D() {
  const [canAnimate, setCanAnimate] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Respeita acessibilidade (reduzir movimento)
    const motionMq = window.matchMedia('(prefers-reduced-motion: no-preference)');
    setCanAnimate(motionMq.matches);

    // Detecta tema: prefere escuro OU classe "dark" no html (comum em toggles)
    const themeMq = window.matchMedia('(prefers-color-scheme: dark)');

    const readTheme = () =>
      themeMq.matches || document.documentElement.classList.contains('dark');

    const onChange = () => setIsDark(readTheme());

    setIsDark(readTheme());
    themeMq.addEventListener('change', onChange);

    // Listener caso seu toggle altere a classe "dark"
    const obs = new MutationObserver(onChange);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      themeMq.removeEventListener('change', onChange);
      obs.disconnect();
    };
  }, []);

  const cardStyle: React.CSSProperties = useMemo(() => {
    if (isDark) {
      // Modo escuro: mantém o “card” cinza discreto que você curtiu
      return {
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
        overflow: 'hidden',
      };
    }
    // Modo claro: “sem card” (mesma cor da parede, sem sombra/borda)
    return {
      borderRadius: 12,
      border: 'none',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      overflow: 'hidden',
    };
  }, [isDark]);

  return (
    <section aria-label="Interactive 3D" style={cardStyle}>
      {/* Título - se preferir sem, pode remover este bloco */}
      {/* <div style={{ padding: '24px 24px 0 24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
          Interactive 3D
        </h2>
      </div> */}

      {/* Área visual */}
      <div style={{ position: 'relative', height: 580, width: 500 }}>
        {SPLINE_URL && canAnimate ? (
          <SplineScene scene={SPLINE_URL} className="w-full h-full" />
        ) : (
          <img
            src="/spline-fallback.png"
            alt="Cena 3D"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
      </div>
    </section>
  );
}
