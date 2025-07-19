class Arrow {
    constructor(public position: { x: number; y: number }) {}

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'red'; // Example color for the arrow
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x - 10, this.position.y + 20);
        ctx.lineTo(this.position.x + 10, this.position.y + 20);
        ctx.closePath();
        ctx.fill();
    }

    update(deltaTime: number) {
        this.position.y += deltaTime * 100; // Move the arrow down the screen
    }
}

export default Arrow;