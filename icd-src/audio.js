// Intercostal Drainage Simulator — Procedural Web Audio Engine (Zero External Audio Files)
// Uses native Web Audio API oscillators, noise generators, and biquad filters

class IcdAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = true;
    this.hissGain = null;
    this.hissNode = null;
    this.droneGain = null;
    this.droneNode = null;
    this.lastBubbleTime = 0;
    this.lastSuctionBubbleTime = 0;
    this.state = null;
    this.tickerId = null;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    try {
      this.ctx = new AudioCtx();
      this._setupHiss();
      this._setupDrone();
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  _setupHiss() {
    if (!this.ctx) return;
    // Continuous white noise source passed through high-pass filter for air leak hiss
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 3400;
    filter.Q.value = 1.2;

    this.hissGain = this.ctx.createGain();
    this.hissGain.gain.value = 0;

    noise.connect(filter);
    filter.connect(this.hissGain);
    this.hissGain.connect(this.ctx.destination);
    noise.start(0);
    this.hissNode = noise;
  }

  _setupDrone() {
    if (!this.ctx) return;
    // Low-frequency wall vacuum drone (60Hz fundamental + 120Hz harmonic)
    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.value = 60;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 180;

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.value = 0;

    osc1.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);
    osc1.start(0);
    this.droneNode = osc1;
  }

  setMuted(muted) {
    this.muted = muted;
    if (!muted) {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.playBeep();
      if (!this.tickerId) {
        this.tickerId = setInterval(() => this._tick(), 40);
      }
      if (this.state) {
        this.syncState(this.state);
      }
    } else {
      if (this.tickerId) {
        clearInterval(this.tickerId);
        this.tickerId = null;
      }
      if (this.hissGain && this.ctx) {
        this.hissGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
      if (this.droneGain && this.ctx) {
        this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    }
  }

  _tick() {
    if (this.muted || !this.ctx || !this.state) return;
    const { waterSealBubbling, suctionBubbling } = this.state;
    const nowMs = Date.now();

    // Water seal bubbling cadence
    if (waterSealBubbling === 'continuous') {
      if (nowMs - this.lastBubbleTime > 130) {
        this.playBubble('cyan', true);
        this.lastBubbleTime = nowMs;
      }
    } else if (waterSealBubbling === 'intermittent') {
      if (nowMs - this.lastBubbleTime > 260) {
        this.playBubble('cyan', false);
        this.lastBubbleTime = nowMs;
      }
    }

    // Suction chamber bubbling cadence
    if (suctionBubbling === 'vigorous') {
      if (nowMs - this.lastSuctionBubbleTime > 150) {
        this.playBubble('violet', true);
        this.lastSuctionBubbleTime = nowMs;
      }
    } else if (suctionBubbling === 'gentle') {
      if (nowMs - this.lastSuctionBubbleTime > 320) {
        this.playBubble('violet', false);
        this.lastSuctionBubbleTime = nowMs;
      }
    }
  }

  isMuted() {
    return this.muted;
  }

  playBeep() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Minnaert acoustic bubble pop simulation: pitch sweeps upward as the bubble forms and breaks
  playBubble(tint = 'cyan', fast = false) {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const isSuction = tint === 'violet';
    const baseFreq = isSuction
      ? 260 + Math.random() * 140
      : 520 + Math.random() * 260;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    // Upward pitch chirp (Minnaert resonance during bubble detachment)
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.42, now + (fast ? 0.03 : 0.048));

    const peakGain = isSuction ? (fast ? 0.09 : 0.06) : (fast ? 0.14 : 0.11);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(peakGain, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (fast ? 0.04 : 0.065));

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + (fast ? 0.045 : 0.07));
  }

  playCough() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;

    // 1. Thoracic air rush whoosh
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.32);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(380, now);
    filter.Q.setValueAtTime(1.6, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start(now);
    noise.stop(now + 0.33);

    // 2. Cascade of rapid bubbling pops in water seal
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        if (!this.muted) this.playBubble('cyan', true);
      }, 70 + i * 42);
    }
  }

  // Synchronize ambient background sounds with simulator physics state
  syncState(state) {
    this.state = state;
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const { fault, clampPos, system, wallSuctionMode } = state;

    // Tube leak hiss
    const isLeaking = fault === 'tube_leak' && clampPos !== 'distal';
    if (this.hissGain) {
      const targetHiss = isLeaking ? 0.08 : 0;
      this.hissGain.gain.setTargetAtTime(targetHiss, now, 0.08);
    }

    // Wall suction drone
    const isSuctionOn = system === '3b' && wallSuctionMode !== 'off_open' && wallSuctionMode !== 'off_closed';
    if (this.droneGain) {
      const targetDrone = isSuctionOn ? (wallSuctionMode === 'high' ? 0.05 : 0.03) : 0;
      this.droneGain.gain.setTargetAtTime(targetDrone, now, 0.12);
    }
  }
}

const icdAudio = new IcdAudioEngine();
if (typeof window !== 'undefined') {
  window.icdAudio = icdAudio;
}
