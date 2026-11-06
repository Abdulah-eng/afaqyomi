import { useEffect, useState } from 'react';

export function SoundWaveVisualizer({
  isPlaying = true,
  barsCount = 28,
  className = '',
  height = 42,
  accent = '#54e6df',
}: {
  isPlaying?: boolean;
  barsCount?: number;
  className?: string;
  height?: number;
  accent?: string;
}) {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    // Generate initial varied heights for sound spectrum
    const initial = Array.from({ length: barsCount }, (_, i) => {
      const centerFactor = 1 - Math.abs((i - barsCount / 2) / (barsCount / 2)) * 0.45;
      const base = 25 + Math.sin(i * 0.7) * 20 + Math.random() * 30;
      return Math.min(100, Math.max(15, base * centerFactor));
    });
    setHeights(initial);

    if (!isPlaying) return;

    const interval = setInterval(() => {
      setHeights((prev) =>
        prev.map((h, i) => {
          const shift = (Math.random() - 0.5) * 28;
          const centerWeight = 1 - Math.abs((i - barsCount / 2) / (barsCount / 2)) * 0.35;
          const next = h + shift;
          return Math.min(95, Math.max(18, (next * 0.6 + (30 + Math.random() * 45) * 0.4) * centerWeight));
        })
      );
    }, 180);

    return () => clearInterval(interval);
  }, [isPlaying, barsCount]);

  return (
    <div
      className={`flex items-end justify-between gap-[2px] sm:gap-1 ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      {heights.map((h, idx) => (
        <span
          key={idx}
          className="w-1 rounded-full transition-all duration-200"
          style={{
            height: isPlaying ? `${h}%` : '20%',
            backgroundColor: idx % 3 === 0 ? '#f1a35d' : accent,
            opacity: 0.75 + (idx % 4) * 0.08,
            boxShadow: isPlaying && idx % 4 === 0 ? `0 0 8px ${accent}` : 'none',
          }}
        />
      ))}
    </div>
  );
}

