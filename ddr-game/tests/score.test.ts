import { Score } from '../src/models/Score';

describe('Score Class', () => {
    let score: Score;

    beforeEach(() => {
        score = new Score();
    });

    test('initial score should be zero', () => {
        expect(score.getCurrentScore()).toBe(0);
    });

    test('should increase score on correct hit', () => {
        score.updateScore(true);
        expect(score.getCurrentScore()).toBeGreaterThan(0);
    });

    test('should not increase score on missed hit', () => {
        score.updateScore(false);
        expect(score.getCurrentScore()).toBe(0);
    });

    test('should correctly calculate score based on multiple hits', () => {
        score.updateScore(true);
        score.updateScore(true);
        score.updateScore(false);
        expect(score.getCurrentScore()).toBeGreaterThan(0);
    });
});