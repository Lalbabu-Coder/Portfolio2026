"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Music, 
  ChevronDown, 
  ChevronUp, 
  ListMusic 
} from "lucide-react";

interface Track {
  id: string;
  title: string;
  artist: string;
  src: string;
  badge?: string;
}

const PLAYLIST: Track[] = [
  {
    id: "starboy",
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    src: "/audio/starboy.m4a",
    badge: "🔥 Global Hit"
  },
  {
    id: "blinding_lights",
    title: "Blinding Lights",
    artist: "The Weeknd",
    src: "/audio/blinding_lights.m4a",
    badge: "🏆 #1 Most Streamed"
  }
];

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = PLAYLIST[currentTrackIndex];

  // Set audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.src;
      audioRef.current.volume = isMuted ? 0 : volume;
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackIndex]);

  // Handle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay blocked or audio load error:", err);
          setIsPlaying(false);
        });
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.7;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const curr = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 0;
    setCurrentTime(curr);
    setDuration(dur);
    setProgress(dur ? (curr / dur) * 100 : 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = newProgress * duration;
  };

  // Format time display
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // AUTOMATIC START LOGIC (Browser Autoplay + First Interaction Fallback)
  useEffect(() => {
    let hasStarted = false;

    const startAudio = () => {
      if (hasStarted || !audioRef.current) return;
      
      const audio = audioRef.current;
      audio.volume = 0; // Start at 0 for gentle fade-in
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            hasStarted = true;
            setIsPlaying(true);
            
            // Smooth cinematic volume ramp-up
            let currentVol = 0;
            const targetVol = volume || 0.7;
            const fadeInterval = setInterval(() => {
              if (!audio || audio.paused) {
                clearInterval(fadeInterval);
                return;
              }
              currentVol += 0.05;
              if (currentVol >= targetVol) {
                audio.volume = targetVol;
                clearInterval(fadeInterval);
              } else {
                audio.volume = currentVol;
              }
            }, 80);

            // Remove all interaction listeners once started
            cleanupListeners();
          })
          .catch((err) => {
            console.log("Autoplay waiting for first visitor interaction...");
          });
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("touchstart", startAudio);
      window.removeEventListener("keydown", startAudio);
      window.removeEventListener("wheel", startAudio);
      window.removeEventListener("pointerdown", startAudio);
    };

    // 1. Try immediate autoplay
    startAudio();

    // 2. Attach immediate fallback to the very first user gesture (touch, scroll, click, key)
    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("scroll", startAudio, { once: true, passive: true });
    window.addEventListener("touchstart", startAudio, { once: true, passive: true });
    window.addEventListener("keydown", startAudio, { once: true });
    window.addEventListener("wheel", startAudio, { once: true, passive: true });
    window.addEventListener("pointerdown", startAudio, { once: true });

    // 3. Listen to custom hero event if user clicks play button in Hero
    const handleGlobalPlay = () => {
      startAudio();
    };
    window.addEventListener("portfolio-play-music", handleGlobalPlay);

    return () => {
      cleanupListeners();
      window.removeEventListener("portfolio-play-music", handleGlobalPlay);
    };
  }, []);

  return (
    <>
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
        onError={() => setIsPlaying(false)}
        preload="metadata"
      />

      {/* Floating Bottom Music Bar Dock */}
      <div className="fixed bottom-5 left-5 z-50 select-none">
        
        {/* PLAYLIST POPUP */}
        {showPlaylist && (
          <div className="mb-3 w-72 sm:w-80 bg-[#171a23]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ListMusic size={14} className="text-white" />
                Featured Soundtracks
              </span>
              <button
                onClick={() => setShowPlaylist(false)}
                className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5 rounded hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            
            <div className="mt-3 space-y-2">
              {PLAYLIST.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={() => {
                    setCurrentTrackIndex(idx);
                    setShowPlaylist(false);
                    if (!isPlaying) {
                      setTimeout(() => {
                        audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
                      }, 100);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                    idx === currentTrackIndex
                      ? "bg-white/10 border border-white/20 text-white font-medium shadow-sm"
                      : "hover:bg-white/5 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center shrink-0 border border-white/10">
                      {idx === currentTrackIndex && isPlaying ? (
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 h-full bg-white animate-pulse" />
                          <span className="w-0.5 h-2/3 bg-white animate-pulse delay-75" />
                          <span className="w-0.5 h-full bg-white animate-pulse delay-150" />
                        </div>
                      ) : (
                        <Music size={13} className="text-slate-400" />
                      )}
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-medium text-white truncate">{track.title}</p>
                      <p className="text-[10px] text-slate-400 truncate">{track.artist}</p>
                    </div>
                  </div>
                  {track.badge && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 shrink-0 font-mono">
                      {track.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FLOATING AMBIENT BADGE */}
        <div className="mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171a23]/90 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 shadow-lg pointer-events-none transition-all">
          <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
          {isPlaying ? (
            <span>Playing: <strong className="text-white font-medium">{currentTrack.title}</strong></span>
          ) : (
            <span>🎵 Auto-starts on scroll or click</span>
          )}
        </div>

        {/* COMPACT FLOATING CONTROLLER PILL */}
        <div className="bg-[#171a23]/90 hover:bg-[#171a23] backdrop-blur-xl border border-white/15 hover:border-white/25 shadow-[0_10px_35px_rgba(0,0,0,0.5)] rounded-full px-3.5 py-2.5 flex items-center gap-3 transition-all duration-300 max-w-[92vw] sm:max-w-md">
          
          {/* Vinyl Disc / Music Icon with Spin animation when playing */}
          <div 
            onClick={togglePlay}
            className="relative cursor-pointer shrink-0 group"
            title={isPlaying ? "Pause music" : "Play English Soundtrack"}
          >
            <div className={`w-9 h-9 rounded-full bg-[#11141c] border border-white/20 flex items-center justify-center transition-transform ${
              isPlaying ? "animate-[spin_4s_linear_infinite]" : "group-hover:scale-105"
            }`}>
              <div className="w-3.5 h-3.5 rounded-full bg-[#1d212c] border border-white/30 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white" />
              </div>
            </div>

            {/* Glowing active indicator */}
            {isPlaying && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            )}
          </div>

          {/* Track Info & Equalizer */}
          <div className="flex flex-col min-w-0 pr-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-white truncate max-w-[120px] sm:max-w-[160px]">
                {currentTrack.title}
              </span>
              
              {/* Equalizer Soundwave Bars */}
              <div className="flex items-end gap-[2px] h-3 shrink-0">
                <span className={`w-0.5 bg-slate-300 rounded-full transition-all duration-150 ${isPlaying ? "h-3 animate-pulse" : "h-1"}`} />
                <span className={`w-0.5 bg-slate-300 rounded-full transition-all duration-150 ${isPlaying ? "h-2 animate-pulse delay-100" : "h-1"}`} />
                <span className={`w-0.5 bg-slate-300 rounded-full transition-all duration-150 ${isPlaying ? "h-3.5 animate-pulse delay-75" : "h-1"}`} />
                <span className={`w-0.5 bg-slate-300 rounded-full transition-all duration-150 ${isPlaying ? "h-1.5 animate-pulse delay-150" : "h-1"}`} />
              </div>
            </div>
            
            <span className="text-[10px] text-slate-400 truncate max-w-[120px] sm:max-w-[160px]">
              {currentTrack.artist}
            </span>
          </div>

          {/* Primary Controls */}
          <div className="flex items-center gap-1 shrink-0">
            {/* Prev Track */}
            <button
              onClick={handlePrev}
              aria-label="Previous track"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
              title="Previous"
            >
              <SkipBack size={13} />
            </button>

            {/* Play / Pause Pill Button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="w-8 h-8 rounded-full bg-white text-[#171a23] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={14} className="fill-current" /> : <Play size={14} className="fill-current translate-x-0.5" />}
            </button>

            {/* Next Track */}
            <button
              onClick={handleNext}
              aria-label="Next track"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
              title="Next"
            >
              <SkipForward size={13} />
            </button>
          </div>

          {/* Volume & Playlist Selector */}
          <div className="hidden sm:flex items-center gap-1.5 pl-1 border-l border-white/10 shrink-0">
            <button
              onClick={toggleMute}
              aria-label="Toggle mute"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              aria-label="Open playlist"
              className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
                showPlaylist ? "bg-white/20 text-white" : "text-slate-400 hover:text-white hover:bg-white/10"
              }`}
              title="Playlist"
            >
              <ListMusic size={14} />
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
