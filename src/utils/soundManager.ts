class SoundManager {
  private enabled: boolean = true;
  private audioCache: { [key: string]: HTMLAudioElement } = {};
  private ctx: AudioContext | null = null;

  constructor() {
    // Lazy initialize to bypass browser autoplay restrictions
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  public play(soundName: "spin" | "correct" | "wrong" | "victory") {
    if (!this.enabled) return;

    this.initCtx();

    // 1. Try to play physical MP3 file first
    const path = `/sounds/${soundName}.mp3`;
    let audio = this.audioCache[path];
    if (!audio) {
      audio = new Audio(path);
      this.audioCache[path] = audio;
    }

    audio.currentTime = 0;
    audio.play().catch(() => {
      // 2. Fallback to Web Audio API synthesized sound if MP3 fails or is not found
      this.synthesizeFallback(soundName);
    });
  }

  private synthesizeFallback(soundName: "spin" | "correct" | "wrong" | "victory") {
    if (!this.ctx) return;
    
    // Resume audio context if suspended
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;

    try {
      switch (soundName) {
        case "spin": {
          // A single crisp mechanical click/tick of a wheel peg hitting a marker
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          
          osc.type = "triangle";
          osc.frequency.setValueAtTime(400, now);
          osc.frequency.exponentialRampToValueAtTime(80, now + 0.05);

          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.06);
          break;
        }

        case "correct": {
          // A beautiful, bright rising major chord (Bell sound)
          const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
          notes.forEach((freq, index) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + index * 0.06);

            gain.gain.setValueAtTime(0.0, now);
            gain.gain.linearRampToValueAtTime(0.12, now + index * 0.06 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.06 + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + index * 0.06);
            osc.stop(now + index * 0.06 + 0.35);
          });
          break;
        }

        case "wrong": {
          // A soft descending buzzer/wah-wah sound
          const osc1 = this.ctx.createOscillator();
          const osc2 = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc1.type = "sawtooth";
          osc1.frequency.setValueAtTime(180, now);
          osc1.frequency.linearRampToValueAtTime(120, now + 0.3);

          osc2.type = "triangle";
          osc2.frequency.setValueAtTime(183, now);
          osc2.frequency.linearRampToValueAtTime(122, now + 0.3);

          gain.gain.setValueAtTime(0.1, now);
          gain.gain.linearRampToValueAtTime(0.08, now + 0.15);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

          // Connect low-pass filter to make it softer and friendlier
          const filter = this.ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(400, now);

          osc1.connect(filter);
          osc2.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);

          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + 0.35);
          osc2.stop(now + 0.35);
          break;
        }

        case "victory": {
          // A triumphant Chiptune Fanfare!
          const melody = [
            { f: 523.25, d: 0.1 }, // C5
            { f: 587.33, d: 0.1 }, // D5
            { f: 659.25, d: 0.1 }, // E5
            { f: 783.99, d: 0.15 }, // G5
            { f: 659.25, d: 0.1 }, // E5
            { f: 783.99, d: 0.15 }, // G5
            { f: 1046.50, d: 0.4 }, // C6
          ];

          let timeOffset = 0;
          melody.forEach((note) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(note.f, now + timeOffset);

            gain.gain.setValueAtTime(0.08, now + timeOffset);
            gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + note.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + timeOffset);
            osc.stop(now + timeOffset + note.d + 0.05);

            timeOffset += note.d - 0.02;
          });
          break;
        }
      }
    } catch (e) {
      console.warn("Synth fallback audio failed:", e);
    }
  }
}

export const soundManager = new SoundManager();
