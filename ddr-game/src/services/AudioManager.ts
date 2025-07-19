class AudioManager {
    private audioContext: AudioContext;
    private currentTrack: AudioBufferSourceNode | null;

    constructor() {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.currentTrack = null;
    }

    async loadTrack(url: string): Promise<AudioBuffer> {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return this.audioContext.decodeAudioData(arrayBuffer);
    }

    playTrack(buffer: AudioBuffer) {
        if (this.currentTrack) {
            this.currentTrack.stop();
        }
        this.currentTrack = this.audioContext.createBufferSource();
        this.currentTrack.buffer = buffer;
        this.currentTrack.connect(this.audioContext.destination);
        this.currentTrack.start(0);
    }

    stopTrack() {
        if (this.currentTrack) {
            this.currentTrack.stop();
            this.currentTrack = null;
        }
    }
}

export default AudioManager;