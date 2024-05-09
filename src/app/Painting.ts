export class Painting {
    name: string;
    author: string;
    year: number;
    size: string;
    image: string;
    story: string;

    constructor(name: string, author: string, year: number, size: string, image: string, story: string) {

        this.name = name;
        this.author = author;
        this.year = year;
        this.size = size;
        this.image = image;
        this.story = story;
    }
}