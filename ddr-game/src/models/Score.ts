export class Score {
    private score: number;
    private combo: number;

    constructor() {
        this.score = 0;
        this.combo = 0;
    }

    public getScore(): number {
        return this.score;
    }

    public getCombo(): number {
        return this.combo;
    }

    public updateScore(points: number): void {
        this.score += points;
        this.combo++;
    }

    public resetCombo(): void {
        this.combo = 0;
    }

    public calculateFinalScore(): number {
        // Example scoring logic: higher combo gives more points
        return this.score + (this.combo * 10);
    }
}