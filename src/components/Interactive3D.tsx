// src/components/Interactive3D.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

type SplineProps = {
  scene: string;
  className?: string;
};

const SPLINE_URL = process.env.NEXT_PUBLIC_SPLINE_URL ?? '';

// Carrega o Spline de forma dinâmica, sem SSR
const DynamicSpline = dynamic<SplineProps>(
  () => import('./SplineScene').then((m) => m.SplineScene),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    ),
  }
);

// ErrorBoundary simples para não quebrar a página se o Spline falhar
type SplineBoundaryProps = { children: React.ReactNode };
type SplineBoundaryState = { hasError: boolean };

class SplineBoundary extends React.Component<
  SplineBoundaryProps,
  SplineBoundaryState
> {
  constructor(props: Readonly<SplineBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): SplineBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('[Interactive3D] Spline crashed:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          aria-hidden
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      );
    }
    return this.props.children;
  }
}

export default function Interactive3D() {
  const [canAnimate, setCanAnimate] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Acessibilidade: respeita reduzir movimento
    const motionMq = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    );
    setCanAnimate(motionMq.matches);

    // Detecta tema (pref dark OU classe "dark" no <html>)
    const themeMq = window.matchMedia('(prefers-color-scheme: dark)');
    const readTheme = () =>
      themeMq.matches || document.documentElement.classList.contains('dark');

    const onChange = () => setIsDark(readTheme());
    setIsDark(readTheme());

    themeMq.addEventListener('change', onChange);
    const obs = new MutationObserver(onChange);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      themeMq.removeEventListener('change', onChange);
      obs.disconnect();
    };
  }, []);

  // Card de fundo (cinza no dark)
  const cardStyle: React.CSSProperties = useMemo(() => {
    if (isDark) {
      return {
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
        overflow: 'hidden',
      };
    }
    return {
        borderRadius: 12,
        border: 'none',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        overflow: 'hidden',
    };
  }, [isDark]);

  // Moldura responsiva do 3D
  const frameStyle: React.CSSProperties = useMemo(
    () => ({
      position: 'relative',
      // 100% fluido, mas não passa de 520px e respeita a tela (90vw)
      width: 'min(520px, 90vw)',
      // Mantém proporção quadrada, que funciona bem em telas pequenas
      aspectRatio: '1 / 1',
      // Centraliza no espaço disponível
      margin: '0 auto',
    }),
    []
  );

  return (
    <section aria-label="Interactive 3D" style={cardStyle}>
      <div style={frameStyle}>
        <SplineBoundary>
          {SPLINE_URL && canAnimate ? (
            <div style={{ position: 'absolute', inset: 0 }}>
              <DynamicSpline scene={SPLINE_URL} className="w-full h-full" />
            </div>
          ) : (
            // Sem fallback de imagem: preserva o espaço
            <div aria-hidden style={{ position: 'absolute', inset: 0 }} />
          )}
        </SplineBoundary>
      </div>
    </section>
  );
}
