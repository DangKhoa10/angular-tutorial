import { Component, Input, Output , EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hello-child',
  standalone: true,
  imports: [],
  templateUrl: './hello-child.component.html',
  styleUrl: './hello-child.component.css'
})
export class HelloChildComponent implements OnChanges{
  
  @Input() child = ""
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['child']) {
      console.log('Items child:', this.child);
      // Thực hiện các hành động khi 'items' thay đổi
  }
  }
}
