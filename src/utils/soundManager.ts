class SoundManager {
  private enabled: boolean = true;
  private audioCache: { [key: string]: HTMLAudioElement } = {};
  private ctx: AudioContext | null = null;

  constructor() {
    // Lazy initialize to bypass browser autoplay restrictions
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = (
        window.AudioContext ||
        (window as any).webkitAudioContext
      );

      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  public play(
    soundName: "spin" | "correct" | "wrong" | "victory"
  ) {
    if (!this.enabled) return;

    this.initCtx();

    // Megpróbálja betölteni az MP3-at.
    // Ha nincs ilyen fájl, automatikusan a generált hangot használja.
    const path = `/sounds/${soundName}.mp3`;

    let audio = this.audioCache[path];

    if (!audio) {
      audio = new Audio(path);
      this.audioCache[path] = audio;
    }

    audio.currentTime = 0;

    audio.play().catch(() => {
      this.synthesizeFallback(soundName);
    });
  }

  private synthesizeFallback(
    soundName: "spin" | "correct" | "wrong" | "victory"
  ) {
    if (!this.ctx) return;

    // Resume audio context if suspended
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;

    try {
      switch (soundName) {

        // =====================================================
        // SPIN
        // =====================================================
        case "spin": {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = "triangle";

          osc.frequency.setValueAtTime(
            400,
            now
          );

          osc.frequency.exponentialRampToValueAtTime(
            80,
            now + 0.05
          );

          gain.gain.setValueAtTime(
            0.15,
            now
          );

          gain.gain.exponentialRampToValueAtTime(
            0.01,
            now + 0.05
          );

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.06);

          break;
        }

        // =====================================================
        // CORRECT
        // =====================================================
        case "correct": {
          // Bright, positive rising major chord
          const notes = [
            523.25,  // C5
            659.25,  // E5
            783.99,  // G5
            1046.50, // C6
          ];

          notes.forEach((freq, index) => {
            if (!this.ctx) return;

            const osc =
              this.ctx.createOscillator();

            const gain =
              this.ctx.createGain();

            const start =
              now + index * 0.06;

            osc.type = "sine";

            osc.frequency.setValueAtTime(
              freq,
              start
            );

            gain.gain.setValueAtTime(
              0.0,
              start
            );

            gain.gain.linearRampToValueAtTime(
              0.12,
              start + 0.02
            );

            gain.gain.exponentialRampToValueAtTime(
              0.001,
              start + 0.3
            );

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(start);
            osc.stop(start + 0.35);
          });

          break;
        }

        // =====================================================
        // WRONG
        //
        // KVÁK - KVÁK - KVÁÁÁK
        // =====================================================
        case "wrong": {

          const playQuack = (
            startTime: number,
            startFrequency: number,
            endFrequency: number,
            duration: number,
            volume: number
          ) => {

            if (!this.ctx) return;

            // Fő hang
            const osc1 =
              this.ctx.createOscillator();

            // Másodlagos hang - ettől lesz
            // "kacsás/békás" karaktere
            const osc2 =
              this.ctx.createOscillator();

            const gain =
              this.ctx.createGain();

            const filter =
              this.ctx.createBiquadFilter();

            // Fűrészjel adja a harsányabb karaktert
            osc1.type = "sawtooth";

            // Square oscillator hozzáad egy kis
            // "kvák" jellegű felhangot
            osc2.type = "square";

            osc1.frequency.setValueAtTime(
              startFrequency,
              startTime
            );

            osc1.frequency.exponentialRampToValueAtTime(
              endFrequency,
              startTime + duration
            );

            osc2.frequency.setValueAtTime(
              startFrequency * 0.97,
              startTime
            );

            osc2.frequency.exponentialRampToValueAtTime(
              endFrequency * 0.97,
              startTime + duration
            );

            // Low-pass filter:
            // ne legyen túl éles vagy kellemetlen
            filter.type = "lowpass";

            filter.frequency.setValueAtTime(
              750,
              startTime
            );

            filter.Q.setValueAtTime(
              5,
              startTime
            );

            // Hangerő felépítése
            gain.gain.setValueAtTime(
              0.001,
              startTime
            );

            gain.gain.linearRampToValueAtTime(
              volume,
              startTime + 0.015
            );

            gain.gain.setValueAtTime(
              volume,
              startTime + duration * 0.55
            );

            gain.gain.exponentialRampToValueAtTime(
              0.001,
              startTime + duration
            );

            // Bekötés
            osc1.connect(filter);
            osc2.connect(filter);

            filter.connect(gain);
            gain.connect(this.ctx.destination);

            // Indítás
            osc1.start(startTime);
            osc2.start(startTime);

            // Leállítás
            osc1.stop(
              startTime + duration + 0.03
            );

            osc2.stop(
              startTime + duration + 0.03
            );
          };

          // ---------------------------------------------
          // KVÁK
          // ---------------------------------------------
          playQuack(
            now,
            360,
            190,
            0.18,
            0.16
          );

          // ---------------------------------------------
          // KVÁK
          // ---------------------------------------------
          playQuack(
            now + 0.19,
            330,
            165,
            0.18,
            0.15
          );

          // ---------------------------------------------
          // KVÁÁÁÁK
          // Hosszabb és mélyebb
          // ---------------------------------------------
          playQuack(
            now + 0.40,
            300,
            95,
            0.42,
            0.18
          );

          break;
        }

        // =====================================================
        // VICTORY
        //
        // TŰ - TŰ - TŰ - TŰŰŰ
        // =====================================================
        case "victory": {

          const melody = [
            {
              f: 523.25,
              d: 0.10,
            },

            {
              f: 659.25,
              d: 0.10,
            },

            {
              f: 783.99,
              d: 0.10,
            },

            {
              f: 1046.50,
              d: 0.16,
            },

            {
              f: 783.99,
              d: 0.10,
            },

            {
              f: 1046.50,
              d: 0.16,
            },

            {
              f: 1318.51,
              d: 0.50,
            },
          ];

          let timeOffset = 0;

          melody.forEach((note) => {

            if (!this.ctx) return;

            const osc =
              this.ctx.createOscillator();

            const gain =
              this.ctx.createGain();

            const start =
              now + timeOffset;

            // Triangle:
            // játékos, tiszta, pozitív hang
            osc.type = "triangle";

            osc.frequency.setValueAtTime(
              note.f,
              start
            );

            // A hang elején gyorsan felépül
            gain.gain.setValueAtTime(
              0.001,
              start
            );

            gain.gain.linearRampToValueAtTime(
              note.f >= 1318
                ? 0.16
                : 0.10,
              start + 0.015
            );

            // A hosszú utolsó hang szépen lecseng
            gain.gain.exponentialRampToValueAtTime(
              0.001,
              start + note.d
            );

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(start);

            osc.stop(
              start + note.d + 0.05
            );

            timeOffset +=
              note.d - 0.015;
          });

          break;
        }
      }
    } catch (e) {
      console.warn(
        "Synth fallback audio failed:",
        e
      );
    }
  }
}

export const soundManager =
  new SoundManager();
