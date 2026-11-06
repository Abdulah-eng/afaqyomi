import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX, Disc3, Radio, Sparkles } from 'lucide-react';
import { SoundWaveVisualizer } from './SoundWaveVisualizer';

interface Track {
  title: string;
  artist: string;
  badge: string;
  src: string;
  duration: string;
  cover: string;
}

const sampleTracks: Track[] = [
  {
    title: 'We Could Be Love',
    artist: 'AFAQYOMI Master Delivery',
    badge: 'Commercial Master',
    src: '/media/we-could-be-love-commercial-master.mp3',
    duration: '5:59',
    cover: '/media/run_to_scar_cover.png',
  },
  {
    title: 'Still Reaching',
    artist: 'AFAQYOMI Studio Audio',
    badge: 'Sync Master Preview',
    src: '/media/still-reaching-30-second-preview.flac',
    duration: '0:30',
    cover: '/media/brand_new_day_cover.png',
  },
  {
    title: 'Touch Me; Watch It Burn',
    artist: '24-Bit Lossless Delivery',
    badge: 'Lossless WAV Master',
    src: '/media/touch-me-watch-it-burn-24bit-master.flac',
    duration: '4:13',
    cover: '/media/dope_vs_pope_cover.png',
  },
];

export function AudioPlayerWidget({
  variant = 'compact',
  className = '',
}: {
  variant?: 'compact' | 'full';
  className?: string;
}) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = sampleTracks[trackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, trackIndex]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#0c1a22]/95 via-[#09151c]/90 to-[#061015]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`}
    >
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/8 pb-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#54e6df] animate-ping" />
          <span className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#54e6df]">
            Live Studio Player
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-mono-ui uppercase tracking-widest text-[#f1a35d]">
          <Radio size={11} className={isPlaying ? 'animate-pulse text-[#54e6df]' : ''} />
          <span>{currentTrack.badge}</span>
        </div>
      </div>

      {/* Track info & Disc Animation */}
      <div className="mt-4 flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className={`h-full w-full rounded-xl object-cover shadow-lg transition-transform duration-700 ${
              isPlaying ? 'scale-105 ring-2 ring-[#54e6df]/50' : 'opacity-90'
            }`}
          />
          <div
            className={`absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#09151c] text-[#54e6df] shadow-md ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '6s' }}
          >
            <Disc3 size={18} />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base font-bold text-white sm:text-lg">
            {currentTrack.title}
          </p>
          <p className="truncate text-xs text-white/60 sm:text-sm">{currentTrack.artist}</p>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="rounded bg-[#54e6df]/15 px-1.5 py-0.5 text-[9px] font-mono-ui font-medium text-[#54e6df]">
              24-bit / 48kHz
            </span>
            <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] font-mono-ui text-white/50">
              Streaming Standard
            </span>
          </div>
        </div>
      </div>

      {/* Soundwave equalizer */}
      <div className="my-4 rounded-xl border border-white/5 bg-black/30 p-2.5">
        <SoundWaveVisualizer isPlaying={isPlaying} height={34} barsCount={variant === 'full' ? 36 : 24} />
      </div>

      {/* Timeline slider */}
      <div className="space-y-1.5">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/15 accent-[#54e6df]"
          aria-label="Seek audio timeline"
        />
        <div className="flex justify-between font-mono-ui text-[10px] text-white/45">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration) || currentTrack.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          {sampleTracks.map((t, idx) => (
            <button
              key={t.title}
              type="button"
              onClick={() => {
                setTrackIndex(idx);
                setIsPlaying(true);
              }}
              className={`rounded-full px-2.5 py-1 font-mono-ui text-[9px] uppercase tracking-wider transition ${
                trackIndex === idx
                  ? 'border border-[#54e6df] bg-[#54e6df]/15 text-[#54e6df]'
                  : 'border border-white/10 text-white/40 hover:text-white'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#54e6df] to-[#40c4bd] text-[#071116] shadow-[0_0_20px_rgba(84,230,223,0.45)] transition hover:scale-105 active:scale-95"
            aria-label={isPlaying ? 'Pause' : 'Play audio preview'}
          >
            {isPlaying ? <Pause size={18} fill="#071116" /> : <Play size={18} fill="#071116" className="ml-0.5" />}
          </button>
        </div>
      </div>

      {/* DSP compatibility strip */}
      <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3 text-[10px] text-white/40">
        <span className="flex items-center gap-1 font-mono-ui uppercase tracking-wider">
          <Sparkles size={11} className="text-[#f1a35d]" /> Master Ingestion Ready
        </span>
        <div className="flex items-center gap-2 font-mono-ui text-[9px] uppercase tracking-wider text-white/50">
          <span>Spotify</span>
          <span>•</span>
          <span>Apple</span>
          <span>•</span>
          <span>Tidal</span>
          <span>•</span>
          <span>Amazon</span>
        </div>
      </div>
    </div>
  );
}

