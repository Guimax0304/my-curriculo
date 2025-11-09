// src/components/Interactive3D.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

type SplineProps = {
  scene: string;
  className?: string;
};

const SPLINE_URL = process.env.NEXT_PUBLIC_SPLINE_URL ?? '';

// Carrega o Spline de forma dinâmica, sem SSR e sem usar `any`
const DynamicSpline = dynamic<SplineProps>(
  () => import('./SplineScene').then((m) => m.SplineScene),
  {
    ssr: false,
    // Enquanto carrega, mantém o espaço do card
    loading: () => (
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    ),
  }
);

// ErrorBoundary simples para não quebrar a página se o Spline falhar
type SplineBoundaryProps = {
  children: React.ReactNode;
};

type SplineBoundaryState = {
  hasError: boolean;
};

class SplineBoundary extends React.Component<
  SplineBoundaryProps,
  SplineBoundaryState
> {
  constructor(props: Readonly<SplineBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  // Não precisamos do parâmetro aqui; assim evitamos no-unused-vars
  static getDerivedStateFromError(): SplineBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Log leve; ajuste se quiser enviar para algum sistema de log
    console.error('[Interactive3D] Spline crashed:', error);
  }

  render() {
    if (this.state.hasError) {
      // Mantém o espaço, mas não renderiza nada “pesado”
      return (
        <div
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

  const cardStyle: React.CSSProperties = useMemo(() => {
    if (isDark) {
      // Dark: card cinza leve
      return {
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
        overflow: 'hidden',
      };
    }
    // Light: some o “card”
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
      <div style={{ position: 'relative', height: 580, width: 500 }}>
        <SplineBoundary>
          {SPLINE_URL && canAnimate ? (
            <DynamicSpline scene={SPLINE_URL} className="w-full h-full" />
          ) : (
            // Sem fallback de imagem: apenas preserva o espaço
            <div style={{ width: '100%', height: '100%' }} />
          )}
        </SplineBoundary>
      </div>
    </section>
  );
}
