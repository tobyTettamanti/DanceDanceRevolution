class InputManager {
    private keyStates: { [key: string]: boolean } = {};

    constructor() {
        this.initialize();
    }

    private initialize() {
        window.addEventListener('keydown', (event) => {
            this.keyStates[event.key] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keyStates[event.key] = false;
        });
    }

    public isKeyPressed(key: string): boolean {
        return this.keyStates[key] || false;
    }

    public resetKeys() {
        this.keyStates = {};
    }
}

export default InputManager;