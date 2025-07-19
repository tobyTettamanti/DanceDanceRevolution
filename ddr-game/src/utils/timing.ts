function isNoteHit(noteTime: number, hitTime: number, timingThreshold: number): boolean {
    return Math.abs(noteTime - hitTime) <= timingThreshold;
}

function calculateTimingScore(noteTime: number, hitTime: number, timingThreshold: number): number {
    const timingDifference = Math.abs(noteTime - hitTime);
    
    if (timingDifference <= timingThreshold / 2) {
        return 100; // Perfect hit
    } else if (timingDifference <= timingThreshold) {
        return 50; // Good hit
    } else {
        return 0; // Miss
    }
}

export { isNoteHit, calculateTimingScore };