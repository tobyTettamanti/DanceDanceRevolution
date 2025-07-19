class ScoreManager {
    private score: number;
    private combo: number;

    constructor() {
        this.score = 0;
        this.combo = 0;
    }

    public hitNote(): void {
        this.combo++;
        this.score += this.calculateScore(this.combo);
    }

    public missNote(): void {
        this.combo = 0;
    }

    private calculateScore(combo: number): number {
        return combo * 100; // Example scoring logic
    }

    public getScore(): number {
        return this.score;
    }

    public getCombo(): number {
        return this.combo;
    }
}