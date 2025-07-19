// src/models/Song.ts

export class Song {
    title: string;
    artist: string;
    notes: Note[];

    constructor(title: string, artist: string, notes: Note[]) {
        this.title = title;
        this.artist = artist;
        this.notes = notes;
    }
}