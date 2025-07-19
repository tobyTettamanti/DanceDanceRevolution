class Note {
    timing: number;
    position: number;

    constructor(timing: number, position: number) {
        this.timing = timing;
        this.position = position;
    }

    isHit(currentTime: number): boolean {
        // Check if the note has been hit based on the current time
        return Math.abs(currentTime - this.timing) < 0.1; // Example threshold
    }
}

export default Note;