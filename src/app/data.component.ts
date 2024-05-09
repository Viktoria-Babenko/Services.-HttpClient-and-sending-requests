import {Input,Component} from '@angular/core';
import {Painting} from './Painting';
       
@Component({
    selector: 'data-comp',
    template: `
    <div class="div1">
            <h1>{{name}}</h1>
            <img class="img" src="{{image}}">
            <h2>{{author}}</h2>
            <h5>{{year}} {{size}}</h5>
            <p>{{story}}</p>
    </div>`,
    styleUrls: ['./app.component.css']
})

export class DataComponent { 
    name: string;
    author: string;
    year: number;
    size: string;
    image: string;
    story: string;
    SetContmp(obj: Painting){
        this.name = obj.name;
        this.author = obj.author;
        this.year = obj.year;
        this.size = obj.size;
        this.image = obj.image;
        this.story = obj.story;
    }
}