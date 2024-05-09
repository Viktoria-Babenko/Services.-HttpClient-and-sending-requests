import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {DataComponent} from "./data.component"
import {HttpService } from "./http.servise";
import {Painting} from './Painting';

@Component({
    selector: 'my-app',
    template: `<div class="div">
                  <div *ngFor="let painting of paintings; let i = index" >
                    <img class="input" src="{{painting.image}}" (click)="onSelect(i)" >
                  </div>
               </div>
               <data-comp ></data-comp>`,
    providers: [HttpService],
    styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit { 
    
    @ViewChild(DataComponent)
    private paint: DataComponent;

    paintings: Painting[] = [];

    constructor(private httpService: HttpService){}
    @Output() onChanged = new EventEmitter<number>();
    ngOnInit(){
        this.httpService.getData().subscribe({
            next: (data: Painting[]) => this.paintings = data})
    }
    onSelect(p : any ){

        this.paint.SetContmp(this.paintings[p]);
    }
}
