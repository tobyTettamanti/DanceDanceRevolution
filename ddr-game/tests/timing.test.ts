import { isNoteHit } from '../src/utils/timing';

describe('Timing Utility Functions', () => {
    test('should return true if note is hit within timing threshold', () => {
        const noteTiming = 1000; // Example note timing
        const playerTiming = 1005; // Example player timing
        const threshold = 10; // Example timing threshold

        expect(isNoteHit(noteTiming, playerTiming, threshold)).toBe(true);
    });

    test('should return false if note is hit outside timing threshold', () => {
        const noteTiming = 1000; // Example note timing
        const playerTiming = 1020; // Example player timing
        const threshold = 10; // Example timing threshold

        expect(isNoteHit(noteTiming, playerTiming, threshold)).toBe(false);
    });
});