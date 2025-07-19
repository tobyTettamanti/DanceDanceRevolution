import { Arrow } from './Arrow';
import { ScoreBoard } from './ScoreBoard';
import { SongSelect } from './SongSelect';

export class GameScreen {
    private arrows: Arrow[];
    private scoreBoard: ScoreBoard;
    private songSelect: SongSelect;

    constructor() {
        this.arrows = [];
        this.scoreBoard = new ScoreBoard();
        this.songSelect = new SongSelect();
    }

    public render(): void {
        // Logic to render the game screen, arrows, and score
        this.arrows.forEach(arrow => arrow.render());
        this.scoreBoard.render();
        this.songSelect.render();
    }

    public update(): void {
        // Logic to update the game state, including arrows and score
        this.arrows.forEach(arrow => arrow.update());
        this.scoreBoard.update();
    }

    public addArrow(arrow: Arrow): void {
        this.arrows.push(arrow);
    }

    public setScore(score: number): void {
        this.scoreBoard.setScore(score);
    }
}