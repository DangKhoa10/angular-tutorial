import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hello-child',
  standalone: true,
  imports: [],
  templateUrl: './hello-child.component.html',
  styleUrl: './hello-child.component.css'
})
export class HelloChildComponent {
  @Input() child = ""
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
