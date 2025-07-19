export class SongSelect {
    private songs: string[];
    private selectedSong: string | null;

    constructor(songs: string[]) {
        this.songs = songs;
        this.selectedSong = null;
    }

    public displaySongSelection(): void {
        // Logic to display song selection UI
    }

    public selectSong(song: string): void {
        if (this.songs.includes(song)) {
            this.selectedSong = song;
            // Logic to update UI after song selection
        }
    }

    public getSelectedSong(): string | null {
        return this.selectedSong;
    }
}