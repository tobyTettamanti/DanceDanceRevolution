export type Note = {
    timing: number;
    position: number;
    isHit: boolean;
};

export type Song = {
    title: string;
    artist: string;
    notes: Note[];
};

export type Score = {
    currentScore: number;
    updateScore: (points: number) => void;
};

export interface GameState {
    score: Score;
    currentSong: Song;
    isGameOver: boolean;
}