import { AfterViewChecked, Component, OnChanges, SimpleChanges } from "@angular/core";
import { HelloChildComponent } from "../hello-child/hello-child.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'hello-world',
    standalone: true,
    templateUrl: './HelloWorld.component.html',
    styleUrls: ['./HelloWorld.component.css'],
    imports: [HelloChildComponent, CommonModule]
})

export class HelloWorldComponent{
   
    
    title = 'Hello World'
    childTitle = 'Hello World Child'
    items = ['item1', 'item2', 'item3', 'item4'];

    addItem(newItem: string) {
        this.items.push(newItem);
    }



    hanleChangeTitle(): void {
        if(this.childTitle == 'Hello World'){
            this.childTitle = 'Hello World change';
        }else{
            this.childTitle = 'Hello World'
        }
    }
}