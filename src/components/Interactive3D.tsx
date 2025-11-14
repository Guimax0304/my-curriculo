// src/components/Interactive3D.tsx
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Interactive3D.module.css";

type SplineProps = {
  scene: string;
  className?: string;
};

const SPLINE_URL = process.env.NEXT_PUBLIC_SPLINE_URL ?? "";

// Import dinâmico do Spline
const DynamicSpline = dynamic<SplineProps>(
  () => import("./SplineScene").then((m) => m.SplineScene),
  {
    ssr: false,
    loading: () => <div aria-hidden className={styles.loading} />,
  }
);

// ErrorBoundary simples
type SplineBoundaryProps = { children: React.ReactNode };
type SplineBoundaryState = { hasError: boolean };

class SplineBoundary extends React.Component<
  SplineBoundaryProps,
  SplineBoundaryState
> {
  constructor(props: SplineBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): SplineBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(err: unknown) {
    console.error("[Interactive3D] Crash:", err);
  }

  render() {
    if (this.state.hasError) {
      return <div aria-hidden className={styles.loading} />;
    }
    return this.props.children;
  }
}

export default function Interactive3D() {
  const [canAnimate, setCanAnimate] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Acessibilidade: respeita reduzir movimento
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setCanAnimate(mq.matches);

    // Detecta tema (pref dark OU classe "dark" no <html>)
    const themeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const readTheme = () =>
      themeMq.matches ||
      document.documentElement.classList.contains("dark");

    const update = () => setIsDark(readTheme());

    update();
    themeMq.addEventListener("change", update);

    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      themeMq.removeEventListener("change", update);
      obs.disconnect();
    };
  }, []);

  return (
    <section
      aria-label="Interactive 3D"
      className={`${styles.card} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.frame}>
        <SplineBoundary>
          {SPLINE_URL && canAnimate ? (
            <DynamicSpline scene={SPLINE_URL} className={styles.spline} />
          ) : (
            <div aria-hidden className={styles.loading} />
          )}
        </SplineBoundary>
      </div>
    </section>
  );
}
